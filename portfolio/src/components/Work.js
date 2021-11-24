// import Card from 'react-bootstrap';
import React from "react";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import proffff from '../Assets/proffff.JPG'
import schedd from '../Assets/schedd.JPG'
import datee from '../Assets/datee.JPG'
import weath from '../Assets/weath.JPG'

function Work() {
return (
<CardGroup>
<Card>
    <Card.Img variant="top" src={proffff} />
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
    <Card.Img variant="top" src={datee} />
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
    <Card.Img variant="top" src={weath} />
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
    <Card.Img variant="top" src={schedd} />
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