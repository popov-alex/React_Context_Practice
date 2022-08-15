import React from "react";
import Field from "./Field";
import Button from "./Button";

const UserCreate = (props) => {
  return (
    <form className="ui form">
      <div className="item">
        <Field />
      </div>
      <div className="item">
        <Button />
      </div>
    </form>
  );
};

export default UserCreate;
