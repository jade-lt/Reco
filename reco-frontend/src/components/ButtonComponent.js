import Button from "@material-ui/core/Button";

export const ButtonComponent = (props) => {
  return (
    <Button color="secondary" variant="contained" onClick={props.onClick}>
      {props.buttonLabel}
    </Button>
  );
};
