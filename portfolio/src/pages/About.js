import React from "react";
import Carousel from "react-bootstrap/Carousel";
import marble from "../assets/Photos/marble.jpg";
import inkDrops from "../assets/Photos/inkDrops.jpg";
import swirlyBackground from "../assets/Photos/swirlyBackground.jpg";

function About() {
  return (
    <Carousel>
      <Carousel.Item
        style={{
          height: "400px",
          marginTop: "100px",
        }}
      >
        <img className="d-block w-100" src={marble} alt="Yeah" />
        <Carousel.Caption
        style={{
          color: "black",
          background: "white",
          border: "solid black 1px",
        }}
        >
          <h3>My Hobbies</h3>
          <p>
            I am huge fan of the outdoors, including hiking, camping, and
            practically any water sport. I played volleyball throughout high
            school and college, but recently I have been participating in
            bowling leagues. I love cotton candy flavored anything, street
            tacos, and thai food. I have one cat and one dog that are
            approximately the same size.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        style={{
          height: "400px",
          marginTop: "100px",
        }}
      >
        <img
          className="d-block w-100"
          src={swirlyBackground}
          alt="Second slide"
        />

        <Carousel.Caption
        style={{
          color: "black",
          background: "white",
          border: "solid black 1px",
        }}>
          <h3>Education and Work</h3>
          <p>
            I attended Kennesaw State University and graduated May of 2020 with
            a Bachelor's of Science in Mechanical Engineering. Upon graduation,
            I began working full-time for a company I had been interning for
            during school. I hired and supervised the co-op group within our
            department and dealt directly with Clients. I decided recently to
            switch my focus on website development and am currently enrolled in
            the Georgia Tech Full-Stack Website Development Bootcamp. The
            experience thus far has been amazing, and I am excited to have the
            opportunity to gain on the job experience to further my knowledge.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        style={{
          height: "400px",
          marginTop: "100px",
        }}
      >
        <img className="d-block w-100" src={inkDrops} alt="Third slide" />

        <Carousel.Caption
        style={{
          color: "black",
          background: "white",
          border: "solid black 1px",
        }}>
          <h3>My Personality</h3>
          <p>
            I would describe myself as being a go-getter, fun loving, and
            positive person. I am fairly ambitious, and once I have my mind set
            on something, virtually nothing can stop me from achieving it. My
            strength would be my belief that I can always be better. I rarely am
            disappointed by anything because no matter what comes my way, I
            believe it will never stop me fully. My biggest weakness is that I
            tend to get overwhelmed when shown only the big picture, and I have
            to spend some time breaking it down into smaller pieces for me to be
            able to figure out where to begin with something. I also think I am
            funny sometimes.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default About;
