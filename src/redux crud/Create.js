import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Create.css";
import { useDispatch } from "react-redux";
import { addUsers } from "./postSlice";

const Create = () => {
  const dispatch = useDispatch();
  const [data, setdata] = useState({});
  const [error, seterror] = useState('');
  const navigate = useNavigate();

  

  const val = {
    name: data.name,
    fathername: data.fathername,
    adharnumber: data.adharnumber,
    mobilenumber: data.mobilenumber,
    dob: data.dob,
  };

  const change = (e) => {
    e.preventDefault();
    setdata({ ...data, [e.target.name]: e.target.value });
    if (!e.target.value) {
      seterror({
        ...error,[e.target.name]: `${e.target.name} CAN'T BE EMPTY SO FILL IN THE VALUES `,
      });
    } else {
      seterror({ ...error, [e.target.name]: "" });
    }
    console.log(data);

  };
      // test cases....have been error.


  //validation....

  const handlesubmit = (e) => {
    // regex validation
    const adhar = /[01]\d{3}[\s-]?\d{4}[\s-]?\d{4}/;
    const mnum = /^([+]\d{2}[ ])?\d{10}$/;

    // const dateRegex bending

    e.preventDefault();
    if (!data.name) {
      seterror({ name: "NAME is important in adhar card" });
    } else if (!data.fathername) {
      seterror({ fathername: "FATHER NAME  is important in adhar card" });
    } else if (!data.adharnumber) {
      seterror({ adharnumber: "ADHAR NUMBER is must" });
    } else if (!data?.adharnumber?.match(adhar)) {
      seterror({ adharnumber: "ADHAR NUMBER invalid twele numbers only" });
    } else if (!data.mobilenumber) {
      seterror({ mobilenumber: "MOBILE NUMBER  is important in adhar card" });
    } else if (!data.mobilenumber.match(mnum)) {
      seterror({
        mobilenumber: "MOBILE NUMBER  is invalid place enter a valid number",
      });
    } else if (!data.dob) {
      seterror({ dob: "DATE OF BIRTH is important in adhar card" });
    } else if (!data.dob.match()) {
      seterror({
        dob: "enter a valid date of birth",
      });
    } else {
      dispatch(addUsers(val));
      navigate("/viewcrud");
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", marginTop: "20px" }}>SIGNIN ADHAR </h3>

      <div className="container col-4 mt-5 box">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXG-ROFfp8aoKyQz-gYy3SnXE7udtcegMXu4U3_i1m8fHbS9PAsstlRqQgc84_y-OgEtQ&usqp=CAU"
          id="logo"
        />
        <div className="row">
          {/* mouseEvent */}
          <Form onSubmit={handlesubmit}>
            <div>
              <Form.Label> NAME :</Form.Label>
              <Form.Control
                type="text"
                name="name"
                autoFocus
                onChange={(e) => change(e)}
                data-testid="name"
                value={data.name}
              ></Form.Control>
              <span style={{ color: "red" }}>
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
                value={data.fathername}
                data-testid="fathername"
              ></Form.Control>
              <span style={{ color: "red" }}>{error.fathername}</span>
            </div>
            <br />
            <div>
              <Form.Label> AADHAAR NUMBER :</Form.Label>
              <Form.Control
                type="text"
                name="adharnumber"
                placeholder="0394-2839-7825"
                onChange={(e) => change(e)}
                value={data.adharnumber}
                data-testid="adharnumber"
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
                value={data.mobilenumber}
                data-testid="mobilenumber"
              ></Form.Control>
              <span style={{ color: "red" }}>{error.mobilenumber}</span>
            </div>
            <div>
              <Form.Label> DOB :</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                onChange={(e) => change(e)}
                value={data.dob}
                data-testid="dob"
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
