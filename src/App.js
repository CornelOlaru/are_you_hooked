import { useState } from "react";
import Header from "./components/Header";
import users from "./fake_data";

const App = () => {
  const [localUsers, setLocalUsers] = useState(users);
  const [filteredEmployees, setFilteredEmployees] = useState(users);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const onChangeName = (event) => {
    setFilteredEmployees(
      localUsers.filter((item) =>
        item.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };
  const decreaseSalary = (id) => {
    let newUsers = filteredEmployees.map((item) => {
      if (item.id === id) {
        item.salary -= 100;
      }
      return item;
    });
    setFilteredEmployees(newUsers);
  };
  const increaseSalary = (id) => {
    let newUsers = filteredEmployees.map((item) => {
      if (item.id === id) {
        item.salary += 100;
      }
      return item;
    });
    setFilteredEmployees(newUsers);
  };
  return (
    <>
      
       <Header />
        
      

      <section>
        <div className="container">
          {password === confirmPassword && password !== "" ? (
            <p className="success">Access granted</p>
          ) : (
            <p className="error">Passwords do not match</p>
          )}

          {password === confirmPassword && (
            <p className="success">Access granted</p>
          )}

          {password !== confirmPassword && (
            <p className="error">Passwords do not match</p>
          )}
          
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Enter your password"
          />
          <input
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            type="password"
            placeholder="Verify your password"
          />
        </div>
      </section>

      <section>
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>
                  <input
                    onChange={onChangeName}
                    type="text"
                    placeholder="Name..."
                  />
                </th>
                <th>Age</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee) => (
                <tr key={employee.id}>
                  <th>{employee.id}</th>
                  <td>{employee.name}</td>
                  <td>{employee.age}</td>
                  <td>
                    <button onClick={() => decreaseSalary(employee.id)}>
                      -
                    </button>
                    <span>{employee.salary}</span>
                    <button onClick={() => increaseSalary(employee.id)}>
                      +
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>
            API provided by{" "}
            <a href="http://www.dummy.restapiexample.com/">
              Dummy sample REST API
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default App;
