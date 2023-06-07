import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
// import { useState } from 'react';

const LogIn = () => {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('LogIn Successful:');
        // TODO: Redirect to the feed page but need to make sure that is the name route we are using for feed
    }
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true); 
    const handleClose = () => setOpen(false);


    return (
        <div>
<Button onClick={handleOpen}>LogIn</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
<form onSubmit={handleFormSubmit} className="modal-box">
<Button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Button>
    <div>
            <TextField label="Your email"
            sx={{ m: 1, width: '25ch' }}
            id="email1"
            placeholder="janedoe@email.com"
            required
            type="email"
            />
            <TextField label="Username"
            sx={{ m: 1, width: '25ch' }}
            id="username1"
            placeholder="j@neDoe33"
            required
            type="username"
            />
        <FormControl required sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="update-password">Password</InputLabel>
            <OutlinedInput
            sx={{ m: 1, width: '25ch' }}
            id="update-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
                <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
                </InputAdornment>
            }
            label="Password"
            />
    </FormControl>
    </div>    
    <div className="modal-action">
      <Button sx={{ m: 1, width: '25ch' }} className="Submit">LogIn</Button>
    </div>
</form>
  </Box>
</Modal>
</div>
    );
}
export default LogIn;