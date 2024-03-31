import { Box, Container, Typography } from "@mui/material";


function About() {
    return(
        <Box
            id="about" 
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                color: 'white',
                bgcolor: '#06090',
                // alignItems: 'center',
                // justifyContent: 'center'
            }}
        >
            <Container
                sx={{
                    position: 'relative',
                    direction: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Box
                    sx={{
                        width: { sm: '100%', md: '100%' },
                        textAlign: 'center',
                        // alignItems: 'center',
                        // justifyContent: 'center',
                    }}
                >
                    <Typography component='h2' variant='h4'>
                        About
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'grey.400' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac turpis egestas integer. Ipsum nunc aliquet bibendum enim facilisis gravida. Sed arcu non odio euismod lacinia at. Nisl vel pretium lectus quam. Purus gravida quis blandit turpis. Nunc lobortis mattis aliquam faucibus purus. Bibendum at varius vel pharetra vel turpis. Id porta nibh venenatis cras sed. Volutpat diam ut venenatis tellus in. Gravida rutrum quisque non tellus orci. Urna nec tincidunt praesent semper feugiat nibh.
                    </Typography>
                </Box>
            </Container>

        </Box>
    );
}

export default About;