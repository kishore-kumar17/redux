import React from "react";
import "./Viewcrud.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, fetchUsers } from "./postSlice";
import { Button } from "react-bootstrap";
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

  // return(
  //       <Modal.Dialog>
  //       <Modal.Header closeButton>
  //         <Modal.Title>CONFRIM DELETE</Modal.Title>
  //       </Modal.Header>

  //       <Modal.Body>
  //         <p> ARE YOU CONFRIM TO DELETE DATA....</p>
  //       </Modal.Body>

  //       <Modal.Footer>
  //         <Button variant="outline-secondary">Close</Button>
  //         <Button variant="primary">DELETE</Button>
  //       </Modal.Footer>
  //     </Modal.Dialog>
  //     )
  //   };

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
                <div className="col-lg-4 mb-4">
                  <div class="card mx-3" style={{ width: "20rem" }}>
                    <img
                      src="https://ih1.redbubble.net/image.3096753269.1899/fposter,small,wall_texture,product,750x1000.jpg"
                      class="img-fluid"
                      alt="asogachakra logo"
                      title="asoga chakkaram"
                      id="asogachakram"
                    />
                    <div class="card-body">
                      <h5 class="card-title">{data.name}</h5>
                      <hr />
                      <p>FATHER NAME :{data.fathername}</p>
                      <p> MOBILE NUMBER : {data.mobilenumber}</p>
                      <p>DOB :{data.dob}</p>
                      <hr />
                      <p>AADHAR NUMBER : {data.adharnumber}</p>
                      <hr />
                      <Button
                        variant="outline-primary"
                        onClick={(e) => editdata(data.id)}
                      >
                        UPDATE
                      </Button>

                      <Button
                        className="float-end"
                        variant="outline-danger"
                        onClick={(e) => deletedata(data.id)}
                      >
                        DELETE
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Viewcrud;
