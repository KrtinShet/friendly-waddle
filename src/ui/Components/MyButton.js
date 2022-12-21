import React from 'react';
import Button from '@mui/material/Button';

const MyButton = ({ children, ...props }) => {
  return (
    <Button
      style={{
        minWidth: '271px',
        minHeight: '57px',
        borderRadius: '15px',
        boxShadow: 'none',
        
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default MyButton;