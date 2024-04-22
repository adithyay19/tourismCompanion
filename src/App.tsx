import 'react-chatbot-kit/build/main.css'

// import MapPage from './Routes/MapPage'
import NavBar from './NavBar'
import HomePage from './Routes/HomePage';
import ChatBot from './Components/ChatBot';
import Footer from './Components/Footer';
import Theme from './Theme';
import { Box, CssBaseline, Divider, PaletteMode, ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';

// import { create } from '@mui/material/styles/createTransitions';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BookingPage from './Routes/BookingPage';

const route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },

  {
    path: "/booking-page",
    element: <BookingPage/>
  },
])

interface ToggleCustomThemeProps {
  showCustomTheme: Boolean;
  toggleCustomTheme: () => void;
}

function App() {

  const [mode, setMode] = useState<PaletteMode>('dark');
  const [showCustomTheme, setShowCustomTheme] = useState(true);
  const appTheme = createTheme(Theme(mode));
  const defaultTheme = createTheme({palette: { mode }});

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }

  return (
    <>
      <ThemeProvider theme={createTheme(Theme(mode))}>
        <CssBaseline />
        <NavBar />
        <Box sx={{ bgcolor: 'background.default', overflow: 'auto'}}>
          <RouterProvider router={route}/>
          <Divider/>
          <Footer/>
        </Box>
        <ChatBot/>
      </ThemeProvider>
    </>
  );
}

export default App;
