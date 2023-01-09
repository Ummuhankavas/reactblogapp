import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import woswos from '../assets/woswos.png';
import useAuth from '../context/AuthContextProvider';
import { Link } from "react-router-dom";


export default function Navbar() {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  

  const {currentUser} = useAuth();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={woswos} alt='logo' className='logo' width={50} />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            April's Blog
          </Typography>
          
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle style={{fontSize: '30px'}}/>
              </IconButton>
              {currentUser?.email ? (<Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link to= '/login' >
                <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Link>
                <Link to= '/new-blog' >
                <MenuItem onClick={handleClose}>New Blog</MenuItem>
                </Link>
                <Link to= '/profile' >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
                
               
              </Menu>):( 
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link to= '/login'>
                <MenuItem onClick={handleClose}>Login</MenuItem>
                </Link>
                <Link to= '/register' >
                <MenuItem onClick={handleClose}>Register</MenuItem>
                </Link>
                
               
              </Menu>)}
             
            </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
