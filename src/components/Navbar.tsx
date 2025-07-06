// import { useState } from "react"

// const Navbar:React.FC = () => {
//     const [showMenu, setShowMenu] = useState(false)

//     return (
//         <nav className="flex sticky justify-between items-center w-full bg-slate-800 text-white p-8">
//             <a href="/" className="font-bold text-4xl">RepoJobs</a>
//             <section className="lg:hidden flex flex-col w-10 h-10">
//                 <label htmlFor="navbar" className="md:hidden flex text-white">
//                     <img src="/list.svg" id="open" alt="menu-icon" className="w-6 h-6" />
//                 </label>
//                 <input type="checkbox" id="navbar" className="hidden" onChange={e => setShowMenu(!showMenu)}></input>
//                 {
//                     showMenu 
//                     ?
//                         <div className="flex-col w-60 h-auto p-2 gap-1 -translate-x-60 bg-gray-950/90" id="menu">
//                             <a href="/jobs" className="flex flex-row justify-center items-center p-3 text-xl font-bold text-white self-center place-self-center">Jobs</a>
//                             <a href="/" className="flex flex-row justify-center items-center p-3 text-xl font-bold text-white self-center place-self-center">Example</a>
//                             <a href="/" className="flex flex-row justify-center items-center p-3 text-xl font-bold text-white self-center place-self-center">Example</a>
//                         </div>
//                     : 
//                         (
//                             <></>
//                         )
//                 }
//             </section>
//             <section className="md:flex hidden gap-8 font-bold text-xl" id="menu">
//                 <a href="/jobs">Jobs</a>
//                 <a href="/">Account</a>
//             </section>
//         </nav>
//     )
// }

// export default Navbar

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        RepoJobs
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                <Link to={"/"}>
                    <ListItemText primary={"Home"} />
                </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                <Link to={"/jobs"}>
                    <ListItemText primary={"Jobs"} />
                </Link>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} position={'static'}>
      <CssBaseline />
      <AppBar component="nav" color={'primary'}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1}}
          >
            RepoJobs
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button sx={{ color: '#fff' }}>
                <Link to={"/"}>
                    <ListItemText primary={"Home"} />
                </Link>
              </Button>
              <Button sx={{ color: '#fff' }}>
                <Link to={"/jobs"}>
                    <ListItemText primary={"Jobs"} />
                </Link>
              </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
