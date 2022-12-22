import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { MenuItem, TextField } from "@mui/material";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";

type Props = {
  id?: string;
  placeholder?: string;
  name?: string;
  type?: string;
  onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rating?: [any];
};

export const NumberInput = ({
  id,
  name,
  placeholder,
  type,
  onChangeHandler,
  rating,
}: Props) => {
  return (
    <TextField
      id="filled-number"
      label="Rating"
      type="number"
      name={name}
      onChange={onChangeHandler}
      InputLabelProps={{
        shrink: true,
      }}
      variant="filled"
    />
  );
};
