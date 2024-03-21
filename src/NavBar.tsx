// import { PaletteMode } from '@mui/material';
// import Box from '@mui/material/Box';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
// import Divider from '@mui/material/Divider';
// import Typography from '@mui/material/Typography';
// import MenuItem from '@mui/material/MenuItem';
// import Drawer from '@mui/material/Drawer';
// import MenuIcon from '@mui/icons-material/Menu';
// import ColorMode from './ColorMode';
// import { useState } from 'react';


// const logoStyle = {
//   width: '140px',
//   height: 'auto',
//   cursor: 'pointer',
// };

// interface NavBarProps {
//   mode: PaletteMode;
//   toggleColorMode: () => void;
// }

// function NavBar({ mode, toggleColorMode }: NavBarProps) {
//   const [open, setOpen] = useState(false);

//   const toggleDrawer = (newOpen: boolean) => () => {
//     setOpen(newOpen);
//   };

//   // const scrollToSection = (sectionId: string) => {
//   //   const sectionElement = document.getElementById(sectionId);
//   //   const offset = 128;
//   //   if (sectionElement) {
//   //     const targetScroll = sectionElement.offsetTop - offset;
//   //     sectionElement.scrollIntoView({ behavior: 'smooth' });
//   //     window.scrollTo({
//   //       top: targetScroll,
//   //       behavior: 'smooth',
//   //     });
//   //     setOpen(false);
//   //   }
//   // };

