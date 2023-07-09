import React, { useState } from 'react';
import '../modal/profile-modal.scss'
const ProfileModal = (props: any) => {
  const { closeModal } = props;
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <p>모달 내용</p>
      </div>
    </div>
  );
};

export default ProfileModal;
