import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
toast.configure();

const Add = () => {
  const dispatch = useDispatch();
  const [input, setinput] = useState({});
  const [error, seterror] = useState("");
  const storeview = useSelector((state) => state);
  const navi = useNavigate();

  const tost = () => {
    toast.success("Login successfully", { autoclose: 100000 });
  };

  //validation
  const handlesubmit = (e) => {
    e.preventDefault();

    const validmail =
      /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    if (!input.firstname) {
      seterror({ firstname: "First name is must" });
    } else if (!input.lastname) {
      seterror({ lastname: "last name is must" });
    } else if (!input.email) {
      seterror({ email: "email is must" });
    } else if (!input.email.match(validmail)) {
      seterror({ email: "Enter Valid email" });
    } else if (!input.metaname) {
      seterror({ metaname: "is must" });
    } else {
      const alldata = {
        id: storeview.length + 1,
        firstname: input.firstname,
        lastname: input.lastname,
        email: input.email,
        metaname: input.metaname,
      };

      // console.log(alldata)

      dispatch({ type: "addmeta", payload: alldata });
      tost();
      navi("/view");
    }
  };

  const change = (e) => {
    e.preventDefault();
    setinput({ ...input, [e.target.name]: e.target.value });
    if (!e.target.value) {
      seterror({
        ...error,
        [e.target.name]: `${e.target.name} can't be blank  `,
      });
    } else {
      seterror({ ...error, [e.target.name]: "" });
    }
  };
  return (
    <div className="container gredian">
      <div className="row">
        <div className="col-lg-6 mt-5">
          <img
            alt="logo"
            src="https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            className="img-fluid img"
            id="image"
          />
        </div>
        <div className="col-lg-6 mt-5 center">
          <form onSubmit={(e) => handlesubmit(e)}>
            <div>
              <div>
                <i>
                  <h1 className="font"> 🅼🅴🆃🅰 🅶🆁🅰🅼</h1>
                </i>
              </div>
              <label>FIRST NAME </label>
              : <input
                type="text"
                name="firstname"
                autoFocus
                onChange={(e) => change(e)}
              ></input>
              <p style={{ color: "red" }}>{error.firstname}</p>
            </div>
            <br />
            <div>
              <label>LAST NAME </label>
              : <input type="text" name="lastname" onChange={(e) => change(e)} />
            </div>
            <p style={{ color: "red" }}>{error.lastname}</p>
            <br />
            <div>
              <label className="mail">EMAIL ID    </label>
              : <input type="email" name="email" onChange={(e) => change(e)} />
              <p style={{ color: "red" }}>{error.email}</p>
            </div>
            <br />
            <div>
              <label>META NAME </label>
              : <input type="text" name="metaname" onChange={(e) => change(e)} />
              <p style={{ color: "red" }}>{error.metaname}</p>
            </div>
            <br />
            <div>
              
              <Button className="btn" type="reset" variant="outline-danger">
                CANCEL
              </Button>
              
              <Button type="submit" variant="outline-success">
                LOGIN
              </Button>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <hr />
    </div>
  );
};

export default Add;
