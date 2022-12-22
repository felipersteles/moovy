import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";

type Props = {
  id?: string;
  placeholder?: string;
    name?: string;
    type?: string
  onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputWithIcon = ({ id, name, placeholder, type, onChangeHandler }: Props) => {
  return (
    <Input
      name={name}
          id={id}
          type={type}
      onChange={onChangeHandler}
      startAdornment={
        <InputAdornment position="start">
          <AccountCircle />
        </InputAdornment>
      }
      placeholder={placeholder}
    />
  );
};
