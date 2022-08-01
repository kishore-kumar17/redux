import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUsers, fetchUsers } from "./postSlice";

const Editcrud = () => {
  const dispatch = useDispatch();
  const [editdata, seteditdata] = useState({});
  const [error, seterror] = useState("");
  const upgrad = useSelector((state) => state.post);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const updatedata =
    upgrad && upgrad.posts.find((data) => data.id === parseInt(id));
  //   console.log(updatedata);
  useEffect(() => {
    if (updatedata) {
      seteditdata(updatedata);
    }
  }, [updatedata]);

  const changeval = {
    id: parseInt(id),
    name: editdata.name,
    fathername: editdata.fathername,
    adharnumber: editdata.adharnumber,
    mobilenumber: editdata.mobilenumber,
    dob: editdata.dob,
  };
  //   console.log(changeval);

  const change = (e) => {
    e.preventDefault();
    seteditdata({ ...editdata, [e.target.name]: e.target.value });
    if (!e.target.value) {
      seterror({
        ...error,
        [e.target
          .name]: `${e.target.name} CAN'T BE EMPTY SO FILL IN THE VALUES `,
      });
    } else {
      seterror({ ...error, [e.target.name]: "" });
    }
    // console.log(editdata);
  };

  const handlesubmit = (e) => {
    //regex adhar,mobilenumber

    const adhar = /[01]\d{3}[\s-]?\d{4}[\s-]?\d{4}/;
    const mnum = /^([+]\d{2}[ ])?\d{10}$/;

    //validation....

    e.preventDefault();
    if (!editdata.name) {
      seterror({ name: "NAME is important in adhar card" });
    } else if (!editdata.fathername) {
      seterror({ fathername: "FATHER NAME  is important in adhar card" });
    } else if (!editdata.adharnumber) {
      seterror({ adharnumber: "ADHAR NUMBER is must" });
    } else if (!editdata.adharnumber.match(adhar)) {
      seterror({ adharnumber: "ADHAR NUMBER invalid twele numbers only" });
    } else if (!editdata.mobilenumber) {
      seterror({ mobilenumber: "MOBILE NUMBER  is important in adhar card" });
    } else if (!editdata.mobilenumber.match(mnum)) {
      seterror({
        mobilenumber: "MOBILE NUMBER  is invalid place enter a valid number",
      });
    } else if (!editdata.dob) {
      seterror({ dob: "DATE OF BIRTH is important in adhar card" });
    } else {
      dispatch(editUsers(changeval));
      navigate("/viewcrud");
    }
  };

  return (
    <div>
      <h2>SIGNIN ADHAR </h2>
      <div className="container mt-5 box">
        <div>
          <div className="row">
            <Form onSubmit={handlesubmit}>
              <div>
                <Form.Label> NAME :</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  autoFocus
                  value={editdata.name}
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
                  value={editdata.fathername}
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
                  value={editdata.adharnumber}
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
                  value={editdata.mobilenumber}
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
                  value={editdata.dob}
                ></Form.Control>
                <span style={{ color: "red" }}>{error.dob}</span>
              </div>
              <br />
              <div>
                <Button type="submit" variant="info">
                  UPDATE
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editcrud;
