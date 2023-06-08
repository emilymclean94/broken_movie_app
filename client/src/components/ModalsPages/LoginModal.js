import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
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
import Auth from '../../utils/auth';
import { formHelperTextClasses } from '@mui/material';
// import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexWrap: 'wrap',
  };

const LogIn = () => {
    const [formState, setFormState] = useState({ username: '', password: '' });
  const [logIn, { error, data }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {const { name, value } = event.target;setFormState({
...formState, [name]: value})}
      const handleFormSubmit = async (event) => {
        event.preventDefault() 
    try {
      const { data } = await logIn({
        variables: { ...formState },
      });

      Auth.logIn(data.logIn.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    })
  
    }
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <Button onClick={handleOpen}>LogIn</Button>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    
                    <form onClick={handleFormSubmit} className="modal-box">
                        <Button onClick={handleClose} htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Button>
                        <div>

                            <TextField label="username"

                                sx={{ m: 1, width: '25ch' }}
                                id="username1"
                                placeholder="j@neDoe33"
                                required
                                name="username"
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
                                    label="password"
                                />
                            </FormControl>
                        </div>
                        <div className="modal-action">
                            <Button sx={{ m: 1, width: '25ch' }} onClick={handleFormSubmit} className="Submit">LogIn</Button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </>
    );
}
export default LogIn;