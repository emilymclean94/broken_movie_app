import React from 'react';
import { Button, Label, TextInput, Modal, Textarea } from 'flowbite';
import{ useState } from 'react';
import AvatarSelection from './AvatarSelection';

const UpdateProfile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAvatar, setSelectedAvatar] = useState(null);

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
    const handleAvatarSelect = (avatarId) => {
        setSelectedAvatar(avatarId);
    };
    const handleModalOpen = () => {
        setIsModalOpen(true);
    };
    const handleModalClose = () => {
        setIsModalOpen(false);
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Update Successful:');
        handleModalClose();
    }

    return (
        <div>
        <Button onClick={handleModalOpen}>
        Update Profile
        </Button>

<Modal
onClose={handleModalClose}
popup
size="md"
open={isModalOpen}>
        <Modal.Header />
        <Modal.Body>
<div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Update!
            </h3>
                                    //*AVATAR SELECTION 
    <div> //TODO check out how to show and update avatar
    <AvatarSelection
        avatars={avatars}
        selectedAvatar={selectedAvatar}
        onAvatarSelect={handleAvatarSelect}
    />
    </div>
<form onSubmit={handleFormSubmit}>
                                    //*FIRST NAME
    <div> 
        <div className="mb-2 block">
        <Label
         htmlFor="nameupdate"
        value="Update your first name"
        />
        </div>
        <TextInput
        icon={fine-emailletter-icon}
        id="nameupdate"
        placeholder="JaneDoe"
        required
        iconRight={decide-where-we-want-icon}
        type="text"
        />
    </div>
                                        //*LAST NAME    
        <div>
            <div className="mb-2 block">
            <Label
            htmlFor="emailupdate"
            value="Update your email"
            />
            </div>
        <TextInput
        icon={fine-emailletter-icon}
        id="emailupdate"
        //TODO: have it be the infor from their profile
        //! placeholder=${...user.email} 
        //?MAYBE??
        required
        iconRight={decide-where-we-want-icon}
        type="email"
        />
        </div>
                                        //*EMAIL
            <div>
            <div className="mb-2 block">
            <Label
            htmlFor="updateusername"
            value="Update your username"
            />
            </div>
            <TextInput
            id="updateusername"
            //TODO: have it be the infor from their profile
            required
            type="text"
            />
            </div>
                                    //TODO: figure out how to update password
    <div>
        <div className="mb-2 block">
            <Label
            htmlFor="updatepassword"
            value="Update your password"
            />
        </div>
            <TextInput
            id="updatepassword"
            placeholder="********"
            required
            type="text"
            />
    </div>
                                    //*FAVORITE GENRE
    <div>
        <div className="mb-2 block">
            <Label
            htmlFor="updategenre"
            value="Update your favorite genre!"
            />
        </div>
            <TextInput
            id="updategenre"
            //TODO: have it be the infor from their profile
            required
            type="genre"
            />
    </div>
                                    //*BIO
    <div>
        <div className="mb-2 block">
            <Label
            htmlFor="updatebio"
            value="Update your bio" 
//take out value to get rid of the label on the form
            />
        </div>
            <Textarea
            id="updatebio"
            //TODO: have it be the infor from their profile
            required
            rows={4}
            />
    </div>
        <Button type="submit">
        Save
        </Button>
</form>
    </div>
    </Modal.Body>
    </Modal>
</div>
    )
}

export default UpdateProfile;