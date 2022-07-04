import React from "react";

const List = ({ users, getId }) => {
  return (
    <div>
      <h4
        className="bg-primary py-3 my-2 rounded-top row justify-content-center"
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
                onClick={() => getId(user.id)}
                className="py-3 list-item my-1 ps-2 rounded h5 row"
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
  );
};

export default List;
