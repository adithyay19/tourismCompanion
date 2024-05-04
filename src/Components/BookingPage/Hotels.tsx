// import { Box, FormLabel, OutlinedInput, Button, styled, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
// import AbcIcon from '@mui/icons-material/Abc';
// import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { useState } from "react";

// const FormGrid = styled('div')(() => ({
//     display: 'flex',
//     flexDirection: 'column',
//   }));

// //   const IconButton = () => {
// //     return(
// //         <Button>

// //         </Button>
// //     );
// //   }


// function Hotels () {
//     const [open, setOpen] = useState(false);
//     const [dest, setDest] = useState('');
//     const [checkIn, setCheckIn] = useState('');
//     const [checkOut, setCheckOut] = useState('');
//     const [c1, setC1] = useState(1);
//     const [c2, setC2] = useState(2);


//     const handleCountBox = () => {
//         open===true? setOpen(false) : setOpen(true);
//       };


//     const handleChange1 = (event: SelectChangeEvent<typeof c1>) => {
//         setC1(Number(event.target.value));
//     };  

//     const handleChange2 = (event: SelectChangeEvent<typeof c2>) => {
//         setC2(Number(event.target.value));
//     };

//     return(
//         <>
//             <Box
//                 sx={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     gap: 2
//                 }}
//             >
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         justifyContent: 'space-between',
//                         p: 3,
//                         height: { xs:300, sm:350, md:37 },
//                         borderRadius: '20px',
//                         border: '1px solid',
//                         borderColor: 'divider',
//                         backgroundColor: 'background.paper',
//                         boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
//                     }}
//                 >
//                     {/* <Box> */}
//                         <AbcIcon />
//                         <Box
//                             sx={{
//                                 display: 'flex',
//                                 justifyContent: 'space-between',
//                                 width: '100%',
//                                 gap: 2,
//                             }}
//                         >
//                             <FormGrid sx={{ flexGrow: 1 }}>
//                                 <FormLabel>
//                                     Destination
//                                 </FormLabel>
//                                 <OutlinedInput label='Destination'/>
//                             </FormGrid>

//                             <FormGrid>
//                                 <LocalizationProvider dateAdapter={AdapterDayjs} >
//                                     <DemoContainer components={['DatePicker']}>
//                                         <DatePicker label="Check-in" />
//                                     </DemoContainer>
//                                 </LocalizationProvider>
//                             </FormGrid>
//                             <FormGrid>
//                                 <LocalizationProvider dateAdapter={AdapterDayjs} >
//                                     <DemoContainer components={['DatePicker']}>
//                                         <DatePicker label="Check-out" />
//                                     </DemoContainer>
//                                 </LocalizationProvider>
//                             </FormGrid>
//                             <FormGrid>
//                                 <Button
//                                     onClick={handleCountBox}
//                                 >
//                                     <AbcIcon />
//                                     {c1}
//                                     <AbcIcon />
//                                     {c2}
//                                 </Button>
//                                 <Dialog disableEscapeKeyDown open={open} onClose={handleCountBox}>
//                                     <DialogTitle>Fill the form</DialogTitle>
//                                     <DialogContent>
//                                         <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
//                                             <FormControl sx={{ m: 1, minWidth: 120 }}>
//                                                 <InputLabel >Age</InputLabel>
//                                                 <Select
                                                    
//                                                     value={c1}
//                                                     onChange={handleChange1}
//                                                     input={<OutlinedInput label="Age" />}
//                                                 >
//                                                     <MenuItem value=""><em>None</em></MenuItem>
//                                                     <MenuItem value={10}>Ten</MenuItem>
//                                                     <MenuItem value={20}>Twenty</MenuItem>
//                                                     <MenuItem value={30}>Thirty</MenuItem>
//                                                 </Select>
//                                             </FormControl>
//                                             <FormControl sx={{ m: 1, minWidth: 120 }}>
//                                                 <InputLabel>Age</InputLabel>
//                                                 <Select
//                                                     labelId="demo-dialog-select-label"
//                                                     id="demo-dialog-select"
//                                                     value={c2}
//                                                     onChange={handleChange2}
//                                                     input={<OutlinedInput label="Age" />}
//                                                 >
//                                                     <MenuItem value=""><em>None</em></MenuItem>
//                                                     <MenuItem value={10}>Ten</MenuItem>
//                                                     <MenuItem value={20}>Twenty</MenuItem>
//                                                     <MenuItem value={30}>Thirty</MenuItem>
//                                                 </Select>
//                                             </FormControl>
//                                         </Box>
//                                     </DialogContent>
//                                     <DialogActions>
//                                         <Button onClick={handleCountBox}>Cancel</Button>
//                                         <Button onClick={handleCountBox}>Ok</Button>
//                                     </DialogActions>
//                                 </Dialog>
//                             </FormGrid>


//                         </Box>
//                     {/* </Box> */}
//                 </Box>
//             </Box>
//         </>
//     );
// }

//  export default Hotels;