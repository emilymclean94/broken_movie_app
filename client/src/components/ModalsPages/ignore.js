import React from 'react';

const AvatarSelection = ({ avatars, selectedAvatar, onAvatarSelect }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="grid grid-cols-3 gap-3">
      {avatars.map((avatar) => (
        <div
          key={avatar.id}
          className={`p-2 rounded-full ${
            selectedAvatar === avatar.id ? 'bg-blue-500' : 'bg-gray-200' //if it is selected it is blue if it is not it is grey may take out
          }`}
          onClick={() => onAvatarSelect(avatar.id)}
        >
          <img
            src={avatar.image}
            alt={`Avatar ${avatar.id}`}
            className="h-12 w-12 rounded-full"
          />
        </div>
      ))}
    </div>
  );
};

export default AvatarSelection;