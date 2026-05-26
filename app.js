//import express and employees
import express from "express";
import employees from "#db/employees";

//create the express app
//export the app
const app = express();
export default app;

//get request to the root route
//send greeting message back to the client
app.get("/", (req, res) => {
  res.send("Hello employees!");
});

//send all employees
app.get("/employees", (req, res) => {
  res.send(employees);
});

//define random before id
//pick a random employee from the list
app.get("/employees/random", (req, res) => {
  const random = Math.floor(Math.random() * employees.length);
  res.send(employees[random]);
});

//get the id from the url
//find the employee with that id
//send a 404 error if no employee found
app.get("/employees/:id", (req, res) => {
  const { id } = req.params;
  const employee = employees.find((e) => e.id === +id);
  if (!employee) {
    return res.status(404).send("Employee not found.");
  }
  res.send(employee);
});
