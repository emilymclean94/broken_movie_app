import * as React from 'react';
import {Box, IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl, TextField, Modal, Button} from '@mui/material';
import { VisibilityOff } from '@mui/icons-material';
import { Visibility } from '@mui/icons-material';
import AvatarSelection from './AvatarSelection';
import { useState } from 'react';
import Avatar1 from '../Assets/AvatarImages/Avatar1.png';
import Avatar2 from '../Assets/AvatarImages/Avatar2.png';
import Avatar3 from '../Assets/AvatarImages/Avatar3.png';
import Avatar4 from '../Assets/AvatarImages/Avatar4.png';
import Avatar5 from '../Assets/AvatarImages/Avatar5.png';
import Avatar6 from '../Assets/AvatarImages/Avatar6.png';
import Avatar7 from '../Assets/AvatarImages/Avatar7.png';
import Avatar8 from '../Assets/AvatarImages/Avatar8.png';
import Avatar9 from '../Assets/AvatarImages/Avatar9.png';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';


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


const SignUp = () => {
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [password, setPassword] = useState('');
    const [genre, setGenre] = useState('');
    const avatars = [

    { id: 1, image: Avatar1 },
    { id: 2, image: Avatar2 },
    { id: 3, image: Avatar3 },
    { id: 4, image: Avatar4 },
    { id: 5, image: Avatar5 },
    { id: 6, image: Avatar6 },
    { id: 7, image: Avatar7 },
    { id: 8, image: Avatar8 },
    { id: 9, image: Avatar9 },
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

    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
        firstname: '',
        genre: '',
        bio: '',
        avatar: ''
      });
      const [addUser, { error, data }] = useMutation(ADD_USER);
    
      const handleChange = (event) => {
        const { firstName, username, email, password, bio, genre, avatar, value } = event.target;
    
        setFormState({
          ...formState,
          [firstName]: value,
          [username]: value,
          [email]: value,
          [password]: value,
          [bio]: value,
          [genre]: value,
          [avatar]: value,
        });
      };
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
    
        try {
          const { data } = await addUser({
            variables: { ...formState },
          });
    
          Auth.login(data.addUser.token);
        } catch (e) {
          console.error(e);
        }
      };

    return (
        <div>

            <Button onClick={handleOpen} css={{ color: '#00000' }} >Sign Up</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onClick={handleFormSubmit} onChange={handleChange} className="modal-box">
                        <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <div>
                            <AvatarSelection
                                avatars={avatars}
                                selectedAvatar={selectedAvatar}
                                onAvatarSelect={handleAvatarSelect}
                            />
                        </div>

                        <TextField sx={{ m: 1, width: '25ch' }} label="First Name" id="firstname1" placeholder="JaneDoe" onChange={handleFirstNameChange} required type="firstname" value={firstName} />
                        <TextField sx={{ m: 1, width: '25ch' }} label="Email" value={email} id="email1" placeholder="janedoe@email.com" onChange={handleEmailChange} required type="email" />
                        <TextField label="Username" sx={{ m: 1, width: '25ch' }} value={username} id="username1" placeholder="j@neDoe33" onChange={handleUsernameChange} required type="username" />
                        <FormControl required sx={{ m: 1, width: '25ch' }} onChange={handlePasswordChange} variant="outlined">
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
                        <TextField sx={{ m: 1, width: '30ch' }} label="Favorite movie genre?" value={genre} id="genre1" placeholder="Horror" required onChange={handleGenreChange} type="genre" />
                        <TextField fullWidth sx={{ m: 1 }} label="Bio" className="textarea-sm" value={bio} id="bio" placeholder="Tell us a little about yourself!" onChange={handleBioChange} />
                        <div className="modal-action">
                            <Button sx={{ m: 1, width: '25ch' }}  className="Submit">Sign Up</Button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>

    );
}
export default SignUp;

