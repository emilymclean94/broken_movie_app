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
import { useState } from 'react';
import AvatarSelection from './AvatarSelection';

const UpdateProfile = () => {
    const [showPassword, setShowPassword] = React.useState(false);
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
        const handleClickShowPassword = () => setShowPassword((show) => !show);
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true); 
        const handleClose = () => setOpen(false);
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
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Update Successful:');
        handleModalClose();
    }
    useEffect(() => {
        const fetchUserData = async () => {
            try{
            const response = await fetch('our db or api for user info');
            const data = await response.json();
            console.log(data);
            }  catch (error) {
                console.error('Error fetching profile data:', error);
            }
        }; fetchUserData();
    }, []);

    return (
        <div>
<Button onClick={handleOpen}>Open modal</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box >
<form onSubmit={handleFormSubmit} className="modal-box">
    <h3>Update!</h3>
<button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//*AVATAR SELECTION     
    <div> //TODO check out how to show and update avatar
    <AvatarSelection
        avatars={avatars}
        selectedAvatar={selectedAvatar}
        onAvatarSelect={handleAvatarSelect}
    />
    </div>
//*FIRST NAME
        <TextField label="Update your first name" value={firstName} id="name" placeholder={`${user.firstname}`} onChange={handleFirstNameChange}/>
//*LAST NAME    
            <TextField label="Update your email" value={email} id="email" placeholder={`${user.email}`} onChange={handleEmailChange} type="email"/>
//*EMAIL
            <TextField value="Update your username" value={username} id="username" placeholder={`${user.username}`} onChange={handleUsernameChange} type="text"/>
            
//*PASSWORD
            {/* <TextField label="Update your password" value={password} id="password" onChange={handlePasswordChange} placeholder="********" type="text"/> */}
     <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="update-password">Password</InputLabel>
            <OutlinedInput
            id="update-password"
            value={password}
            onChange={handlePasswordChange} 
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
            
//*FAVORITE GENRE
            <TextField label="Update favorite genre" value={genre} id="genre" placeholder={`${user.genre}`} onChange={handleGenreChange} type="genre"/>
//*BIO
            <TextField label="Update your bio" value={bio} id="bio" onChange={handleBioChange} placeholder={`${user.bio}`}/>
        <div className="modal-action">
      <button className="Submit">Save</button>
    </div>
</form>
  </Box>
</Modal>
</div>
    )
}

export default UpdateProfile;