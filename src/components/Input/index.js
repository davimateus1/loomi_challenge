import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Styles from "../../assets/styles/InputStyle";

const ValidField = ({ classes, value, setValue, label, type }) => {
  const handleChange = (name) => {
    setValue(name);
  };

  return (
    <TextField
      label={label}
      className={classes.textField}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      margin="normal"
      variant="outlined"
      type={type}
      InputLabelProps={{
        classes: {
          root: classes.cssLabel,
          focused: classes.cssFocused,
        },
      }}
      InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline,
        },
      }}
    />
  );
};

export default withStyles(Styles)(ValidField);
