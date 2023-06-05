import React from 'react';
import { Button, Label, TextInput, Modal } from 'flowbite';

import{ useState } from 'react';

const Friends = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleModalOpen = () => {
        setIsModalOpen(true);
    };
    
    const handleModalClose = () => {
        setIsModalOpen(false);
    };


    return (
        <div>need to do a map of friends</div>
    )
}

export default Friends;