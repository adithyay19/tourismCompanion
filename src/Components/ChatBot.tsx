import { Dialog, DialogContent, DialogTitle, IconButton, Slide, styled } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";
import React from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'
import ActionProvider from "./ChatBot/ActionProvider";
import MessageParser from "./ChatBot/MessageParser";
import config from "./ChatBot/config";
import { TransitionProps } from "@mui/material/transitions";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });  

function ChatBot() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    return(
        <>
            <Button variant="text" onClick={handleClickOpen}>
                Chatbot
            </Button>
            <BootstrapDialog
            TransitionComponent={Transition}
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Kerala - ITC
                </DialogTitle>
                <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>
                </DialogContent>
            </BootstrapDialog>
        </>
    );
}

export default ChatBot;
