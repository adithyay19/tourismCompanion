// import { createChatBotMessage } from 'react-chatbot-kit';
// import ActionProvider from "src\Components\ChatBot\ActionProvider.tsx"
// import './App.css'
import 'react-chatbot-kit/build/main.css'

// import MapPage from './Routes/MapPage'
import NavBar from './NavBar'
import HomePage from './Routes/HomePage';
import ChatBot from './Components/ChatBot';
import Footer from './Components/Footer';
import Theme from './Theme';
import { Box, CssBaseline, Divider, PaletteMode, ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
// import { create } from '@mui/material/styles/createTransitions';

const defaultTheme = createTheme({});

interface ToggleCustomThemeProps {
  showCustomTheme: Boolean;
  toggleCustomTheme: () => void;
}

function App() {

  const [mode, setMode] = useState<PaletteMode>('dark');
  const [showCustomTheme, setShowCustomTheme] = useState(true);
  const appTheme = createTheme(Theme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }

  return (
    <>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        {/* <NavBar mode={mode} toggleColorMode={toggleColorMode}/> */}
        {/* <Hero/> */}
        <Box sx={{ bgcolor: 'background.default'}}>
          {/* <NavBar mode={mode} toggleColorMode={toggleColorMode}/> */}
          <HomePage/>
          <Divider/>
          <Footer/>

        </Box>
        <ChatBot/>

      </ThemeProvider>
    </>
  );
}

export default App;
