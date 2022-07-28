import React from "react";
import "./Viewcrud.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, fetchUsers } from "./postSlice";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Viewcrud = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const navi = useNavigate();
  const post = useSelector((state) => state.post);
  // console.log(post);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const change = (e) => {
    nav("/crud");
  };

  const deletedata = (id) => {
    dispatch(deleteUsers(id));
    dispatch(fetchUsers());
  };

  const editdata = (id) => {
    navi(`/editcrud/${id}`);
  };

  return (
    <div>
      <h1>ADHAR CARD DETAILS</h1>

      <Button variant="outline-danger" onClick={(e) => change(e)}>
        ADD NEW ADHAR
      </Button>

      <div className="container">
        <div className="row">
          {!post.loading &&
            post.posts &&
            post.posts.map((data, i) => {
              return (
                <div key={i}>
                  <div className="col-lg-4-md-6 mt-3">
                    <Card style={{ width: "600px" }}>
                      <Card.Img
                        variant="top"
                        src="https://thumbs.dreamstime.com/b/user-icon-member-login-vector-isolated-white-background-form-155134186.jpg"
                        // style={{ width: "200px" }}
                      />
                      <hr />
                      <Card.Body>
                        <Card.Title> ADHAR CARD DETAILS</Card.Title>
                        <Card.Text>
                          <p>NAME : {data.name}</p>
                          <p>FAHTHER's NAME :{data.fathername}</p>
                          <p>DOB : {data.dob}</p>
                          <p> MOBILE NUMBER : {data.mobilenumber}</p>
                          <hr />
                          <p>ADHAR NUMBER : {data.adharnumber}</p>
                        </Card.Text>
                        <hr />
                        <Button
                          variant="outline-primary"
                          onClick={(e) => editdata(data.id)}
                        >
                          UPDATE
                        </Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button
                          variant="outline-danger"
                          onClick={(e) => deletedata(data.id)}
                        >
                          DELETE
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Viewcrud;
