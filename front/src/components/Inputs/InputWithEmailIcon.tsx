import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from '@mui/icons-material/Email';

type Props = {
  id?: string;
  placeholder?: string;
  name?: string;
  type?: string;
  onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputWithEmailIcon = ({
  id,
  name,
  placeholder,
  type,
  onChangeHandler,
}: Props) => {
  return (
    <Input
      name={name}
      id={id}
      type={type}
      onChange={onChangeHandler}
      startAdornment={
        <InputAdornment position="start">
          <EmailIcon />
        </InputAdornment>
      }
      placeholder={placeholder}
    />
  );
};
