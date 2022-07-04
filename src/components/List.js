import React from "react";

const List = ({ users, getId }) => {
  return (
    <div className="mx-3 mx-lg-0">
      <div>
        <ul className={users.length > 0 ? "list-unstyled" : "text-center"}>
          {users ? (
            users.length > 0 ? (
              users.map((user) => (
                <a
                  key={user.id}
                  onClick={() => getId(user.id)}
                  className="py-3 list-item my-1 ps-2 rounded h5 row align-items-center text-dark text-decoration-none"
                  href="#details"
                >
                  <img
                    src="https://i.ibb.co/yhhStgK/avatar-1577909-960-720.webp"
                    className="img-fluid rounded-circle col-1"
                    alt={user.profile.userName}
                  />
                  <span className="col-9">
                    {user.profile?.firstName} {user.profile?.lastName}
                  </span>
                </a>
              ))
            ) : (
              <div className="spinner-border text-center col-12" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )
          ) : (
            "No Data to Show"
          )}
        </ul>
      </div>
    </div>
  );
};

export default List;
