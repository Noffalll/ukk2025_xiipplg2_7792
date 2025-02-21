import { Card, Button, Form, Container } from "react-bootstrap";
import Navbar from "./Navbar";
import { useState } from "react";

const ProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("nofal18");
  const [email, setEmail] = useState("nofal18@gmail.com");
  const [phone, setPhone] = useState("+62 89514284341");
  const [location, setLocation] = useState("Lawang, Indonesia");

  const handleSave = () => setIsEditing(false);

  return (
    <>
      <Navbar />
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card className="p-4 shadow-sm" style={{ width: "350px" }}>
          <Card.Body className="text-center">
            {isEditing ? (
              <Form>
                <Form.Control className="mb-2" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <Form.Control className="mb-2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Form.Control className="mb-2" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <Form.Control className="mb-3" type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                <Button variant="success" className="w-100" onClick={handleSave}>Save</Button>
              </Form>
            ) : (
              <>
                <h4>{name}</h4>
                <p className="text-muted mb-2">{email}</p>
                <p className="text-muted mb-2">{phone}</p>
                <p className="text-muted">{location}</p>
                <Button variant="dark" className="w-100" onClick={() => setIsEditing(true)}>Ubah Profil</Button>
              </>
            )}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ProfileCard;