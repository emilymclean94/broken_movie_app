import React from 'react';
import { Button, Label, TextInput, Modal } from 'flowbite';
import { useHistory } from 'react-router-dom';
import{ useState } from 'react';


const LogIn = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const history = useHistory();

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };
    
    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('LogIn Successful:');
        // TODO: Redirect to the feed page but need to make sure that is the name route we are using for feed
        history.push('/feed'); 
    }


    return (
        <div>
        <Button onClick={handleModalOpen}>
        LogIn
        </Button>

        <Modal onClose={handleModalClose}
        popup
        size="md"
        open={isModalOpen}>
        <Modal.Header />
        <Modal.Body>
<div className="space-y-6">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          LogIn
        </h3>
        <form onSubmit={handleFormSubmit}>
    <div>
        <div className="mb-2 block">
            <Label
            htmlFor="email1"
            value="Your email"
            />
        </div>
            <TextInput
            icon={find-emailletter-icon}
            id="email1"
            placeholder="janedoe@email.com"
            required
            iconRight={decide-where-we-want-icon}
            type="email"
            />
    </div>
    <div>
        <div className="mb-2 block">
            <Label
            htmlFor="username1"
            value="Username"
            />
        </div>
            <TextInput
            id="username1"
            placeholder="j@neDoe33"
            required
            type="username"
            />
    </div>
    <div>
        <div className="mb-2 block">
            <Label
            htmlFor="password1"
            value="Password"
            />
        </div>
            <TextInput
            id="password1"
            placeholder="********"
            required
            type="password"
            />
    </div>    
    <Button type="submit">
        LogIn
    </Button>
    </form>
</div>
</Modal.Body>
</Modal>
</div>
    );
}
export default LogIn;