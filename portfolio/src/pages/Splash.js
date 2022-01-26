import React from "react";
import "../App.css";
import me from "../assets/Photos/splashPageMe.JPG";
import { Link } from "react-router-dom";
import "../styling/Splash.css";
import Card from 'react-bootstrap/Card';

function Splash() {
  return (
    <div className= "wholePage">
    <div
    style= {{
      position: "absolute",
      top:"0px",
      bottom:"0px",
      left:"0px",
      right:"0px",
      background: "#ee9617",
      backgroundImage: "linear-gradient(360deg, #ee9617 0%, #fe5858 94%)",
      zIndex: "-7"
    }}>
      <div className="cloud">
        <div className= "text"
        style= {{
          position: "absolute",
          top: "150px",
          left: "120px",
          zIndex: "3",
          textAlign: "center",
          fontFamily: "cursive",
          width: "250px"
        }}>
        <p>An impossibility is only a possibility you don't understand yet.</p>
        </div>
      <div className= "cloud1"></div>
      <div className= "cloud2"></div>
      <div className= "cloud3"></div>
      <div className= "cloud4"></div>
      <div className= "cloud5"></div>
      </div>
      <div className="wholeCloud2">
        <div className= "text"
        style= {{
          position: "absolute",
          top: "165px",
          left: "120px",
          zIndex: "3",
          width: "250px",
          textAlign: "center",
          fontFamily: "cursive"
        }}>
        Doubt kills more dreams than failure ever will.
        </div>
      <div className= "cloud1"></div>
      <div className= "cloud2"></div>
      <div className= "cloud3"></div>
      <div className= "cloud4"></div>
      <div className= "cloud5"></div>
      </div>
      <div className="wholeCloud3">
        <div className= "text"
        style= {{
          position: "absolute",
          top: "170px",
          left: "150px",
          zIndex: "3",
          width: "300px",
          fontSize: "20px",
          fontFamily: "cursive"
        }}>
        Mindset is everything
        </div>
      <div className= "cloud1"></div>
      <div className= "cloud2"></div>
      <div className= "cloud3"></div>
      <div className= "cloud4"></div>
      <div className= "cloud5"></div>
      </div>
      <div className="wholeCloud4">
        <div className= "text"
        style= {{
          position: "absolute",
          top: "180px",
          left: "185px",
          zIndex: "3",
          width: "300px",
          fontFamily: "cursive"
        }}>
        Know your worth
        </div>
      <div className= "cloud1"></div>
      <div className= "cloud2"></div>
      <div className= "cloud3"></div>
      <div className= "cloud4"></div>
      <div className= "cloud5"></div>
      </div>
      <div className="wholeCloud5">
        <div className= "text"
        style= {{
          position: "absolute",
          top: "148px",
          left: "100px",
          textAlign: "center",
          zIndex: "3",
          width: "300px",
          fontSize: "25px",
          fontFamily: "cursive"
        }}>
        Nothing changes if nothing changes.
        </div>
      <div className= "cloud1"></div>
      <div className= "cloud2"></div>
      <div className= "cloud3"></div>
      <div className= "cloud4"></div>
      <div className= "cloud5"></div>
      </div>
      <div className="wholeCloud6">
        <div className= "text"
        style= {{
          position: "absolute",
          top: "155px",
          left: "100px",
          zIndex: "3",
          width: "300px",
          fontSize: "30px",
          fontFamily: "cursive"
        }}>
        Purpose fuels passion
        </div>
      <div className= "cloud1"></div>
      <div className= "cloud2"></div>
      <div className= "cloud3"></div>
      <div className= "cloud4"></div>
      <div className= "cloud5"></div>
      </div>
      <div className="wholeCloud7">
        <div className= "text"
        style= {{
          position: "absolute",
          top: "170px",
          left: "145px",
          zIndex: "3",
          width: "400px",
          fontFamily: "cursive"
        }}>
        Your only limit is your mind.
        </div>
      <div className= "cloud1"></div>
      <div className= "cloud2"></div>
      <div className= "cloud3"></div>
      <div className= "cloud4"></div>
      <div className= "cloud5"></div>
      </div>
      <div className="wholeCloud8">
        <div className= "text"
        style= {{
          position: "absolute",
          top: "170px",
          left: "130px",
          zIndex: "3",
          textSize: "100px",
          fontFamily: "cursive",
          textAlign: "center",
          width: "250px"
        }}>
        Don't worry about things you can't control.
        </div>
      <div className= "cloud1"></div>
      <div className= "cloud2"></div>
      <div className= "cloud3"></div>
      <div className= "cloud4"></div>
      <div className= "cloud5"></div>
      </div>
    
    <div className= "mountainOne"></div>
    <div className= "mountainTwo"></div>
    <div className= "mountainThree"></div>
    <div className= "mountainFour"></div>
    <div className= "mountainFive"></div>
    <div className= "mountainSix"></div>
    <div className= "mountainSeven"></div>
    <div className= "sun"></div>
    <Card className= "theCard">
      <Card.Body>
        <Card.Title
        className= "title">Hi!  I'm Courtney - Welcome to my Portfolio :)</Card.Title>
        <Link to="/about" className= "toBeSmaller">About Me</Link>
      </Card.Body>
    </Card>
    <div>
      <img src = {me} alt= "A stick figure with my face photoshopped on." className= "stickMe"/>
    </div>
    </div>
    </div>
  );
}
export default Splash;