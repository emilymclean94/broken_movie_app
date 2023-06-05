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
    <Button onClick={handleModalOpen}>Friends</Button>

    <Modal onClose={handleModalClose} popup size="md" open={isModalOpen}>
        <Modal.Header> My Friends</Modal.Header>
        <Modal.Body>
            <ul className="space-y-4">
                {friends.map((friend) => (
                <li key={friend.id} className="flex items-center">
                    <img src={friend.avatar} alt={friend.username} className="w-10 h-10 rounded-full mr-4"/>
                    <a href={`/profile/${friend.username}`} className="text-blue-500 hover:underline"> 
                    {friend.username}
                    </a>
              </li>
            ))}
          </ul>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FriendsModal;