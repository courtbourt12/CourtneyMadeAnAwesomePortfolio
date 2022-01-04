import React from "react"
import "../App.css"

function Splash() {
  return (
    <div>
    <main
    style= {{
      position: "absolute",
      top:"0px",
      bottom:"0px",
      left:"0px",
      right:"0px",
      background: "#ee9617",
      backgroundImage: "linear-gradient(360deg, #ee9617 0%, #fe5858 94%)",
      zIndex: "-3"
    }}>
      <div className="cloud">
        <div className= "text"
        style= {{
          position: "absolute",
          top: "150px",
          left: "120px",
          zIndex: "3"
        }}>
        <p>"An impossibility is only a possibility</p>
        <p>you don't understand yet"</p>
        </div>
      <div className= "cloud2"
      style= {{
      position: "absolute",
      content: "",
      top: "135px",
      left: "120px",
      width: "100px",
      height: "100px",
      borderRadius: "100px",
      borderTop: "2px solid white",
      borderLeft: "2px solid white",
      borderRight: "2px solid white",
      borderBottom: "2px solid white",
      zIndex: "2",
      background: "white"
      }}>
      </div>
      <div className= "cloud3"
      style= {{
      position: "absolute",
      content: "",
      top: "115px",
      left: "170px",
      width: "150px",
      height: "150px",
      borderRadius: "100px",
      borderTop: "2px solid white",
      borderLeft: "2px solid white",
      borderRight: "2px solid white",
      borderBottom: "2px solid white",
      zIndex: "2",
      background: "white"
      }}>
      </div>
      <div className= "cloud2"
      style= {{
      position: "absolute",
      content: "",
      top: "135px",
      left: "270px",
      width: "100px",
      height: "100px",
      borderRadius: "100px",
      borderTop: "2px solid white",
      borderLeft: "2px solid white",
      borderRight: "2px solid white",
      borderBottom: "2px solid white",
      zIndex: "2",
      background: "white"
      }}>
      </div>
      <div className= "cloud1"
      style= {{
      position: "absolute",
      content: "",
      top: "150px",
      left: "70px",
      width: "150px",
      height: "70px",
      borderRadius: "1000px",
      borderTop: "2px solid white",
      borderLeft: "2px solid white",
      borderRight: "2px solid white",
      borderBottom: "2px solid white",
      zIndex: "2",
      background: "white"
      }}>
      </div>
      <div className= "cloud1"
      style= {{
      position: "absolute",
      content: "",
      top: "150px",
      left: "270px",
      width: "150px",
      height: "70px",
      borderRadius: "1000px",
      borderTop: "2px solid white",
      borderLeft: "2px solid white",
      borderRight: "2px solid white",
      borderBottom: "2px solid white",
      zIndex: "2",
      background: "white"
      }}>
      </div>
      </div>
    <div className= "mountainTall"
    style= {{
      position: "absolute",
      content: "",
      bottom: "0px",
      left: "150px",
      borderTop: "0px solid transparent",
      borderLeft: "350px solid transparent",
      borderRight: "350px solid transparent",
      borderBottom: "525px solid grey",
    }}>
    </div>
    <div className= "mountainLeft"
    style= {{
      position: "absolute",
      content: "",
      bottom: "0px",
      left: "-400px",
      borderTop: "0px solid transparent",
      borderLeft: "500px solid transparent",
      borderRight: "500px solid transparent",
      borderBottom: "305px solid lightGrey",
      zIndex: "-1"
    }}>
    </div>
    <div className= "mountainMiddle"
    style= {{
      position: "absolute",
      content: "",
      bottom: "0px",
      left: "400px",
      borderTop: "0px solid transparent",
      borderLeft: "500px solid transparent",
      borderRight: "500px solid transparent",
      borderBottom: "425px solid rgb(168,168,168)",
      zIndex: "-1"
    }}>
    </div>
    <div className= "mountainTiny"
    style= {{
      position: "absolute",
      content: "",
      bottom: "0px",
      left: "570px",
      borderTop: "0px solid transparent",
      borderLeft: "375px solid transparent",
      borderRight: "375px solid transparent",
      borderBottom: "250px solid rgb(96,96,96)"
    }}>
    </div>
    <div className= "mountainTiny"
    style= {{
      position: "absolute",
      content: "",
      bottom: "0px",
      left: "780px",
      borderTop: "0px solid transparent",
      borderLeft: "450px solid transparent",
      borderRight: "450px solid transparent",
      borderBottom: "605px solid rgb(208,208,208)",
      zIndex: "-1"
    }}>
    </div>
    <div className= "mountainFarRight"
    style= {{
      position: "absolute",
      content: "",
      bottom: "0px",
      right: "0px",
      borderTop: "0px solid transparent",
      borderLeft: "400px solid transparent",
      borderRight: "400px solid transparent",
      borderBottom: "550px solid rgb(160,160,160)",
      zIndex: "2"
    }}>
    </div>
    <div className= "mountainFarFarRight"
    style= {{
      position: "absolute",
      content: "",
      bottom: "0px",
      right: "0px",
      borderTop: "0px solid transparent",
      borderLeft: "500px solid transparent",
      borderRight: "0px solid transparent",
      borderBottom: "400px solid rgb(72,72,72)",
      zIndex: "2",
    }}>
    </div>
    <div className= "sun"
    style= {{
      position: "absolute",
      content: "",
      bottom: "100px",
      right: "50px",
      width: "300px",
      height: "300px",
      borderRadius: "150px",
      borderTop: "2px solid rgb(255,196,12)",
      borderLeft: "2px solid rgb(255,196,12)",
      borderRight: "2px solid rgb(255,196,12)",
      borderBottom: "2px solid rgb(255,196,12)",
      zIndex: "-2",
      background: "rgb(255,196,12)"
    }}>
    </div>
    <div
    style = {{
      fontSize: "50px",
      textAlign: "center",
      margin: "auto",
      marginTop: "200px"
    }}>
     <p
      style={{
        color: "white",
        fontWeight: "bold"
    }}>Hi! I'm Courtney - Welcome to my portfolio :)</p>
    </div>
    </main>
    </div>
  );
}
export default Splash;