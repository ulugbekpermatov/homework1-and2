import React from "react";
import WithResult from "../WithResult";

const UserDetals = ({ itemList: { name, username, id, email } }) => {
  return (
    <ul>
      <li>
        <b>{id}</b>
        <br />

        <b>{name}</b>
        <br />
        <b>{username}</b>
        <br />

        <b>{email}</b>
        <br />
      </li>
    </ul>
  );
};

export default WithResult(UserDetals);

