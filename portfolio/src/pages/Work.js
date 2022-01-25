// import Card from 'react-bootstrap';
import React from "react";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import professionalEyes from '../assets/Photos/professionalEyes.JPG'
import dailyTracker from '../assets/Photos/dayTracker.JPG'
import dateNight from '../assets/Photos/dateNight.JPG'
import weather from '../assets/Photos/weather.JPG'
import AppNavbar from "../components/navbar";
import "../styling/Work.css";

function Work() {
return (
  <div className= "background">
  <AppNavbar />
<CardGroup
style= {{
  paddingTop: "50px"
}}>
<Card
style= {{
  border: "0px solid black",
  paddingRight: "10px",
  paddingLeft: "10px"
}}>
  <a href="https://professionaleyes.herokuapp.com/">
    <Card.Img variant="top" src={professionalEyes} style= {{border: "10px solid black"}}/>
  </a>
    <Card.Body
    style= {{
      backgroundColor: "#ed4264",
      border: "5px solid black"
    }}>
    <Card.Title
    style= {{
      color: "black"
    }}>ProfessionalEyes</Card.Title>
    <Card.Text
    style= {{
      color: "black"
    }}>
      Have you ever had to send a professional email, but the way you were feeling was far from professional at the time?  With ProfessionalEyes, you can type out the email however you are feeling, and the website will fix it for you.  The final product will be ready to send to your desired recipient.
      </Card.Text>
    </Card.Body>
    <Card.Footer
    style= {{
      border: "3px solid black",
      background: "white"
    }}>
    <Card.Text
    style= {{
      color: "black"
    }}>Uses Javascript, Express.js, CSS, Handlebars.js, MySQL</Card.Text>
    </Card.Footer>
  </Card>
  <Card
  style= {{
    border: "0px solid black",
    paddingRight: "10px",
    paddingLeft: "10px"
  }}>
  <a href="https://github.com/ERion42/groupProject">
    <Card.Img variant="top" src={dateNight} style= {{border: "10px solid #DFB722"}}/>
  </a>
    <Card.Body
    style= {{
      backgroundColor: "#1d2671",
      border: "5px solid #DFB722"
    }}>
      <Card.Title
      style= {{
        color: "#DFB722"
      }}>Date Night</Card.Title>
      <Card.Text
      style= {{
        color: "#DFB722"
      }}>
        Your next date will be stress free and personalized so that you don't have to worry about anything but being with your date.  Simply answer the question prompts and the website will give you an itinerary fitting any of your date desires.
      </Card.Text>
    </Card.Body>
    <Card.Footer
    style= {{
      border: "3px solid #DFB722",
      background: "white"
    }}>
    <Card.Text
    style= {{
      color: "black"
    }}>Uses JavaScript, CSS, Fetch Calls, and more</Card.Text>
    </Card.Footer>
  </Card>
  <Card
  style= {{
    border: "0px solid black",
    paddingRight: "10px",
    paddingLeft: "10px"
  }}>
    <a href="https://courtbourt12.github.io/weather-Channel/">
    <Card.Img variant="top" src={weather} style= {{border: "10px solid black"}}/>
  </a>
    <Card.Body
    style= {{
      backgroundColor: "#4ca1af",
      border: "5px solid black"
    }}>
      <Card.Title
      style= {{
        color: "black"
      }}>Weather Tracker</Card.Title>
      <Card.Text
      style= {{
        color: "black"
      }}>
       Need to check the weather for the following week or the current day?  Look no further, simply type in the city name you're interested in, and the website will provide all the weather information you could need.
      </Card.Text>
    </Card.Body>
    <Card.Footer
    style= {{
      border: "3px solid black",
      background: "white"
    }}>
      <Card.Text
    style= {{
      color: "black"
    }}>Uses JavaScript and Third Party API data</Card.Text>
    </Card.Footer>
  </Card>
  <Card
  style= {{
    border: "0px solid black",
    paddingRight: "10px",
    paddingLeft: "10px"
  }}>
    <a href="https://github.com/courtbourt12/daily-task-tracker">
    <Card.Img variant="top" src={dailyTracker} style= {{border: "10px solid #DFB722"}}/>
  </a>
    <Card.Body
    style= {{
      backgroundColor: "#ba5370",
      border: "5px solid #DFB722"
    }}>
      <Card.Title
      style= {{
        color: "#DFB722"
      }}>Daily Tracker</Card.Title>
      <Card.Text
      style= {{
        color: "#DFB722"
      }}>
        If you're like me and need to ensure your day is properly planned out, use this daily tracker to make all your To-Do lists!
      </Card.Text>
    </Card.Body>
    <Card.Footer
    style= {{
      border: "3px solid #DFB722",
      background: "white"
    }}>
    <Card.Text
    style= {{
      color: "black"
    }}>Uses JavaScript, Inquirer, Node.js</Card.Text>
    </Card.Footer>
  </Card>
</CardGroup>
</div>
)
}
export default Work;