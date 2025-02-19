import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NavbarEnhance from './Navbar';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <NavbarEnhance></NavbarEnhance>
      <Button variant="primary" onClick={handleShow}>
        I LOVE YOU ❤️❤️
      </Button>

    <Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
    <Modal.Title>I GK BISA KATA 🤞❤️💕</Modal.Title>
</Modal.Header>
    <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
     <Modal.Footer>    <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
        <Button variant="primary" onClick={handleClose}>
           Save Changes
       </Button>
    </Modal.Footer>
 </Modal>
 </>
  );
}

export default Example;

// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Navbar from "./Navbar.jsx";
// import Container from "react-bootstrap/Container";
// import Table from "react-bootstrap/Table";
// import { useState } from "react";
// import Modal from "react-bootstrap/Modal";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
// import Form from "react-bootstrap/Form";

// function Tugas() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Navbar />
//       <Container>
//         <Card className="mt-4">
//           <Card.Body>
//             {" "}
//             <Button className="mt-2" variant="primary" onClick={handleShow}>
//               Tambah💩
//             </Button>
//             <Modal show={show} onHide={handleClose}>
//               <Modal.Header closeButton>
//                 <Modal.Title>Tambah Tugas</Modal.Title>
//               </Modal.Header>
//               <Modal.Body>
//                 <FloatingLabel
//                   controlId="floatingNamaTugas"
//                   label="Nama Tugas"
//                   className="mb-3"
//                 >
//                   <Form.Control type="text" placeholder="Masukkan Nama Tugas" />
//                 </FloatingLabel>
//                 <FloatingLabel controlId="floatingLabels" label="Label Tugas">
//                   <Form.Select aria-label="Floating label">
//                     <option>Pilih Salah Satu</option>
//                     <option value="1">Sudah Selesai</option>
//                     <option value="2">Belum Selesai</option>
//                   </Form.Select>
//                 </FloatingLabel>
//                 <Form.Group
//                   style={{
//                     marginLeft: "2px",
//                     marginTop: "15px",
//                   }}
//                 >
//                   <input required="" type="date" value=""></input>
//                 </Form.Group>
//               </Modal.Body>
//               <Modal.Footer>
//                 <Button variant="danger" onClick={handleClose}>
//                   Tutup
//                 </Button>
//                 <Button variant="primary" onClick={handleClose}>
//                   Tambah
//                 </Button>
//               </Modal.Footer>
//             </Modal>
//             <Table striped className="mt-3">
//               <thead>
//                 <tr>
//                   <th>#</th>
//                   <th>Nama Tugas</th>
//                   <th>Date</th>
//                   <th>Labels</th>
//                   <th>Status</th>
//                 </tr>
//               </thead>
//               <tbody></tbody>
//             </Table>
//           </Card.Body>
//         </Card>
//       </Container>
//     </>
//   );
// }

// export default Tugas;



// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import NavbarEnhance from './Navbar';

// export default function TaskTable() {
//   const [tasks, setTasks] = useState([]);
//   const [task, setTask] = useState("");
//   const [date, setDate] = useState("");
//   const [editingTask, setEditingTask] = useState(null);
//   const [editedTask, setEditedTask] = useState("");
//   const [editedDate, setEditedDate] = useState("");

  // const addTask = (e) => {
  //   e.preventDefault();
  //   if (task.trim() && date) {
  //     setTasks([...tasks, { id: Date.now(), name: task, dueDate: date }]);
  //     setTask("");
  //     setDate("");
  //   }
  // };

  // const deleteTask = (id) => {
  //   setTasks(tasks.filter((t) => t.id !== id));
  // };

  // const editTask = (id) => {
  //   const taskToEdit = tasks.find((t) => t.id === id);
  //   setEditingTask(id);
  //   setEditedTask(taskToEdit.name);
  //   setEditedDate(taskToEdit.dueDate);
  // };

  // const saveTask = (id) => {
  //   setTasks(tasks.map((t) => (t.id === id ? { ...t, name: editedTask, dueDate: editedDate } : t)));
  //   setEditingTask(null);
  // };

  // return (
  //   <NavbarEnhance>
  //     <>
  //   <div style={{ textAlign: "center", padding: "20px" }}>
  //     <h2>Task Manager</h2>
  //     <form onSubmit={addTask}>
  //       <input
  //         value={task}
  //         onChange={(e) => setTask(e.target.value)}
  //         placeholder="Tambah Tugas"
  //         required
  //       />
  //       <input
  //         type="date"
  //         value={date}
  //         onChange={(e) => setDate(e.target.value)}
  //         required
  //       />
  //       <button type="submit">Tambah</button>
  //     </form>
  //     <table border="1" style={{ marginTop: "10px", width: "100%" }}>
  //       <thead>
        //   <tr>
        //     <th>No</th>
        //     <th>Tugas</th>
        //     <th>Due Date</th>
        //     <th>Actions</th>
        //   </tr>
        // </thead>
        // <tbody>
        //   {tasks.map((t, index) => (
        //     <tr key={t.id}>
        //       <td>{index + 1}</td>
        //       <td>
        //         {editingTask === t.id ? (
        //           <input
        //             value={editedTask}
        //             onChange={(e) => setEditedTask(e.target.value)}
        //           />
        //         ) : (
        //           t.name
        //         )}
        //       </td>
        //       <td>
            //     {editingTask === t.id ? (
            //       <input
            //         type="date"
            //         value={editedDate}
            //         onChange={(e) => setEditedDate(e.target.value)}
            //       />
            //     ) : (
            //       t.dueDate
            //     )}
            //   </td>
            //   <td>
            //     {editingTask === t.id ? (
            //       <button onClick={() => saveTask(t.id)}>Save</button>
            //     ) : (
            //       <button onClick={() => editTask(t.id)}>Edit</button>
            //     )}
            //     <button onClick={() => deleteTask(t.id)}>Delete</button>
            //   </td>
            // </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    // </>
    // </NavbarEnhance>

//   );
// }


