import React from "react";
import ListItem from "./ListItem";

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
            users.map((single) => (
              <ListItem
                key={single.id}
                user={single}
                setId={setId}
                getId={getId}
              ></ListItem>
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
