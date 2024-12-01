import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import React, {useContext, useRef} from "react";

function EditChatNameDialog({title, content, open, onAgree, onClose}) {
    const textInput = useRef<any>(null)

    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{content}</DialogContentText>
                <TextField
                    inputRef={textInput}
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    label="Chat Name"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={() => {
                    if (textInput.current.value != null && textInput.current.value !== '') {
                        onAgree(textInput.current.value);
                    }
                    onClose()
                }}>Edit</Button>
            </DialogActions>
        </Dialog>
    )
}

export default EditChatNameDialog;