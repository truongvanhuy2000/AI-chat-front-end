import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

function DeleteConfirmationDialog({title, content, open, onAgree, onClose}) {
    return (
        <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Disagree</Button>
                <Button onClick={() => {
                    onAgree()
                    onClose()
                }} autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteConfirmationDialog;