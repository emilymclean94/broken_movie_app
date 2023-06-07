import React, { useState } from 'react';
import { Button, Menu, MenuItem,Avatar } from '@mui/material';
import './Avatar.css';
import { StyledEngineProvider } from '@mui/material/styles';


const AvatarSelection = ({ avatars, selectedAvatar, onAvatarSelect }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleAvatarSelection = (avatarId) => {
    onAvatarSelect(avatarId);
    handleCloseMenu();
  };

  return (
    <StyledEngineProvider injectFirst>
      <Button aria-controls="avatar-menu" aria-haspopup="true" onClick={handleOpenMenu}>
        Select Avatar
      </Button>
      <Menu id="avatar-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
        {avatars.map((avatar) => (
          <MenuItem
            key={avatar.id}
            onClick={() => handleAvatarSelection(avatar.id)}
            selected={selectedAvatar === avatar.id}
            className="avatar-menu-item"
          >
              <img src={avatar.image} alt={`Avatar ${avatar.id}`} className='avatar-picture' sx={{height: 50, width:50,}}/>
          </MenuItem>
        ))}
      </Menu>
      <Avatar  sx={{ width: 200, height: 200 }}>
        {selectedAvatar && (
          <img src={avatars.find((avatar) => avatar.id === selectedAvatar)?.image} className='selected-avatar'alt="Selected" />
        )}
      </Avatar>
      </StyledEngineProvider>
  );
};

export default AvatarSelection;