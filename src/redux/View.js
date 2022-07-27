import React from "react";
import { Button, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import swal from 'sweetalert';

const View = () => {
  const storeview = useSelector((state) => state);
  const dispatch = useDispatch();
  const nav =useNavigate();
  const tost = (id) => {
    // toast.danger("DELETED SUCCESSFULLY");
  }

  const time = () => {
    document.getElementById("time").innerHTML = Date();
  };

const del =(id)=>{

// tost();


// MODEL POP-UP:
swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this imaginary file!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    dispatch({type:"deletemeta",payload :id});
    swal("Poof! Your imaginary file has been deleted successfully!", {
      icon: "success",
    });
  } else {
    swal("Your imaginary file is safe!");
  }
});


{/* <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
 }

 const edit =(id)=>{
nav(`/edit/${id}`)
 }

  // console.log(storeview);
  return (
    <div>
      <h4>META post</h4>
      <Link to="/add">
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
            <Button  variant="outline-secondary" onClick={()=>edit(mapview.id)}>UPDATE</Button>
            &nbsp;&nbsp;&nbsp;
            <Button onClick={()=>del(mapview.id)} variant="outline-danger">DELETE</Button>
            <br/>
          </div>
          
        );
        
      })}
      
    </div>
  );
};

export default View;
