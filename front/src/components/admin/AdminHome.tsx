import { Container, Typography } from "@mui/material";
import Input from "@mui/material/Input";

type Props = {};

const AdminHome = (props: Props) => {
  return (
    <div>
      <Container>
        <Typography variant="h3" gutterBottom>
          Mande um email para alguem
        </Typography>
        <Input placeholder="Email" />
      </Container>
    </div>
  );
};

export default AdminHome;
