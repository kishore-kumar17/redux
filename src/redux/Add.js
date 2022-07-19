import { Button, Toast } from "react-bootstrap";
import React, { useState } from "react";
import View from "./View";
import { useDispatch,useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Add = () => {
  const dispatch = useDispatch();
  const [input, setinput] = useState({});
  const [error, seterror] = useState("");
  const storeview = useSelector(state=>(state))



  const tost=()=>{
    toast.success('Login successfully',{autoclose:100000})
  }


//validation 
  const handlesubmit = (e) => {
    e.preventDefault();
    
    if (!input.firstname) {
      seterror({ firstname: "First name is must" });
    } else if (!input.lastname) {
      seterror({ lastname: "last name is must" });
    } else if (!input.email) {
      seterror({ email: "email is must" });
    } else if (!input.metaname) {
      seterror({ metaname: "is must" });
    } else {
    const alldata ={
  id:storeview.length+1,
  firstname:input.firstname,
  lastname:input.lastname,
  email:input.email,
  metaname:input.metaname
}
  
// console.log(alldata)

dispatch({type:'addmeta',payload:alldata})
tost();
    }
  }

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
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mt-5">
          <img
            src="https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            className="img-fluid"
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
              <label>
                <p>FIRST NAME : </p>
              </label>
              <input
                type="text"
                name="firstname"
                autoFocus
                onChange={(e) => change(e)}
              ></input>
              <p style={{ color: "red" }}>{error.firstname}</p>
            </div>
            <br />
            <div>
              <label>
                <p>LAST NAME : </p>
              </label>
              <input type="text" name="lastname" onChange={(e) => change(e)} />
            </div>
            <p style={{ color: "red" }}>{error.lastname}</p>
            <br />
            <div>
              <label>
                <p>EMAIL ID : </p>
              </label>
              <input type="email" name="email" onChange={(e) => change(e)} />
              <p style={{ color: "red" }}>{error.email}</p>
            </div>
            <br />
            <div>
              <label>
                <p>META NAME : </p>
              </label>
              <input type="text" name="metaname" onChange={(e) => change(e)} />
              <p style={{ color: "red" }}>{error.metaname}</p>
            </div>
            <br />
            <div>
                <Button type="reset" variant="outline-danger" >CANCEL</Button>
              <Button type="submit" variant="outline-success">LOGIN</Button>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <hr />
      <View />
    </div>
  );
};

export default Add;
