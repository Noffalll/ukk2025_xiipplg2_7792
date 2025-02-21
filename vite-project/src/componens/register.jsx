import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmation: "",
    email: "",
    name: "",
  });

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
    form.append("confirmation", formData.confirmation);
    form.append("email", formData.email);
    form.append("name", formData.name);

    try {
      const response = await fetch(
        "https://listyantidewi.pythonanywhere.com/register",
        {
          method: "POST",
          body: form,
        }
      );

      const data = await response.text();

      if (response.ok) {
        console.log("Registration successful:", data);
        navigate("/login");
      } else {
        setError(data);
        console.error("Registration failed:", data);
      }
    } catch (error) {
      setError("Network error occurred");
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="shadow-lg p-4 rounded" style={{ border: "none" }}>
              <Card.Body>
                <h2 className="text-center mb-4" style={{ fontWeight: "bold", color: "#dc3545" }}>Register</h2>
                {error && <div className="alert alert-danger text-center">{error}</div>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control type="text" placeholder="Isi nama lengkap" name="name" value={formData.name} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Isi username" name="username" value={formData.username} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Isi email" name="email" value={formData.email} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Konfirmasi Password</Form.Label>
                    <Form.Control type="password" placeholder="Konfirmasi password" name="confirmation" value={formData.confirmation} onChange={handleChange} required />
                  </Form.Group>
                  <div className="d-grid gap-2">
                    <Button type="submit" variant="danger">Daftar</Button>
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

export default Register;