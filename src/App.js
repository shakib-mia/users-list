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
    <div className="container">
      <div className="row mt-2 align-items-center">
        <div className="col-6">
          <List users={users} getId={getId}></List>
        </div>
        <div className="col-6">
          <Details id={id}></Details>
        </div>
      </div>
    </div>
  );
}

export default App;
