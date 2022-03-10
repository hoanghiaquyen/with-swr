import React from "react";

const User = ({ users }) => {
  return (
    <ul>
      {users?.map((user) => (
        <li key={user.phone}>
          {" "}
          {`Fullname: ${user.name} ==== Phone: ${user.phone}`}{" "}
        </li>
      ))}
    </ul>
  );
};

export default User;
