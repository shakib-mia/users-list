import React from "react";

const ListItem = ({ setId, getId, user }) => {
  return (
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
            src={`https://randomuser.me/api/portraits/men/${user.id}.jpg`}
            className="img-fluid rounded-circle col-2 col-lg-1"
            alt={user.profile.userName}
          />
          <span className="col-10 col-lg-11">
            {user.profile?.firstName} {user.profile?.lastName}
          </span>
        </label>
      </a>
    </div>
  );
};

export default ListItem;
