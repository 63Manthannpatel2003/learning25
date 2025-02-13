import React from "react";

export const ArrayDemo4 = () => {
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
      <h1 style={{color:"red"}}>ARRAY DEMO 4</h1>
      <table class="table table-dark" border={1}>
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
                <td style={{color:emp.id==100 ? "orange":"silver"}}>{emp.id}</td>
                <td>
                    <span style={{color:emp.name.startsWith("M")?"red":"silver"}}>
                        {emp.name}
                    </span>
                </td>
                <td>
                    <span style={{color:emp.age==22 ? "blue":"silver"}}>{emp.age}</span>
                </td>
                <td style={{backgroundColor:emp.salary==20000?"yellow":"grey"}}>{emp.salary}</td>
                <td style={{backgroundColor:emp.gender =="male"?"blue":"pink"}}>{emp.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};