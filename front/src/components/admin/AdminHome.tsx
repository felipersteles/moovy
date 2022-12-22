import { Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import { InputWithEmailIcon } from "../Inputs/InputWithEmailIcon";
import { AdminService } from "./AdminService";

type Props = {};

const adminService = new AdminService();

const AdminHome = (props: Props) => {
  const [email, setEmail] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setEmail(value);
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("enviar email para", email);
    adminService.sendEmail(email);
  };

  return (
    <div>
      <Container>
        <Typography variant="h3" gutterBottom>
          Mande um email para alguem
        </Typography>
        <form onSubmit={onSubmitHandler}>
          <InputWithEmailIcon
            onChangeHandler={onChangeHandler}
            placeholder="Envie um email"
          />
          <Button type="submit" variant="contained">
            Enviar
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default AdminHome;
