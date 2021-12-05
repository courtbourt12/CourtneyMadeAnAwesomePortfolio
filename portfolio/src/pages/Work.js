// import Card from 'react-bootstrap';
import React from "react";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import professionalEyes from '../assets/Photos/professionalEyes.JPG'
import dailyTracker from '../assets/Photos/dayTracker.JPG'
import dateNight from '../assets/Photos/dateNight.JPG'
import weather from '../assets/Photos/weather.JPG'

function Work() {
return (
<CardGroup>
<Card>
  <a href="https://professionaleyes.herokuapp.com/">
    <Card.Img variant="top" src={professionalEyes} />
  </a>
    <Card.Body>
    <Card.Title>ProfessionalEyes</Card.Title>
    <Card.Text>
      Have you ever had to send a professional email, but the way you were feeling was far from professional at the time?  With ProfessionalEyes, you can type out the email however you are feeling, and the website will fix it for you.  The final product will be ready to send to your desired recipient.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Text>Uses Javascript, Express.js, CSS, Handlebars.js, MySQL</Card.Text>
    </Card.Footer>
  </Card>
  <Card>
  <a href="https://github.com/ERion42/groupProject">
    <Card.Img variant="top" src={dateNight} />
  </a>
    <Card.Body>
      <Card.Title>Date Night</Card.Title>
      <Card.Text>
        Your next date will be stress free and personalized so that you don't have to worry about anything but being with your date.  Simply answer the question prompts and the website will give you an itinerary fitting any of your date desires.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Uses JavaScript, CSS, Fetch Calls, and more</small>
    </Card.Footer>
  </Card>
  <Card>
    <a href="https://courtbourt12.github.io/weather-Channel/">
    <Card.Img variant="top" src={weather} />
  </a>
    <Card.Body>
      <Card.Title>Weather Tracker</Card.Title>
      <Card.Text>
       Need to check the weather for the following week or the current day?  Look no further, simply type in the city name you're interested in, and the website will provide all the weather information you could need.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Uses JavaScript and Third Party API data</small>
    </Card.Footer>
  </Card>
  <Card>
    <a href="https://github.com/courtbourt12/daily-task-tracker">
    <Card.Img variant="top" src={dailyTracker} />
  </a>
    <Card.Body>
      <Card.Title>Daily Tracker</Card.Title>
      <Card.Text>
        If you're like me and need to ensure your day is properly planned out, use this daily tracker to make all your To-Do lists!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Uses JavaScript, Inquirer, Node.js</small>
    </Card.Footer>
  </Card>
</CardGroup>
)
}
export default Work;