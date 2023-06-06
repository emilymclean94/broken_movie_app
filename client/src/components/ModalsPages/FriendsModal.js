import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'flowbite';

const FriendsModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [friends, setFriends] = useState([]);

  //May not be how we want to use it? I need to look at the model
    useEffect(() => {
        const fetchFriendsData = async () => {
            try {
                const response = await fetch('our api end point or DB query which ever we use');
                const data = await response.json();
                setFriends(data);
            } catch (error) {
                console.error('Error fetching friends data:', error);
            }
        };
        fetchFriendsData();
    }, []);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

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
  <form>
            <ul className="space-y-4">
                {friends.map((friend) => (
                <li key={friend.id} className="flex items-center">
                    <img src={friend.avatar} alt={friend.username} className="w-10 h-10 rounded-full mr-4"/>
                    <a href={`/profile/${friend.username}`} className="text-blue-500 hover:underline">{friend.username}
                    </a>
              </li>
            ))}
          </ul>
          <div className="modal-action">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn">Close</button>
    </div>
    </form>
  </Box>
</Modal>
</div>
  );
};

export default FriendsModal;
