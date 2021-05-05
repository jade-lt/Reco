import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

export const ButtonComponent = (props) => {
  return (
    <Button variant="contained" onClick={props.onClick}>
      {props.buttonLabel}
    </Button>
  );
};
