import { useState } from 'react';
import NavbarEnhance from './Navbar';

export default function TaskTable() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editedTask, setEditedTask] = useState("");
  const [editedDate, setEditedDate] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() && date) {
      setTasks([...tasks, { id: Date.now(), name: task, dueDate: date }]);
      setTask("");
      setDate("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find((t) => t.id === id);
    setEditingTask(id);
    setEditedTask(taskToEdit.name);
    setEditedDate(taskToEdit.dueDate);
  };

  const saveTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, name: editedTask, dueDate: editedDate } : t)));
    setEditingTask(null);
  };

  return (
      <>
       <NavbarEnhance/>
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Task Manager</h2>
      <form onSubmit={addTask}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Tambah Tugas"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Tambah</button>
      </form>
      <table border="1" style={{ marginTop: "10px", width: "100%" }}>
        <thead>
          <tr>
            <th>No</th>
            <th>Tugas</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t, index) => (
            <tr key={t.id}>
              <td>{index + 1}</td>
              <td>
                {editingTask === t.id ? (
                  <input
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                  />
                ) : (
                  t.name
                )}
              </td>
              <td>
                {editingTask === t.id ? (
                  <input
                    type="date"
                    value={editedDate}
                    onChange={(e) => setEditedDate(e.target.value)}
                  />
                ) : (
                  t.dueDate
                )}
              </td>
              <td>
                {editingTask === t.id ? (
                  <button onClick={() => saveTask(t.id)}>Save</button>
                ) : (
                  <button onClick={() => editTask(t.id)}>Edit</button>
                )}
                <button onClick={() => deleteTask(t.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>

  );
}