//   return (
//     <div>
//       <AppBar
//         position="fixed"
//         sx={{
//           boxShadow: 0,
//           bgcolor: 'transparent',
//           backgroundImage: 'none',
//           mt: 2,
//         }}
//       >
//         <Container maxWidth="lg">
//           <Toolbar
//             variant="regular"
//             sx={(theme) => ({
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'space-between',
//               flexShrink: 0,
//               borderRadius: '999px',
//               bgcolor:
//                 theme.palette.mode === 'light'
//                   ? 'rgba(255, 255, 255, 0.4)'
//                   : 'rgba(0, 0, 0, 0.4)',
//               backdropFilter: 'blur(24px)',
//               maxHeight: 40,
//               border: '1px solid',
//               borderColor: 'divider',
//               boxShadow:
//                 theme.palette.mode === 'light'
//                   ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
//                   : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
//             })}
//           >
//             <Box
//               sx={{
//                 flexGrow: 1,
//                 display: 'flex',
//                 alignItems: 'center',
//                 ml: '-18px',
//                 px: 0,
//               }}
//             >
//               {/* <img
//                 src={
//                   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'
//                 }
//                 style={logoStyle}
//                 alt="logo of sitemark"
//               /> */}
//               <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//                 <MenuItem
//                   // onClick={() => scrollToSection('features')}
//                   sx={{ py: '6px', px: '12px' }}
//                 >
//                   <Typography variant="body2" color="text.primary">
//                     Features
//                   </Typography>
//                 </MenuItem>
//                 <MenuItem
//                   // onClick={() => scrollToSection('testimonials')}
//                   sx={{ py: '6px', px: '12px' }}
//                 >
//                   <Typography variant="body2" color="text.primary">
//                     Testimonials
//                   </Typography>
//                 </MenuItem>
//                 <MenuItem
//                   // onClick={() => scrollToSection('highlights')}
//                   sx={{ py: '6px', px: '12px' }}
//                 >
//                   <Typography variant="body2" color="text.primary">
//                     Highlights
//                   </Typography>
//                 </MenuItem>
//                 <MenuItem
//                   // onClick={() => scrollToSection('pricing')}
//                   sx={{ py: '6px', px: '12px' }}
//                 >
//                   <Typography variant="body2" color="text.primary">
//                     Pricing
//                   </Typography>
//                 </MenuItem>
//                 <MenuItem
//                   // onClick={() => scrollToSection('faq')}
//                   sx={{ py: '6px', px: '12px' }}
//                 >
//                   <Typography variant="body2" color="text.primary">
//                     FAQ
//                   </Typography>
//                 </MenuItem>
//               </Box>
//             </Box>
//             <Box
//               sx={{
//                 display: { xs: 'none', md: 'flex' },
//                 gap: 0.5,
//                 alignItems: 'center',
//               }}
//             >
//               <ColorMode mode={mode} toggleColorMode={toggleColorMode} />
//               <Button
//                 color="primary"
//                 variant="text"
//                 size="small"
//                 component="a"
//                 href="/material-ui/getting-started/templates/sign-in/"
//                 target="_blank"
//               >
//                 Sign in
//               </Button>
//               <Button
//                 color="primary"
//                 variant="contained"
//                 size="small"
//                 component="a"
//                 href="/material-ui/getting-started/templates/sign-up/"
//                 target="_blank"
//               >
//                 Sign up
//               </Button>
//             </Box>
//             <Box sx={{ display: { sm: '', md: 'none' } }}>
//               <Button
//                 variant="text"
//                 color="primary"
//                 aria-label="menu"
//                 onClick={toggleDrawer(true)}
//                 sx={{ minWidth: '30px', p: '4px' }}
//               >
//                 <MenuIcon />
//               </Button>
//               <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
//                 <Box
//                   sx={{
//                     minWidth: '60dvw',
//                     p: 2,
//                     backgroundColor: 'background.paper',
//                     flexGrow: 1,
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: 'flex',
//                       flexDirection: 'column',
//                       alignItems: 'end',
//                       flexGrow: 1,
//                     }}
//                   >
//                     <ColorMode mode={mode} toggleColorMode={toggleColorMode} />
//                   </Box>
//                   <MenuItem onClick={() => {}}>
//                     Features
//                   </MenuItem>
//                   <MenuItem onClick={() => {}}>
//                     Testimonials
//                   </MenuItem>
//                   <MenuItem onClick={() => {}}>
//                     Highlights
//                   </MenuItem>
//                   <MenuItem onClick={() => {}}>
//                     Pricing
//                   </MenuItem>
//                   <MenuItem onClick={() => {}}>
//                     FAQ
//                   </MenuItem>
//                   <Divider />
//                   <MenuItem>
//                     <Button
//                       color="primary"
//                       variant="contained"
//                       component="a"
//                       href="/material-ui/getting-started/templates/sign-up/"
//                       target="_blank"
//                       sx={{ width: '100%' }}
//                     >
//                       Sign up
//                     </Button>
//                   </MenuItem>
//                   <MenuItem>
//                     <Button
//                       color="primary"
//                       variant="outlined"
//                       component="a"
//                       href="/material-ui/getting-started/templates/sign-in/"
//                       target="_blank"
//                       sx={{ width: '100%' }}
//                     >
//                       Sign in
//                     </Button>
//                   </MenuItem>
//                 </Box>
//               </Drawer>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </div>
//   );
// }

// export default NavBar;



import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { PaletteMode } from '@mui/material';
import { useState } from 'react';

const pages = ['HOME', 'ITINERARY', 'BOOKING', 'ABOUT'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {


interface NavBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}  

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // const scrollToSection = (sectionId: string) => {
  //   const sectionElement = document.getElementById(sectionId);
  //   const offset = 128;
  //   if (sectionElement) {
  //     const targetScroll = sectionElement.offsetTop - offset;
  //     sectionElement.scrollIntoView({ behavior: 'smooth' });
  //     window.scrollTo({
  //       top: targetScroll,
  //       behavior: 'smooth',
  //     });
  //     setOpen(false);
  //   }
  // };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);


  };

  return (
    <AppBar position="fixed" color='transparent'>
      <Container maxWidth="xl">
        <Toolbar 
          variant='regular'
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            borderRadius: '999px',
            bgcolor: 'rgba(0, 0, 0, 0.4)',
              // theme.palette.mode === 'light' ?
              //   'rgba(255, 255, 255, 0.4)' :
              //   'rgba(0, 0, 0, 0.4)',
              backdropFilter : 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: '0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)',
    
          }}
        >
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color={'cyan'}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', alignItems: 'center', justifyContent: 'center' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Adithya" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
