import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
toast.configure();

const Edit = () => {
  const dispatch = useDispatch();
  const [input, setinput] = useState({});
  const [error, seterror] = useState("");
  const storeview = useSelector((state) => state);
  const navi = useNavigate();
  const { id } = useParams();

  const newdata = storeview.find((storeview) => storeview.id === parseInt(id));

  useEffect(() => {
    if (newdata) {
      setinput(newdata);
    }
  }, [newdata]); //newdata dependancy passed.

  const tost = () => {
    toast.warning("Updated successfully", { autoclose: 1000 });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    //mail valid regex
   

    if (!input.firstname) {
      seterror({ firstname: "First name is must" });
    } else if (!input.lastname) {
      seterror({ lastname: "last name is must" });
    } else if (!input.email) {
      seterror({ email: "email is must" });
    }  else if (!input.metaname) {
      seterror({ metaname: "is must" });
    } else {
      const alldata = {
        id: parseInt(id),
        firstname: input.firstname,
        lastname: input.lastname,
        email: input.email,
        metaname: input.metaname,
      };

      //   console.log(alldata)

      dispatch({ type: "updatemeta", payload: alldata });
      tost();
      navi("/view");
    }
  };

  const change = (e) => {
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
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mt-5">
          <img
            src="https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            className="img-fluid"
            id="image"
            alt="..."
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
              <label>FIRST NAME :</label>
              <input
                type="text"
                name="firstname"
                autoFocus
                onChange={(e) => change(e)}
                value={input.firstname}
              ></input>
              <p style={{ color: "red" }}>{error.firstname}</p>
            </div>
            <br />
            <div>
              <label>LAST NAME :</label>
              <input
                type="text"
                name="lastname"
                onChange={(e) => change(e)}
                value={input.lastname}
              />
            </div>
            <p style={{ color: "red" }}>{error.lastname}</p>
            <br />
            <div>
              <label>EMAIL ID :</label>
              <input
                type="email"
                name="email"
                onChange={(e) => change(e)}
                value={input.email}
              />
              <p style={{ color: "red" }}>{error.email}</p>
            </div>
            <br />
            <div>
              <label>META NAME :</label>
              <input
                type="text"
                name="metaname"
                onChange={(e) => change(e)}
                value={input.metaname}
              />
              <p style={{ color: "red" }}>{error.metaname}</p>
            </div>
            <br />
            <div>
              <Button type="reset" variant="outline-danger">
                CANCEL
              </Button>
              <Button type="submit" variant="outline-success">
                UPDATE
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

export default Edit;
