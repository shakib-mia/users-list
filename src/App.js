import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import Details from "./components/Details";

function App() {
  const [users, setUsers] = useState([]);
  const [id, getId] = useState(0);

  useEffect(() => {
    fetch("Data.json")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container my-3">
      <div className="row">
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
