import React, { useState, useEffect } from 'react';


import AvatarSelection from './AvatarSelection';

const UpdateProfile = () => {

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
  <Box sx={style}>
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
    <div> 
        <div className="mb-2 block">
        <Label htmlFor="name" value="Update your first name"/>
        </div>
        <TextInput value={firstName} icon={fine-emailletter-icon} id="name" placeholder={`${user.firstname}`} onChange={handleFirstNameChange} iconRight={decide-where-we-want-icon} type="text"/>
    </div>
//*LAST NAME    
        <div>
            <div className="mb-2 block">
            <Label htmlFor="email" value="Update your email"/>
            </div>
            <TextInput value={email} icon={fine-emailletter-icon} id="email" placeholder={`${user.email}`} onChange={handleEmailChange} iconRight={decide-where-we-want-icon} type="email"/>
        </div>
//*EMAIL
        <div>
            <div className="mb-2 block">
            <Label htmlFor="username" value="Update your username"/>
            </div>
            <TextInput value={username} id="username" placeholder={`${user.username}`} onChange={handleUsernameChange} type="text"/>
        </div>
        <div>
            <div className="mb-2 block">
            <Label htmlFor="password" value="Update your password"/>
            </div>
            <TextInput value={password} id="password" onChange={handlePasswordChange} placeholder="********" type="text"/>
        </div>
//*FAVORITE GENRE
        <div>
            <div className="mb-2 block">
            <Label htmlFor="genre" value="Update your favorite genre!"/>
            </div>
            <TextInput value={genre} id="genre" placeholder={`${user.genre}`} onChange={handleGenreChange} type="genre"/>
        </div>
//*BIO
        <div>
            <div className="mb-2 block">
            <Label htmlFor="bio" value="Update your bio" />
            {/* take out value to get rid of the label on the form */}
            </div>
            <Textarea value={bio} id="bio" onChange={handleBioChange} placeholder={`${user.bio}`} rows={4}/>
        </div>
        <div className="modal-action">
      {/* if there is a button in form, it will close the modal */}
      <button className="Submit">Save</button>
    </div>
</form>
  </Box>
</Modal>
</div>
    )
}

export default UpdateProfile;