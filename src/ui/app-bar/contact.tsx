import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, Tooltip } from '@mui/material';
import {SupportAgent} from '@mui/icons-material';
import './contact.scss';

export function ContactModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    console.log('open');
  }
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Tooltip title="お問い合わせ">
        <button className="contact-button" onClick={handleOpen}>
              <SupportAgent style={{color: '#aaa'}} />
        </button>
      </Tooltip>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="contact-modal"
        aria-describedby="contact-modal-api-key-and-batch-size"
        className='contact-modal'
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 3
          }}
        >
          <h4>お問い合わせ</h4>
          <p className='note'>
            ご質問、ご意見、ご要望がございましたら、
            <a href="mailto:luminate.system@gmail.com"> luminate.system@gmail.com</a> までお気軽にお問い合わせください。
          </p>
        </Box>
      </Modal>
    </div>
  );
}