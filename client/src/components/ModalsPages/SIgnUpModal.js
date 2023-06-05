import React from 'react';
import { Button, Label, TextInput, Textarea, Modal } from 'flowbite';
import AvatarSelection from './AvatarSelection';
import { useHistory } from 'react-router-dom';
import AvatarImages from '../AvatarImages';


const SignUp = () => {
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
    const history = useHistory();

  const handleAvatarSelect = (avatarId) => {
    setSelectedAvatar(avatarId);
  };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Sign Up Successful:', selectedAvatar);
        selectedAvatar = null;
        // TODO: Redirect to the feed page but need to make sure that is the name route we are using for feed
        history.push('/feed'); 
    }
       
    


    return (
        <div>
        <Button onClick={onClick}>
        Sign Up
        </Button>

<Modal
onClose={onClose}
popup
size="md">
        <Modal.Header />
        <Modal.Body>
<div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign Up
            </h3>
        //*AVATAR SELECTION 
    <div> 
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
         htmlFor="firstname1"
        value="Your first name"
        />
        </div>
        <TextInput
        icon={fine-emailletter-icon}
        id="firstname1"
        placeholder="JaneDoe"
        required
        iconRight={decide-where-we-want-icon}
        type="email"
        />
    </div>
                                        //*LAST NAME    
        <div>
            <div className="mb-2 block">
            <Label
            htmlFor="email1"
            value="Your email"
            />
            </div>
        <TextInput
        icon={fine-emailletter-icon}
        id="email1"
        placeholder="janedoe@email.com"
        required
        iconRight={decide-where-we-want-icon}
        type="email"
        />
        </div>
                                        //*EMAIL
            <div>
            <div className="mb-2 block">
            <Label
            htmlFor="username1"
            value="Your username"
            />
            </div>
            <TextInput
            id="username1"
            placeholder="j@neDoe33"
            required
            type="username"
            />
            </div>
                                    //*PASSWORD
    <div>
        <div className="mb-2 block">
            <Label
            htmlFor="password1"
            value="Your password"
            />
        </div>
            <TextInput
            id="password1"
            placeholder="********"
            required
            type="password"
            />
    </div>
                                    //*FAVORITE GENRE
    <div>
        <div className="mb-2 block">
            <Label
            htmlFor="genre1"
            value="Your favorite genre!"
            />
        </div>
            <TextInput
            id="genre1"
            placeholder="Horror"
            required
            type="genre"
            />
    </div>
                                    //*BIO
    <div>
        <div className="mb-2 block">
            <Label
            htmlFor="bio"
            value="Your bio" 
//take out value to get rid of the label on the form
            />
        </div>
            <Textarea
            id="bio"
            placeholder="Tell us a little about yourself!"
            required
            rows={4}
            />
    </div>
        <Button type="submit">
        Sign Up
        </Button>
</form>
    </div>
    </Modal.Body>
    </Modal>
</div>
    );
}
export default SignUp;

