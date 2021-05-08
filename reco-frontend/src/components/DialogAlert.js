import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";

export const DialogAlert = (props) => {
  return (
    <Dialog open={props.open}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{props.description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onCancelClick}>Cancel</Button>
        <Button onConfirmClick={props.onConfirmClick}>
          {props.confirmButtonLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
