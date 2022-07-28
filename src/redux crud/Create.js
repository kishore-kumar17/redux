import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Create.css";
import { useDispatch } from "react-redux";
import { addUsers } from "./postSlice";

const Create = () => {
  const dispatch = useDispatch();
  const [data, setdata] = useState({});
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  const val = {
    name: data.name,
    fathername: data.fathername,
    adharnumber: data.adharnumber,
    mobilenumber: data.mobilenumber,
    dob: data.dob,
  };
  // console.log(val);
  // adhar card regex ;



  const change = (e) => {
    e.preventDefault();
    setdata({ ...data, [e.target.name]: e.target.value });
    if (!e.target.value) {
      seterror({
        ...error,
        [e.target
          .name]: `${e.target.name} CAN'T BE EMPTY SO FILL IN THE VALUES `,
      });
    } else {
      seterror({ ...error, [e.target.name]: "" });
    }
    // console.log(data);
  };


//validation....

  const handlesubmit = (e) => {
    const adhar = /[01]\d{3}[\s-]?\d{4}[\s-]?\d{4}/;
    const mnum =/^([+]\d{2}[ ])?\d{10}$/;

    e.preventDefault();
    if (!data.name) {
      seterror({ name: "NAME is important in adhar card" });
    } else if (!data.fathername) {
      seterror({ fathername: "FATHER NAME  is important in adhar card" });
    } else if (!data.adharnumber) {
      seterror({ adharnumber: "ADHAR NUMBER is must" });
    } else if (!data.adharnumber.match(adhar)) {
      seterror({ adharnumber: "ADHAR NUMBER invalid twele numbers only" });
    } else if (!data.mobilenumber) {
      seterror({ mobilenumber: "MOBILE NUMBER  is important in adhar card" });
    }else if (!data.mobilenumber.match(mnum)) {
      seterror({ mobilenumber: "MOBILE NUMBER  is invalid place enter a valid number" });
    } else if (!data.dob) {
      seterror({ dob: "DATE OF BIRTH is important in adhar card" });
    } else {
      dispatch(addUsers(val));
      navigate("/viewcrud");
    }
   
  };

  return (
    <div>
      <h2>SIGNIN ADHAR </h2>
      <div className="container col-4 mt-5 box">
        <div className="row">
          <Form onSubmit={handlesubmit}>
            <div>
              <Form.Label> NAME :</Form.Label>
              <Form.Control
                type="text"
                name="name"
                autoFocus
                onChange={(e) => change(e)}
              ></Form.Control>
              <span style={{ color: "red" }} pattern="[a-z]*">
                {error.name}
              </span>
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
                type="text"
                name="adharnumber"
                placeholder="0394-2839-7825"
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
              <Form.Label> DOB :</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                onChange={(e) => change(e)}
              ></Form.Control>
              <span style={{ color: "red" }}>{error.dob}</span>
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
