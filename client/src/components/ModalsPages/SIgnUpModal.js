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

import AvatarSelection from './AvatarSelection';
import { useState } from 'react';


const SignUp = () => {
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [password, setPassword] = useState('');
    const [genre, setGenre] = useState('');
    const avatars = [
    { id: 1, image: 'Avatar1.png' },
    { id: 2, image: 'Avatar2.png' },
    { id: 3, image: 'Avatar3.png' },
    { id: 4, image: 'Avatar4.png' },
    { id: 5, image: 'Avatar5.png' },
    { id: 6, image: 'Avatar6.png' },
    { id: 7, image: 'Avatar7.png' },
    { id: 8, image: 'Avatar8.png' },
    { id: 9, image: 'Avatar9.png' },
    // creates a 3x3 grid of avatars theoretically
    ];
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };


    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    
    const handleGenreChange = (event) => {
        setGenre(event.target.value);
    };
    
    const handleBioChange = (event) => {
        setBio(event.target.value);
    };
    const handleAvatarSelect = (avatarId) => {
    setSelectedAvatar(avatarId);
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true); 
    const handleClose = () => setOpen(false);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Sign Up Successful:', selectedAvatar);
        selectedAvatar = null;
        // TODO: Redirect to the feed page but need to make sure that is the name route we are using for feed
    }

    return (
        <div>
<Button onClick={handleOpen} css={{color:'#00000'}} >Open modal</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
<form onSubmit={handleFormSubmit} className="modal-box">
<button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
<div> 
    <AvatarSelection
        avatars={avatars}
        selectedAvatar={selectedAvatar}
        onAvatarSelect={handleAvatarSelect}
    />
    </div>

        <TextField sx={{ m: 1, width: '25ch' }} label="First Name" id="firstname1" placeholder="JaneDoe" onChange={handleFirstNameChange} required type="firstname" value={firstName}/> 
            <TextField sx={{ m: 1, width: '25ch' }} label="Email" value={email} id="email1" placeholder="janedoe@email.com" onChange={handleEmailChange} required type="email"/>
        <TextField label="Username" sx={{ m: 1, width: '25ch' }} value={username} id="username1" placeholder="j@neDoe33" onChange={handleUsernameChange} required type="username"/>
            <FormControl required sx={{ m: 1, width: '25ch' }}onChange={handlePasswordChange} variant="outlined">
            <InputLabel htmlFor="update-password">Password</InputLabel>
            <OutlinedInput
            id="update-password"
            value={password}
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
            <TextField sx={{ m: 1, width: '30ch'}}label="Favorite movie genre?" value={genre} id="genre1" placeholder="Horror" required onChange={handleGenreChange} type="genre" />
        <TextField fullWidth sx={{ m: 1}} label="Bio" className="textarea-sm" value={bio} id="bio" placeholder="Tell us a little about yourself!" onChange={handleBioChange} />
    <div className="modal-action">
      <Button sx={{ m: 1, width: '25ch' }} className="Submit">Sign Up</Button>
    </div>
</form>
  </Box>
</Modal>
</div>
    );
}
export default SignUp;

