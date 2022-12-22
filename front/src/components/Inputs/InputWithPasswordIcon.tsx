import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import KeyIcon from '@mui/icons-material/Key';

type Props = {
  id?: string;
  placeholder?: string;
  name?: string;
  type?: string;
  onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputWithPasswordIcon = ({
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
          <KeyIcon />
        </InputAdornment>
      }
      placeholder={placeholder}
    />
  );
};
