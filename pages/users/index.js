import React, { useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import { getData, postData } from "../../utils/axiosUtils";
import User from "./user";

const Users = () => {
  const { mutate } = useSWRConfig();
  const { data, error } = useSWR(`users`, getData);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name,
      phone,
    };
    mutate(`users`, [...data, newUser], false);

    await postData(`users`, newUser);
    setName("");
    setPhone("");
    mutate("/users");
  };
  return (
    <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
      <div>
        <form>
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" onClick={(e) => handleSubmit(e)}>
              Submit
            </button>
          </div>
        </form>
      </div>
      <div>
        <h1>Users</h1>
      </div>
      <User users={data} error={error} />
    </div>
  );
};

export default Users;
