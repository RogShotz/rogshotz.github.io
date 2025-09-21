import { Container, Button } from 'react-bootstrap';

function Hero() {
  return (
    <section className="bg-dark text-light d-flex align-items-center" style={{ minHeight: '100vh' }}>
      <Container className="text-center">
        <h1 className="display-3">Hi, I'm Luke 👋</h1>
        <p className="lead mb-4">Computer Science graduate passionate about React and full-stack development.</p>
        <Button variant="primary" size="lg" href="#projects">
          View My Projects
        </Button>
      </Container>
    </section>
  );
}

export default Hero;