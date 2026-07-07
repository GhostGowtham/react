import { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const addStudent = () => {
    if (name === "" || age === "" || course === "") {
      alert("Please fill all fields");
      return;
    }

    if (editId) {
      setStudents(
        students.map((student) =>
          student.id === editId
            ? { ...student, name, age, course }
            : student
        )
      );
      setEditId(null);
    } else {
      const newStudent = {
        id: Date.now(),
        name,
        age,
        course,
      };

      setStudents([...students, newStudent]);
    }

    setName("");
    setAge("");
    setCourse("");
  };

  const editStudent = (student) => {
    setEditId(student.id);
    setName(student.name);
    setAge(student.age);
    setCourse(student.course);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="container">
      <h1>Student Management System</h1>

      <h3>Total Students: {students.length}</h3>

      <div className="form">
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <button onClick={addStudent}>
          {editId ? "Update Student" : "Add Student"}
        </button>
      </div>

      <br />

      <input
        type="text"
        placeholder="Search Student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />
      <br />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.filter((student) =>
            student.name.toLowerCase().includes(search.toLowerCase())
          ).length === 0 ? (
            <tr>
              <td colSpan="4">No Students Found</td>
            </tr>
          ) : (
            students
              .filter((student) =>
                student.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.course}</td>
                  <td>
                    <button onClick={() => editStudent(student)}>
                      Edit
                    </button>

                    <button
                      className="delete"
                      onClick={() => deleteStudent(student.id)}
                      style={{ marginLeft: "10px" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;