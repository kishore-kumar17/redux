import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const View = () => {
  const storeview = useSelector((state) => state);
  // console.log(storeview);
  return (
    <div>
      <h4>META post</h4>
      <Button variant="outline-primary">NEW LOGIN</Button>
      {storeview.map((mapview) => {
        return (
          <div>
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <p>{mapview.id}</p>
                  <p>{mapview.metaname}</p>
                  <p>{mapview.email}</p>
                </div>
                {/* <div className="col-4"></div>
                <div className="col-4"></div> */}
              </div>
            </div>
            {/* <p>{mapview.firstname}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default View;
