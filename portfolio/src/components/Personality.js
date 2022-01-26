import React from "react";
import Modal from "react-bootstrap/Modal";

function Personality() {

    const [show, setModal] = React.useState(false);
    const handleShow = () => setModal(true);
    const handleClose = () => setModal(false);

    return (
                <>
                <button className= "littleCards" id= "personality" variant="primary" onClick={handleShow}>
                Personality
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
                    Personality
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h5
                  style = {{
                      textAlign: "center",
                      paddingBottom: "50px",
                      paddingTop: "50px"
                  }}>"Problems are not stop signs, they are guidelines."</h5>
                  <p
                  style = {{
                    textAlign: "center",
                    paddingBottom: "50px"
                }}>
                    I would say I am the type of person that loves taking things head on.  I don't typically let anything ruin my day or disrupt my plans.  Some say optimism isn't real, but I think my optimism is feul.  I understand that there are going be speed bumps and curves in the road ahead, but I also realize that is just a part of life.  Once you come to terms with the fact that nothing in life truly comes easy and learn to accept that, it is easy to remain optimistic.  I almost always have a smile on my face, I try to be kind and patient to everybody I meet, I think communication is extremely important in any environment, and I am a very hard worker.  I love learning, I am extermely adaptable, and I can take on almost anything that is given to me.  I am always ready for a challenge.
                  </p>
                </Modal.Body>
              </Modal>
              </>
            );
          }
export default Personality;