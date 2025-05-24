import React from "react";

export default function DialogSub({ sub, title, position, color }) {
  return (
    <div className={`title-group ${position}`}>
      <div className="dialog-subtitle-group">
        <div className="dialog-subtitle">
          <div className="text" data-storke={sub}>
            {sub}
          </div>
        </div>
        <svg
          width="17"
          height="24"
          viewBox="0 0 17 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 24L0 0V21.5L17 24Z" fill="#452F1D" />
        </svg>
      </div>
      <div
        className={`dialog-subtitle-group__title ${color}`}
        data-title={title}
      >
        {title}
      </div>
    </div>
  );
}
