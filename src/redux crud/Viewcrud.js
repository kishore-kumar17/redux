import React from "react";
import "./Viewcrud.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./postSlice";
import { Button, Card, Container, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Viewcrud = () => {
  const dispatch = useDispatch();
  const nav =useNavigate();
  const post = useSelector((state) => state.post);
  console.log(post);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);



  const change =(e)=>{
    nav("/crud")
  }

  return (
    <div>
      <h1>ADHAR CARD DETAILS</h1>
      <Button style={{marginLeft:'1200px',borderRadius:'20px'}}   variant="outline-danger"onClick={(e)=>change(e)} >ADD ADHAR</Button>
     
     
     
      {post.loading ? (
        <div>loading...</div>
      ) : (
        post.posts.adhar &&
        post.posts.adhar.map((data, i) => {
          return (
            <div>
              <Container>
                <Row>
                  <div className="col-3">
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://thumbs.dreamstime.com/b/user-icon-member-login-vector-isolated-white-background-form-155134186.jpg"
                      />
                      <hr/>
                      <Card.Body>
                        <Card.Title> ADHAR CARD DETAILS</Card.Title>
                        <Card.Text>
                          <p>NAME : {data.name}</p>
                          {/* <p>FAHTHER's NAME :{ data.fathersname}</p> */}
                          <p> DOB : {data.dob}</p>
                          <p> MOBILE NUMBER : {data.mobilenumber}</p>
                          <hr />
                          <p key={i}>ADHAR NUMBER : {data.adharnumber}</p>
                        </Card.Text>
                        <hr />
                        <Button variant="outline-primary">UPDATE</Button>{" "}
                        &nbsp;&nbsp;&nbsp;
                        <Button variant="outline-primary">DELETE</Button>
                      </Card.Body>
                    </Card>
                  </div>
                </Row>
              </Container>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Viewcrud;
