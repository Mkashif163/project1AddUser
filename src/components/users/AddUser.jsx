import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [user, setUser] = useState({
    username: "",
    age: "",
  });

  const userChangeHandler = (event) => {
    setUser((prevState) => {
      return {
        ...prevState,
        [event.target.id]: event.target.value,
      };
    });
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (user.username.trim().length === 0 || user.age.trim().length === 0) {
      return;
    }
    if (+user.age < 1) {
      return;
    }
    props.onAddUser(user);
    setUser({
      username: "",
      age: "",
    });
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={user.username}
          onChange={userChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={user.age}
          onChange={userChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
