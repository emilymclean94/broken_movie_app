import React from 'react';

import AvatarSelection from './AvatarSelection';
import { useHistory } from 'react-router-dom';
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
    const history = useHistory();

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
        console.log('Sign Up Successful:', selectedAvatar);
        selectedAvatar = null;
        // TODO: Redirect to the feed page but need to make sure that is the name route we are using for feed
        history.push('/feed'); 
        handleModalClose();
    }

    return (
        <div>
<Button onClick={handleOpen}>Open modal</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
<form onSubmit={handleFormSubmit} className="modal-box">
<button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
<div> 
    <AvatarSelection
        avatars={avatars}
        selectedAvatar={selectedAvatar}
        onAvatarSelect={handleAvatarSelect}
    />
    </div>
//*FIRST NAME

        <TextField label="First Name" icon={fine-person-icon} id="firstname1" defaultValue="JaneDoe" onChange={handleFirstNameChange} required type="firstname" value={firstName}/>
 
//*EMAIL 

            <TextField label="Email" value={email} icon={fine-emailletter-icon} id="email1" defaultValue="janedoe@email.com" onChange={handleEmailChange} required type="email"/>

//*USERNAME

        <TextField label="Username" value={username} id="username1" defaultValue="j@neDoe33" onChange={handleUsernameChange} required type="username"/>

//*PASSWORD


            <TextField label="Password" value={password} id="password1" defaultValue="********" onChange={handlePasswordChange} required type="password"/>

//*FAVORITE GENRE

            <TextField label="Favorite movie genre?" value={genre} id="genre1" defaultValue="Horror" required onChange={handleGenreChange} type="genre" />
  
//*BIO
            <Textarea label="Bio" className="textarea-sm" value={bio} id="bio" defaultValue="Tell us a little about yourself!" onChange={handleBioChange} required rows={4}/>
    <div className="modal-action">
      {/* if there is a button in form, it will close the modal */}
      <button className="Submit">Sign Up</button>
    </div>
</form>
  </Box>
</Modal>
</div>
    );
}
export default SignUp;

