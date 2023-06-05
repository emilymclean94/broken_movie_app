import React from 'react';
import { Button, Label, TextInput, Modal } from 'flowbite';


const LogIn = () => {
    return (
        <div>
        <Button onClick={onClick}>
        Sign Up
        </Button>

        <Modal onClose={onClose}
        popup
        size="md">
        <Modal.Header />
        <Modal.Body>
<div className="space-y-6">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          Sign Up
        </h3>
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
</div>
    <Button type="submit">
        LogIn
    </Button>
</Modal.Body>
</Modal>
</div>
    );
}
export default LogIn;