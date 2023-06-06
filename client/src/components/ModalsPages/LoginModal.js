import React from 'react';
import { Button, Label, TextField, Modal } from 'flowbite';
import{ useState } from 'react';


const LogIn = () => {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('LogIn Successful:');
        // TODO: Redirect to the feed page but need to make sure that is the name route we are using for feed
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

            <TextField label="Your email"
            id="email1"
            defaultValue="janedoe@email.com"
            required
            type="email"
            />
            <TextField label="Username"
            id="username1"
            defaultValue="j@neDoe33"
            required
            type="username"
            />
            <TextField label="Password"
            id="password1"
            defaultValue="********"
            required
            type="password"
            />
    </div>    
    <div className="modal-action">
      {/* if there is a button in form, it will close the modal */}
      <button className="Submit">LogIn</button>
    </div>
</form>
  </Box>
</Modal>
</div>
    );
}
export default LogIn;