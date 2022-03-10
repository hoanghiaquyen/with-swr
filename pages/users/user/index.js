import Image from "next/image";
import React from "react";

const User = ({ users, handleCount, error }) => {
  return (
    <div
      style={{
        maxWidth: "1024px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "stretch",
        }}
      >
        {users?.map((user) => (
          <div key={user.cell} style={{ marginBottom: "15px" }}>
            <Image
              src={user.picture.thumbnail}
              alt={user.name.first}
              height={100}
              width={100}
            />
            <h3>
              {user.name.first} {user.name.last}
            </h3>
          </div>
        ))}
      </div>
      {!error && users && <button onClick={handleCount}>Load more</button>}
    </div>
  );
};

export default User;
