import React from "react";

export const ArrayDemo3 = () => {
  var employees = [
    {
      id: 100,
      name: "Manthan",
      age: 22,
      salary: 20000,
      gender: "male",
    },
    {
      id: 101,
      name: "Ansh",
      age: 24,
      salary: 25000,
      gender: "male",
    },
    {
      id: 102,
      name: "yash",
      age: 25,
      salary: 27000,
      gender: "male",
    },
    {
      id: 103,
      name: "Janki",
      age: 26,
      salary: 17000,
      gender: "female",
    },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{color:"red"}}>ARRAY DEMO 3</h1>
      <table class="table table-black"border={5}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>SALARY</th>
            <th>GENDER</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => {
            return (
              <tr>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>{emp.salary}</td>
                <td>{emp.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};