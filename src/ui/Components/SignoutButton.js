import React from 'react';
import Button from '@mui/material/Button';

const SignoutButton = ({ children, ...props }) => {
  return (
    <Button
      style={{
        minWidth: '113px',
        minHeight: '50px',
        borderRadius: '26px',
        boxShadow: 'none',
        backgroundColor:' #FFE4E4',
        
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default  SignoutButton;