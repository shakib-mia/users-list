import React from "react";

const List = ({ users, getId }) => {
  const user = document.getElementsByClassName("list-item");
  const setId = (id) => {
    document.getElementById(`user${id}`).classList.add("active");
    const users = [...user];

    const classList = users.filter((user) => [...user.classList]);
    const active = classList.filter(
      (classItem) =>
        classItem.classList[classItem.classList.length - 1] === "active"
    );

    const notSelected = active.find((item) => item.id !== `user${id}`);
    notSelected?.classList.remove("active");
  };
  return (
    <div className="mx-3 mx-lg-0">
      <div>
        <h4
          className="bg-primary py-3 my-2 rounded-top row justify-content-center text-uppercase"
          style={{ "--bs-bg-opacity": 0.3 }}
        >
          Users List
        </h4>
      </div>
      <ul className={users.length > 0 ? "list-unstyled" : "text-center"}>
        {users ? (
          users.length > 0 ? (
            users.map((user) => (
              <div className="user-container">
                <a
                  href="#details"
                  className="text-dark text-decoration-none"
                  onClick={() => setId(user.id)}
                >
                  <input
                    type="radio"
                    className="col-2 d-none"
                    name="user"
                    id={`check${user.id}`}
                  />
                  <label
                    htmlFor={`check${user.id}`}
                    key={user.id}
                    id={`user${user.id}`}
                    onClick={() => getId(user.id)}
                    className="py-3 list-item my-1 ps-2 rounded h5 row align-items-center "
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
                  </label>
                </a>
              </div>
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
  );
};

export default List;
