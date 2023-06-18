import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

interface Props{
  countryCode: string,
  onDelete: (countryCode: string) => void;
}


const AlertDialog: React.FC<Props> = ({countryCode, onDelete}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    console.log(countryCode);
    onDelete(countryCode);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <DeleteOutlineOutlinedIcon
          sx={{ fontSize: "19px", minWidth: "15px", p: 0, m: 0 }}
        />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The changes won't be reverted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialog;