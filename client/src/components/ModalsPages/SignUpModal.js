import * as React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

import { Box, IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl, TextField, Modal, Button } from '@mui/material';
import { VisibilityOff } from '@mui/icons-material';
import { Visibility } from '@mui/icons-material';

// import AvatarSelection from './AvatarSelection';

// import Avatar1 from '../Assets/AvatarImages/Avatar1.png';
// import Avatar2 from '../Assets/AvatarImages/Avatar2.png';
// import Avatar3 from '../Assets/AvatarImages/Avatar3.png';
// import Avatar4 from '../Assets/AvatarImages/Avatar4.png';
// import Avatar5 from '../Assets/AvatarImages/Avatar5.png';
// import Avatar6 from '../Assets/AvatarImages/Avatar6.png';
// import Avatar7 from '../Assets/AvatarImages/Avatar7.png';
// import Avatar8 from '../Assets/AvatarImages/Avatar8.png';
// import Avatar9 from '../Assets/AvatarImages/Avatar9.png';



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

    // const [selectedAvatar, setSelectedAvatar] = useState(null);
     // const avatars = [

    //     { id: 1, image: Avatar1 },
    //     { id: 2, image: Avatar2 },
    //     { id: 3, image: Avatar3 },
    //     { id: 4, image: Avatar4 },
    //     { id: 5, image: Avatar5 },
    //     { id: 6, image: Avatar6 },
    //     { id: 7, image: Avatar7 },
    //     { id: 8, image: Avatar8 },
    //     { id: 9, image: Avatar9 },
    //     // creates a 3x3 grid of avatars theoretically
    // ];


    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //? Handling user input in form and reading the value
    const [formState, setFormState] = useState({
        firstname: '',
        email: '',
        username: '',
        password: '',
        // avatar: '',
        genre: '',
        bio: '',
    });


    const [addUser, { error, data }] = useMutation(ADD_USER);

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
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
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <form onSubmit={handleFormSubmit}
                        className="modal-box">

                        <button onClick={handleClose} htmlFor="my-modal-3"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>

                        {/* <div>
                            <AvatarSelection
                                avatars={avatars}
                                selectedAvatar={selectedAvatar}
                                onAvatarSelect={handleAvatarSelect}
                            />
                        </div> */}

                        <TextField sx={{ m: 1, width: '25ch' }}
                            id="firstname1"
                            label="First Name"
                            placeholder="JaneDoe"
                            required
                            name="firstname"
                            value={formState.firstname}
                            onChange={handleChange}
                        />

                        <TextField sx={{ m: 1, width: '25ch' }}
                            id="email1"
                            label="Email"
                            placeholder="janedoe@email.com"
                            required
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                        />

                        <TextField sx={{ m: 1, width: '25ch' }}
                            id="username1"
                            label="Username"
                            placeholder="j@neDoe33"
                            required
                            name="username"
                            value={formState.username}
                            onChange={handleChange}
                        />

                        <FormControl sx={{ m: 1, width: '25ch' }}
                            required
                            onChange={handleChange}
                            variant="outlined">

                            <InputLabel htmlFor="update-password">Password</InputLabel>

                            <OutlinedInput
                                id="update-password"
                                name="password"
                                value={formState.password}
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

                        <TextField sx={{ m: 1, width: '30ch' }}
                            id="genre1"
                            label="Favorite movie genre?"
                            placeholder="Horror"
                            required
                            name="genre"
                            value={formState.genre}
                            onChange={handleChange}
                        />

                        <TextField fullWidth sx={{ m: 1 }}
                            id="bio"
                            className="textarea-sm"
                            label="Bio"
                            placeholder="Tell us a little about yourself!"
                            name="bio"
                            value={formState.bio}
                            onChange={handleChange}
                        />

                        <div className="modal-action">
                            <Button sx={{ m: 1, width: '25ch' }}
                                type="submit">
                                Sign Up
                            </Button>
                        </div>

                    </form>
                </Box>
            </Modal>
        </div>

    );
}
export default SignUp;

