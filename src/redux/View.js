import React from "react";
import { Button, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const View = () => {
  const storeview = useSelector((state) => state);
  const dispatch = useDispatch();
  const nav =useNavigate();
  const toat = () => {
    toast.danger("DELETED SUCCESSFULLY");
  }

  const time = () => {
    document.getElementById("time").innerHTML = Date();
  };

const del =(id)=>{
dispatch({type:"deletemeta",payload :id});
toat();
//tost
 }

 const edit =(id)=>{
nav(`/edit/${id}`)
 }



  // console.log(storeview);
  return (
    <div>
      <h4>META post</h4>
      <Link to="/">
        <Button variant="outline-primary">NEW LOGIN</Button>
      </Link>
      {storeview.map((mapview) => {
        return (
          <div className="container">
            <CardHeader>metaname</CardHeader>
            <Card.Body>
              <Card.Title>META</Card.Title>
              <Card.Text>
                <p> ID : {mapview.id}</p>
                <p> META NAME : {mapview.metaname}</p>
                <p> META MAIL ID :{mapview.email}</p>
              </Card.Text>
              <span id="time"></span>
              <br />
              <button onClick={time}>date of joining</button>
            </Card.Body>
            <Button variant="outline-secondary" onClick={()=>edit(mapview.id)}>UPDATE</Button>
            <Button onClick={()=>del(mapview.id)} variant="outline-danger">DELETE</Button>
          </div>
        );
      })}
    </div>
  );
};

export default View;
