import React, { useEffect, useState } from "react";

const Details = ({ id }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);
  return (
    <div>
      {id === 0 ? (
        <h1 className="text-center">Now Users Selected Yet</h1>
      ) : (
        <div>{user ? user.Bio : "Loading..."}</div>
      )}
    </div>
  );
};

export default Details;
