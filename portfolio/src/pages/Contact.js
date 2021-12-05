import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import stickFigureMe from "../assets/Photos/stickFigureMe.JPG";

function Contact() {
  return (
    <>
    <ListGroup
      variant="flush"
      style={{
        width: "60%",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "125px",
        border: "solid black 2px",
      }}
    >
      <ListGroup.Item>Call Me: 770-881-5883</ListGroup.Item>
      <ListGroup.Item>Email Me: courtneylong877@gmail.com</ListGroup.Item>
      <ListGroup.Item>
        LinkedIn: https://www.linkedin.com/in/courtney-long-b5b37818b/
      </ListGroup.Item>
      <ListGroup.Item>GitHub: https://github.com/courtbourt12</ListGroup.Item>
    </ListGroup>
    <div>
      <img src={stickFigureMe} alt="Yeah" 
      style={{
        height: "350px",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
        marginTop: "50px",
      }}
      />
    </div>
    </>
  );
}
export default Contact;
