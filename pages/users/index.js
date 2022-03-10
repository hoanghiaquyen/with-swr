import React, { useState } from "react";
import useSWR from "swr";
import { getData } from "../../utils/axiosUtils";
import User from "./user";

const Users = () => {
  const [count, setCount] = useState(5);
  const { data, error } = useSWR(`?results=${count}&seed=abcd`, getData);

  const handleCount = () => {
    setCount(count + 5);
  };

  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;
  return (
    <User
      users={data && data.results}
      error={error}
      handleCount={handleCount}
    />
  );
};

export default Users;
