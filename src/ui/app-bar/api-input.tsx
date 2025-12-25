import React, { useState } from 'react';
import { Modal, Box, TextField, Tooltip } from '@mui/material';
import {Settings} from '@mui/icons-material';
import { saveEnvVal, getEnvVal } from '../../util/util';
import DatabaseManager from '../../db/database-manager';
import './api-input.scss';
import '../../db/database-manager';


export function ApiInputModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const apiToken = data.get('openai-api');
    const batchSize = data.get('batch-size');
    const dimensionSize = data.get('num-dims');
    // save data into env variables
    saveEnvVal('VITE_OPENAI_API_KEY', apiToken as string);
    DatabaseManager.setBatchSize(batchSize as string);
    DatabaseManager.setDimensionSize(dimensionSize as string);
    handleClose();
  };

  return (
    <div>
      <Tooltip title="設定">
        <button className="api-input-button" onClick={handleOpen}>
              <Settings style={{color: '#aaa'}} />
        </button>
      </Tooltip>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="setting-modal"
        aria-describedby="setting-modal-api-key-and-batch-size"
        className='api-input-modal'
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
          <h4>設定</h4>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="openai-api"
              label="OpenAI APIキーを入力"
              name="openai-api"
              defaultValue={getEnvVal('VITE_OPENAI_API_KEY')}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="batch-size"
              label="生成バッチサイズ"
              defaultValue={DatabaseManager.getBatchSize()}
              name="batch-size"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="num-dims"
              label="次元の数"
              defaultValue={DatabaseManager.getDimensionSize()}
              name="num-dims"
            />
            <p className='note'>
              LuminateはOpenAI APIキーをクッキー、localStorage、サーバーのいずれにも保存しません。
              アプリを開くたびに入力する必要があります。
              ソースコードをダウンロードしてローカルで実行することもできます。
            </p>
            <button type="submit" className='submit-button'>
              保存
            </button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}


