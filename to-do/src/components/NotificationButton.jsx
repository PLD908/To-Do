import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NotificationButton = () => {
  const notify = () => {
    toast.success('Notification message!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div>
      <button onClick={notify}>Show Notification</button>
    </div>
  );
};

export default NotificationButton;
