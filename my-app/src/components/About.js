import { Container, Row, Col, Image } from 'react-bootstrap';
import headshot from '../assets/headshot.jpg';

function About() {
  return (
    <section id="about" className="bg-dark text-light py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center mb-4 mb-md-0">
            <Image
              src={headshot}
              roundedCircle
              fluid
              alt="Profile"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </Col>
          <Col md={8}>
            <h2 className="mb-3">About Me</h2>
            <p>
              Hi! I’m Luke, a Computer Science graduate passionate about React,
              full-stack development, and building projects that solve real
              problems.
            </p>
            <p>
              I enjoy learning new technologies, working on side projects, and
              collaborating with others on exciting challenges.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;