import { Box, Collapse, Dialog, DialogContent, DialogTitle, Fab, Grow, IconButton, Slide, styled } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import Button from "@mui/material/Button";
import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'
import ActionProvider from "./ChatBot/ActionProvider";
import MessageParser from "./ChatBot/MessageParser";
import config from "./ChatBot/config";
import { TransitionProps } from "@mui/material/transitions";

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//     '& .MuiDialogContent-root': {
//       padding: theme.spacing(2),
//     },
//     '& .MuiDialogActions-root': {
//       padding: theme.spacing(1),
//     },
//   }));

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up"  ref={ref} {...props} />;
  });  

function ChatBot() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    return(
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            position: "fixed",
            right: 24,
            bottom: 24,
            width: '100dvw',
          }}
        >
            <Fab color="primary" aria-label="Open ChatBot" onClick={handleClickOpen}>
              <ForumRoundedIcon/>
            </Fab>
            <Dialog
            TransitionComponent={Transition}
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            sx={{
              position: "fixed",
              left: '72%',
              top: '15%',
              // width:"175%"
            }}
            
            >
                <DialogTitle sx={{ m: 0, p: 1, paddingLeft: '10%' }} id="customized-dialog-title">
                  ITC
                </DialogTitle>
                <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 3,
                    color: (theme) => theme.palette.grey[500],
                }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>
                </DialogContent>
            </Dialog>
        </Box>
    );
}

export default ChatBot;
