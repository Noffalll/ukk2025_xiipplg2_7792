import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const form = new FormData();
    form.append("username", formData.username);
    form.append("password", formData.password);

    try {
      const response = await fetch("https://listyantidewi.pythonanywhere.com/login", {
        method: "POST",
        body: form,
      });

      const data = await response.text();

      if (response.ok) {
        console.log("Login successful:", data);
        navigate("/home");
      } else {
        setError(data);
        console.error("Login failed:", data);
      }
    } catch (error) {
      setError("Network error occurred");
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            <Card className="shadow-lg p-4 rounded" style={{ border: "none" }}>
              <Card.Body>
                <h2 className="text-center mb-4" style={{ fontWeight: "bold", color: "#007bff" }}>Login</h2>
                {error && <div className="alert alert-danger text-center">{error}</div>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" name="username" value={formData.username} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
                  </Form.Group>
                  <div className="d-grid gap-2">
                    <Button type="submit" variant="primary">Login</Button>
                    <Button href="/register" variant="outline-danger">Register</Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;