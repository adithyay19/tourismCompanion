import { Box, Card, CardActionArea, CardContent, FormControl, FormLabel, Grid, OutlinedInput, RadioGroup, Select, Stack, TextField, Typography, styled } from "@mui/material";
import AbcIcon from '@mui/icons-material/Abc';
import { useState } from "react";
// import Hotels from "../Components/BookingPage/Hotels";


const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
    
}))


function BookingPage() {

    const [bookingType, setBookingType] = useState('hotels');

    const handleBookingType = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setBookingType(event.target.value);
    }; 

    return(
        <div id="booking-page">
            <Box
                sx={{
                    position: "relative",
                    width: { sm: '100%', md: '100%' },
                    height: { sm: '100%', md: '100%' },
                }}
            >
                <Stack spacing={{ xs:3, sm:6 }} useFlexGap>
                    <FormControl component='fieldset' fullWidth>
                        <RadioGroup
                            name="bookingType"
                            value={bookingType}
                            onChange={handleBookingType}
                            sx={{
                                flexDirection: {sm:'column', md:'row'},
                                gap: 2,
                            }}
                        >
                            <Card
                                raised={bookingType === 'hotels'}
                                sx={{
                                    maxWidth: { sm:'100%', md:'50%' },
                                    flexGrow: 1,
                                    outline: '1px solid',
                                    outlineColor: 
                                        bookingType === 'hotels'? 'primary.main' : 'divider',
                                    backgroundColor:
                                        bookingType === 'creditCard' ? 'background.default' : '',
                                }}
                            >
                                <CardActionArea onClick={() => setBookingType('hotels')} >
                                    <CardContent
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                        }}
                                    >
                                        <AbcIcon />
                                        <Typography fontWeight='medium'>Hotels</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card
                                raised={bookingType === 'flights'}
                                sx={{
                                    maxWidth: { sm:'100%', md:'50%' },
                                    flexGrow: 1,
                                    outline: '1px solid',
                                    outlineColor: 
                                        bookingType === 'hotels'? 'primary.main' : 'divider',
                                    backgroundColor:
                                        bookingType === 'creditCard' ? 'background.default' : '',
                                }}
                            >
                                <CardActionArea onClick={() => setBookingType('flights')}>
                                    <CardContent
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                        }}
                                    >
                                        <AbcIcon />
                                        <Typography fontWeight='medium'>Flights</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </RadioGroup>
                    </FormControl> 
                    {/* {bookingType === 'hotels' && <Hotels/>} */}
                    {/* <Hotels/> */}
                </Stack>
            </Box>
        </div>
    );
}

export default BookingPage;