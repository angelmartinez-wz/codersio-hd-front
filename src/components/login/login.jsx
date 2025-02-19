import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { login } from '../../lib/auth';
import { Fragment, useState } from 'react';

export default function LoginDialog({ onLogin }) {
  const [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Button variant="text" onClick={handleClickOpen} sx={{ color: '#ffffff' }}>
        Login
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: 'form',
            onSubmit: async (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              const password = formJson.password;
              const userLogged = await login(email, password);
              if (userLogged) {
                onLogin(userLogged);
              }
              handleClose();
            },
          },
        }}
      >
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Login to the Harley-Davidson Notification Center to get updates in real time.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            color='secondary'
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="password"
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            color='secondary'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='secondary'>Cancel</Button>
          <Button type="submit" color='secondary'>Login</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}