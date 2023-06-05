import React from 'react';
import { Button, Label, TextInput, Textarea,Modal } from 'flowbite';

const SignUp = () => {
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
                icon={decide-where-we-want-icon}
                type="email"
                />
    </div>
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
            icon={decide-where-we-want-icon}
            type="email"
            />
    </div>
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
    <div>
        <div className="mb-2 block">
            <Label
            htmlFor="bio"
            value="Your bio" 
                //   take out value to get rid of the label on the form
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
  </div>
  </Modal.Body>
</Modal>
</div>
    );
}
export default SignUp;