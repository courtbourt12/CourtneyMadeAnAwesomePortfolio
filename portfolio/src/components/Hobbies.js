import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


function Hobbies() {

    const [show, setModal] = React.useState(false);
    const handleShow = () => setModal(true);
    const handleClose = () => setModal(false);

    return (
                <>
                <button className= "littleCards" id= "hobbies" variant="primary" onClick={handleShow}>
                Hobbies
                </button>
                <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                backdrop="static"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter" 
                  style = {{
                    textAlign: "center",

                }}>
                    Hobbies
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h5
                  style = {{
                      textAlign: "center",
                      paddingBottom: "50px",
                      paddingTop: "50px"
                  }}>"Your only limit is your mind."</h5>
                  <p
                  style = {{
                    textAlign: "center",
                    paddingBottom: "50px"
                }}>
                    Due to my very easily excitable mind, I tend to pick up new hobbies depending on the last exciting explaination, video, or sight of somebody's hobby.  This has led me to rock climb, take jiu-jitsu lessons, take Muay Thai lessons, watch endless Youtube singing lesson videos, learn to longboard, twitch stream the Sims game, make a blog, amongst so many other things.  Really the only hobby I don't like is cooking, and I think it is because it is a life necessity.  Almost like I am being forced to do it for my own health benefits and basic survival needs.  Also, I am just not good at it.  I have mastered the art of only two dishes - chicken fried rice and seasoned pork or chicken with rice.  Wish me luck on that one.
                  </p>
                </Modal.Body>
              </Modal>
              </>
            );
          }
export default Hobbies;