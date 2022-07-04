import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-6">
          <h4
            className="bg-primary py-3 rounded-top row justify-content-center"
            style={{ "--bs-bg-opacity": 0.5 }}
          >
            Users List
          </h4>

          <div>
            <ul className="list-unstyled">
              {users.length > 0 ? (
                users.map((user) => (
                  <li
                    key={user.id}
                    className="py-3 list-item my-2 ps-2 rounded h5 row"
                  >
                    <img
                      src="https://i.ibb.co/yhhStgK/avatar-1577909-960-720.webp"
                      className="img-fluid rounded-circle col-1"
                      alt={user.profile.userName}
                    />
                    <span className="col-9">
                      {user.profile?.firstName} {user.profile?.lastName}
                    </span>
                  </li>
                ))
              ) : (
                <div class="spinner-border text-center col-12" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              )}
            </ul>
          </div>
        </div>
        <div className="col-6">hi</div>
      </div>
    </div>
  );
}

export default App;
