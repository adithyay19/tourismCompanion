import { Box, Card, CardMedia, Container } from "@mui/material";


function Destinations() {
    return(
        <Box
            id = 'destinations'
            sx = {{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                color: 'white',
                bgcolor: '#06090A',
            }}
        >
            <Container
                sx = {{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Card>
                    
                </Card>
            </Container>

        </Box>
    );
}

export default Destinations;