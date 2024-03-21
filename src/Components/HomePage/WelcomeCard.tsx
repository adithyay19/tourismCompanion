import { Box, Button, Container, Typography } from "@mui/material";
import "E:/Major Project/tourismCompanion/src/images/Cover_Img.jpg";
import axios from "axios";


function WelcomeCard () {
    return(
        <Box
            id="home"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                color: 'white',
                bgcolor: '#06090A',
                backgroundImage: "url('src/images/Cover_Img.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',

                
            }}
        >
            <Container
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}

            >
                <Box
                    sx={{
                        width: { sm: '100%', md: '100%' },
                        height: { sm: '100%', md: '100%' },
                        textAlign: { sm: 'center', md: 'center' },
                        // backgroundImage: "url('src/images/Cover_Img.jpg')",
                        // backgroundRepeat: "no-repeat",
                        // backgroundSize: 'cover',
                        // backgroundPosition: 'center',
                        // width: '100%',
                        // height: '100%',
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Typography component='h2' variant='h4'>
                        TRAVEL COMPANION
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white'}}>
                        Where your journey begins
                    </Typography>
                    <Button>
                        Explore
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default WelcomeCard;