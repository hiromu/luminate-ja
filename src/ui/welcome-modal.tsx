// a modal that shows up on the first visit to the site
// and prompts the user to enter their open ai api key
import './welcome-modal.scss';
import React, { useState } from 'react';
import { Modal, Box, TextField} from '@mui/material';
import { saveEnvVal } from '../util/util';
import * as bootstrap from 'bootstrap';

export function WelcomeModal( {updateApiKey}){
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
    if (reason === 'escapeKeyDown') {
      setOpen(false);
      // use the toast to notify the user to set up the API key
      let toast = new bootstrap.Toast(document.getElementById('fav-toast'));
      var msg = document.getElementById('toast-text');
      if (msg) {
        msg.textContent =  "Luminateを使用するにはOpenAI APIキーの設定が必要です。右上の設定アイコンをクリックして設定してください。";
        toast.show();
      }
    }
  }

  const handleSubmit = (event,reason) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const apiToken = data.get('openai-api');
    // save data into env variables
    saveEnvVal('VITE_OPENAI_API_KEY', apiToken as string);
    handleClose(event,reason);
    updateApiKey(apiToken as string);
  };

  return (
    <div className="welcome-modal">
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
            width: 600,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 3
          }}
        >
          <h4>Luminateへようこそ 👋</h4>
          <p>
            LuminateはGPT 3.5を利用した人間とAIのテキストベース共同創作のための研究プロトタイプです。
            まず、下のテキストフィールドにOpenAI APIキーを入力してください。
          </p>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="openai-api"
              label="OpenAI APIキーを入力"
              name="openai-api"
              autoFocus
            />
            <p className='note'>
              OpenAI APIキーは<a href="https://platform.openai.com/account/api-keys" target="_blank">ユーザー設定</a>から取得できます
            </p>
            <p className='note'>
              デザインスペースで1つの応答を生成するコストは約$0.007です。デフォルトでは、Luminateは一度に20の応答を生成し、約$0.14のコストがかかります。
              バッチサイズは右上の設定 <img src="settings-menu.png" alt="設定" style={{width: '30px', height: '30px'}}/> から変更できます。
              コストの詳細については<a href="https://openai.com/pricing" target="_blank">価格ページ</a>をご覧ください
            </p>
            <p className='note'>
              LuminateはOpenAI APIキーをクッキー、localStorage、サーバーのいずれにも保存しません。
              アプリを開くたびに入力する必要があります。
              ソースコードをダウンロードしてローカルで実行することもできます。
            </p>
            <button type="submit" className='submit-button'>
              Luminateを開始 <img src="/luminate-logo.svg" style={{maxHeight: '24px'}} alt="arrow-right" />
            </button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}