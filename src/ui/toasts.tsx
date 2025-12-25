import React from 'react';

export const ToastContainer = (favtext = "お気に入りにテキストを追加しました", errortext = "最大2次元まで") => {
  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3" id="toast-container">
      {/* Favorite toast */}
      <div id="fav-toast" className="toast align-items-center text-bg-secondary border-0" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="d-flex">
          <div className="toast-body" id="toast-text">
          お気に入りにテキストを追加しました
          </div>
          <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="閉じる"></button>
        </div>
      </div>
      {/* Error toast */}
      <div id="error-toast" className="toast align-items-center text-bg-danger border-0" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="d-flex">
          <div className="toast-body" id="error-toast-text">
          最大2次元まで
          </div>
          <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="閉じる"></button>
        </div>
      </div>
    </div>
  );
};

export default ToastContainer;
