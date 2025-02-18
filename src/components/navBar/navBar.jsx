import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoginDialog from '../login/login';
import { Avatar, Button } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

export default function NavBar({ user, onLogout, onLogin }) {
  console.log('nav', user);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#000000', marginBottom: '50px' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img
              src='https://1000marcas.net/wp-content/uploads/2019/12/Logo-Harley-Davidson.png'
              alt="harley-davidson-logo"
              className="object-cover h-10 w-10" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 500 }}>
            Harley-Davidson Notification Center
          </Typography>
          {
            user ? (
              <>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>{ user?.name?.charAt(0) || user?.charAt(0).toUpperCase() }</Avatar>
                <Button onClick={onLogout} sx={{ color: '#ffffff' }}>
                  Logout
                </Button>
              </>
            ) : (
              <LoginDialog onLogin={onLogin} />
            )
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}