import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Create.css";

const Create = () => {
  const [data, setdata] = useState({});
  const [error, seterror] = useState("");
  const navigate = useNavigate();

//adhar card regex ;
// const adhar = ^\d{4}\s\d{4}\s\d{4}$ ;


  const change = (e) => {
    e.preventDefault();
    setdata({ ...data, [e.target.name]: e.target.value });
    if (!e.target.value) {
      seterror({
        ...error,
        [e.target.name]: `${e.target.name} CAN'T BE EMPTY SO FILL IN THE VALUES `,
      });
    } else {
      seterror({ ...error, [e.target.name]: "" });
    }
    // console.log(data);
  };
  const submit = (e) => {
    e.preventDefault();
    setdata({ ...data, [e.target.name]: e.target.value });
    console.log(data);
    navigate("/viewcrud");
  };

  return (
    <div>
      <h2>SIGNIN ADHAR </h2>
      <div className="container col-4 mt-5 box">
        <div className="row">
          <Form onSubmit={(e) => submit(e)}>
            <div>
              <Form.Label> NAME :</Form.Label>
              <Form.Control
                type="text"
                name="name"
                autoFocus
                onChange={(e) => change(e)}
              ></Form.Control>
              <span style={{ color: "red" }} pattern="[a-z]*">{error.name}</span>
            </div>
            <br />
            <div>
              <Form.Label> FATHER'S NAME :</Form.Label>
              <Form.Control
                type="text"
                name="fathername"
                onChange={(e) => change(e)}
              ></Form.Control>
              <span style={{ color: "red" }}>{error.fathername}</span>
            </div>
            <br />
            <div>
              <Form.Label> ADHAR NUMBER :</Form.Label>
              <Form.Control
                type="number"
                name="adharnumber"
                onChange={(e) => change(e)}
              ></Form.Control>
              <span style={{ color: "red" }}>{error.adharnumber}</span>
            </div>
            <br />
            <div>
              <Form.Label> MOBILE NUMBER :</Form.Label>
              <Form.Control
                type="number"
                name="mobilenumber"
                onChange={(e) => change(e)}
              ></Form.Control>
              <span style={{ color: "red" }}>{error.mobilenumber}</span>
            </div>
            <br />
            <div>
              <Form.Label> ADDRESS :</Form.Label>
              <Form.Control
                type="address"
                name="address"
                onChange={(e) => change(e)}
              ></Form.Control>
              <span style={{ color: "red" }}>{error.address}</span>
            </div>
            <br />
            <div>
              <Button type="submit" variant="outline-success">
                SIGNIN
              </Button>
            </div>
          </Form> 
        </div>
      </div>
    </div>
  );
};

export default Create;
