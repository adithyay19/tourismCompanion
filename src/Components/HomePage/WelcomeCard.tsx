import { Box, Button, Container, Typography } from "@mui/material";
import "E:/Major Project/tourismCompanion/src/images/Cover_Img.jpg";


function WelcomeCard () {
    return(
        <Box
            id="home"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                color: 'white',
                bgcolor: '#06090A',
                backgroundImage: 'E:/Major Project/tourismCompanion/src/images/Cover_Img.jpg',
                
            }}
        >
            <Container
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    // backgroundImage: 'E:/Major Project/tourismCompanion/src/images/Cover_Img.jpg',
                }}

            >
                <Box
                    sx={{
                        width: { sm: '100%', md: '60%' },
                        textAlign: { sm: 'left', md: 'center' },
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