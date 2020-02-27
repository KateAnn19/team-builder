import React from "react";

const Form = props => {
    console.log(props);
  return (
    <div className="employee-list">
      {props.form.map(emp => (
        <div className="note" key={emp.id}>
          <h2>{emp.name}</h2>
          <p>{emp.role}</p>
          <p>{emp.email}</p>
          <p>{emp.realroles}</p>
          <p>{emp.age}</p>
          <p>{emp.moods}</p>
        </div>
      ))}
    </div>
  );
};

export default Form;