import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const paragraphStyle = {
   fontSize: "large",
   fontWeight: "200",
}
const leadPastorStyle = {
  fontSize:"large",
  fontWeight:"200",
  padding:"0",
  margin:"0",

}
export default function Section2() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2 className="h2">About Us</h2>
            <h1 className="info">Our Mission</h1>
            <hr />
            <p className="" style={paragraphStyle}>
              PENIEL is a school of prayer based in Kinshasa, Dr. Congo, that
              has seen light in December 2009.{" "}
            </p>
            <p className="" style={paragraphStyle}>
              We are a group of imperfect people seeking to know and love Jesus
              more.it’s really that simple! Simple doesn’t mean easy, because it
              can be very challenging.
            </p>
            <p className="" style={paragraphStyle}>
              We hope to introduce every person we meet, to talk, or spend time
              with, to the deep and unending love of Jesus. We want you to feel
              like you belong at PENIEL because we believe that you do. You
              don’t have to be perfect to come to church, just willing to grow.
            </p>{" "}
            <p className="" style={paragraphStyle}>
              It’s not meant to be scary and we appreciate it takes courage to
              try something new, like attending church.We are committed to
              doing what we can to help you know and experience the love of
              Jesus.
            </p>
            <p style={leadPastorStyle}>Victor Umba</p>
            <p style={leadPastorStyle}>Lead Pastor</p>

          </Col>
          <Col>
            <img className="pastorImg" src="../images/VictorUmba1.png" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
