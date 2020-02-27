import React, {useState} from 'react';
import './App.css';
import NewForm from "./components/form";
import Form from "./components/employee";

function App() {

  const [coWorker, setCoworker] = useState([
    {
      id: 1,
      name: "Manoj",
      email: "manoj@gmail.com",
      role: "developer",
      realroles: "skydiver",
      age: 30,
      moods: true
    },
    {
      id: 2,
      name: "Kate",
      email: "Kate@gmail.com",
      role: "freelancer",
      age: 33,
      realroles: "punk",
      moods: true
    },
    {
      id: 3,
      name: "Whitney",
      email: "Whitney@gmail.com",
      role: "Quality Assurance",
      realroles: "actor",
      age: 35,
      moods: true
    }
  ]);

  const addNewEmployee = emp => {

    const newEmployee = {
      id: Date.now(),
      realroles: emp.realroles,
      email: emp.email,
      name : emp.name,
      role: emp.role
    };
    setCoworker([...coWorker, newEmployee]);
  };

  return (
    <div className="App">
      <h1>WallaWallaForm</h1>
      <NewForm addNewEmployee={addNewEmployee}/>
      <Form form={coWorker} />
    </div>
  );
}

export default App;
