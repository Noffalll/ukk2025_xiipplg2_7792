import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Navbar from "./Navbar.jsx";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function Lihat() {
  const [show, setShow] = useState(false);

const handleClose = () => setShow(false);

  return (
    <>
      <Navbar />
      <h4>Lihat Tugas</h4>
      <Container>
        <Card className="mt-4">
          <Card.Body>
            {" "}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Lihat Tugas</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FloatingLabel
                  controlId="floatingNamaTugas"
                  label="Lihat Tugas"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Masukkan Nama Tugas" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingLabels" label="Label Tugas">
                  <Form.Select aria-label="Floating label">
                    <option>Pilih Salah Satu</option>
                    <option value="1">dalam pengerjaan</option>
                    <option value="2">Belum Selesai</option>
                    <option value="2">sudah Selesai</option>
                  </Form.Select>
                </FloatingLabel>
                <Form.Group
                  style={{
                    marginLeft: "2px",
                    marginTop: "15px",
                  }}
                >
                  <input required="" type="date" value=""></input>
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  Tutup
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Tambah
                </Button>
              </Modal.Footer>
            </Modal>
            <Table striped className="mt-3">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama Tugas</th>
                  <th>Date</th>
                  <th>Labels</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <th>1</th>
                <th>MTK</th>
                <th>03/02/2025</th>
                <th></th>
                <th></th>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Lihat;
