import React, { useState } from "react";
import Modal from "./modal";
import "./index.css";

const modal = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal body={<div>CustomizedBody</div>} onClose={onClose} />
      )}
    </div>
  );
};

export default modal;
