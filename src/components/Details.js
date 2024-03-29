import React, { useEffect, useState } from "react";

const Details = ({ id }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

  return (
    <div className="mx-3 " id="details">
      <div>
        <h4
          className="bg-primary py-3 my-2 rounded-top row justify-content-center text-uppercase"
          style={{ "--bs-bg-opacity": 0.3 }}
        >
          Users Details
        </h4>
      </div>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "80vh" }}
      >
        {id === 0 ? (
          <h3 className="text-center">No user has been selected yet</h3>
        ) : (
          <div className="">
            {user.profile ? (
              <div className="card border-0" style={{ width: "30rem" }}>
                <img
                  src={`https://randomuser.me/api/portraits/men/${id}.jpg`}
                  className="card-img-top w-25 mx-auto rounded-circle"
                  width="20px"
                  alt={user.username}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    @{user.profile.username}
                  </h5>
                  <div className="p-2">
                    <div
                      className="bg-light border rounded border-1 border-secondary form-control d-inline-block"
                      style={{ height: "5rem" }}
                    >
                      {user.Bio}
                    </div>
                  </div>
                  <div className="p-2">
                    <small className="fw-bold">Full Name</small>
                    <div className="bg-light border rounded border-1 border-secondary form-control">
                      {user.profile.firstName} {user.profile.lastName}
                    </div>
                  </div>
                  <div className="p-2">
                    <small className="fw-bold">Job Title</small>
                    <div className="bg-light border rounded border-1 border-secondary form-control">
                      {user.jobTitle}
                    </div>
                  </div>
                  <div className="p-2">
                    <small className="fw-bold">Email</small>
                    <div className="bg-light border rounded border-1 border-secondary form-control">
                      {user.profile.email}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="spinner-border text-center col-12" role="status">
                <div className="visually-hidden">Loading...</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
