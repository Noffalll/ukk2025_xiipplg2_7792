import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavbarEnhance() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/home">📅Todo List</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/tambah">Tambah tugas</Nav.Link>
            <Nav.Link href="/lihat">Lihat Tugas</Nav.Link>
            <NavDropdown title="Setting" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
              <NavDropdown.Item href="/profil">
                Profil
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            {/* <Link to='/login'>
            <Button variant="outline-ligth">Logout</Button>
            </Link> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
