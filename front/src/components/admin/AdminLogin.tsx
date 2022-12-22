import { Box } from "@mui/material";
import React, { useState } from "react";
import { LoginReq } from "../../types/LoginReq.type";
import { AdminService } from "./AdminService";
import { InputWithIcon } from "./subcomponents/InputWithIcon";
import {Button} from '@mui/material'

type Props = {};

const adminService = new AdminService();

const AdminLogin = (props: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const user: LoginReq = {
      username,
      password
    }

    adminService.login(user).then(() => console.log("fazendo login"));
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <form onSubmit={onSubmitHandler}>
        <InputWithIcon
          placeholder="username"
          onChangeHandler={onChangeHandler}
          name="username"
        />
        <InputWithIcon type="password" placeholder="senha" name="password" onChangeHandler={onChangeHandler} />

        <Button type="submit" variant="contained">Submit</Button>
      </form>
    </Box>
  );
};

export default AdminLogin;
