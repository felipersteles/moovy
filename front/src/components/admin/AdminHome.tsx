import { Container, Typography } from "@mui/material";
import { InputWithEmailIcon } from "../Inputs/InputWithEmailIcon";
import { AdminService } from "./AdminService";

type Props = {};

const adminService = new AdminService();

const AdminHome = (props: Props) => {
  return (
    <div>
      <Container>
        <Typography variant="h3" gutterBottom>
          Mande um email para alguem
        </Typography>
        <InputWithEmailIcon />
      </Container>
    </div>
  );
};

export default AdminHome;
