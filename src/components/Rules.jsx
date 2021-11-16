import React, { useState } from "react";

const Rules = () => {
  const [hide, setHide] = useState(true);

  const handleClick = () => {
    setHide(false);
  };


  const hideModal = () => {
    setHide(true);
  }

  return (
    <div className="modal">
      <button className="modalButton" onClick={handleClick}>
        RULES
      </button>
      <div className="modalPopupDiv" hidden={hide}>
        <div className="modalFix">
          <div className="modalHeader">
            <h2 className="modalHeadline">RULES</h2>
            <img src="/images/icon-close.svg" alt="icon-close"  className="closeIcon" onClick={hideModal} />
          </div>
          <img
            className="modalImg"
            src="/images/image-rules.svg"
            alt="rules"
          />
        </div>
      </div>
    </div>
  );
};

export default Rules;
