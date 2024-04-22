import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
// import "E:/Major Project/tourismCompanion/src/images/Cover_Img.jpg";
import axios from "axios";


function WelcomeCard () {
    return(
        <Box
            id="home"
            sx={{
                position: 'relative',
                backgroundImage: "url('src/assets/images/Cover_Img.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: '100% 150%',
                backgroundPosition: 'center',
                width: '100%',
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                
            }}
        >
            <Container
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    // height: '100%'
                }}

            >
                <Box
                    sx={{
                        width: { sm: '100%', md: '100%' },
                        height: { sm: '100%', md: '100%',  },
                        textAlign: { sm: 'center', md: 'center' },
                        // backgroundImage: "url('src/images/Cover_Img.jpg')",
                        // backgroundRepeat: "no-repeat",
                        // backgroundSize: 'cover',
                        // backgroundPosition: 'center',
                        // width: '100%',
                        // height: '100%',
                        alignItems: "center",
                        justifyContent: "center",
                        alignSelf: 'center',
                        justifySelf: 'center',
                        display: "flex",
                        flexDirection: 'column',
                    }}
                >
                    <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' }, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', justifySelf: 'center' }}>
                        <Typography 
                            // component='h2' 
                            variant='h1'
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                alignSelf: 'center',
                                textAlign: 'center',
                                fontSize: 'clamp(3.5rem, 10vw, 4rem)'
                            }}
                        >
                            TRAVEL COMPANION
                        </Typography>
                        <Typography 
                            color='white'
                            variant="h4" 
                            sx={{
                                
                                alignSelf: 'center',
                                width: { sm: '100%', md: '80%' } 
                            }}
                        >
                            Where your journey begins
                        </Typography>
                        <Button variant="contained" color="secondary" href="" target="_blank">
                            EXPLORE
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}

export default WelcomeCard;