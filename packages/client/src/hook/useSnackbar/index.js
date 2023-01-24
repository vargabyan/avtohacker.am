import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function useCustomizedSnackbars(status, messages) {
  const [open, setOpen] = useState(false);

  const handleSnackbarsClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return {
    snackbars: (
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={status} sx={{ width: '100%' }}>
            {messages}
          </Alert>
        </Snackbar>
      </Stack>
    ),
    handleSnackbarsClick,
  };
}
