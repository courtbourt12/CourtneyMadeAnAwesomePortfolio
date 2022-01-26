import React from "react";
import Modal from "react-bootstrap/Modal";

function Education() {

    const [show, setModal] = React.useState(false);
    const handleShow = () => setModal(true);
    const handleClose = () => setModal(false);

    return (
                <>
                <button className= "littleCards" id= "education" variant="primary" onClick={handleShow}>
                Education
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
                    Education
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h5
                  style = {{
                      textAlign: "center",
                      paddingBottom: "50px",
                      paddingTop: "50px"
                  }}>"Develop a passion for learning.  If you do, you will never cease to grow."</h5>
                  <p
                  style = {{
                    textAlign: "center",
                    paddingBottom: "50px"
                }}>
                    After graduating highschool in 2015, I attended collage at Kennesaw State University.  I initially had registered my major as undecided; however, after receiving minimal advice from an advisor, I chose Mechanical Engineering.  I graduated with a Bachelor of Science in Mechanical Engineering in May of 2021.  Before even receiving my degree, I began working full-time at a company I had been in a co-op program with for two years.  At this point, I knew that the degree was not the one for me, but I worked hard at my job for a year before deciding I wanted to pursue a career in something I would actually enjoy.  I began working part-time at my company and signed up for a Full-Stack Website Development course hosted through Georgia Tech University.  It was a full-time program lasting for three months.  I realized then that I found what I love to do, and am now working on pursuing certifications and creating any application that I can create.
                  </p>
                </Modal.Body>
              </Modal>
              </>
            );
          }
export default Education;