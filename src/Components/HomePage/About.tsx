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
                    Welcome to Travel Companion, your ultimate destination for seamless travel planning and unforgettable adventures! Our innovative tourism website is designed to make your trip planning experience effortless and enjoyable. With our intelligent itinerary creator, simply input your preferences and interests, and we'll craft a personalized itinerary tailored just for you. Our cutting-edge technology recommends the optimal route for your journey, ensuring you make the most of your time and experience all the highlights along the way. Need assistance or insider tips? Our friendly chatbot is here to help, providing real-time recommendations and answering any questions you may have. Once you've finalized your plans, our convenient booking platform allows you to easily reserve accommodations, activities, and transportation, all in one place.
                    </Typography>
                </Box>
            </Container>

        </Box>
    );
}

export default About;