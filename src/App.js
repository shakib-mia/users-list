import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import Details from "./components/Details";

function App() {
  const [users, setUsers] = useState([]);
  const [id, getId] = useState(0);

  useEffect(() => {
    fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-12 col-lg-6">
          <h4
            className="bg-primary py-3 my-2 rounded-top row justify-content-center text-uppercase"
            style={{ "--bs-bg-opacity": 0.3 }}
          >
            Users List
          </h4>
        </div>
        <div className="col-12 col-lg-5 ms-auto">
          <h4
            className="bg-primary py-3 my-2 rounded-top row justify-content-center text-uppercase"
            style={{ "--bs-bg-opacity": 0.3 }}
          >
            Users Details
          </h4>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-12 col-lg-6">
          <List users={users} getId={getId}></List>
        </div>
        <div className="col-12 col-lg-5 ms-auto">
          <Details id={id}></Details>
        </div>
      </div>
    </div>
  );
}

export default App;
