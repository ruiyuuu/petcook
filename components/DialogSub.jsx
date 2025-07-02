import React from "react";
import Image from "next/image";

export default function DialogSub({ sub, title, position, color }) {
  return (
    <div className={`title-group ${position}`}>
      {sub && (
        <div className="dialog-subtitle-group">
          <div className="dialog-subtitle">
            <div className="text">{sub}</div>
          </div>
          <Image
            src={
              "https://img.shoplineapp.com/media/image_clips/68328e501ae08d000fb5c45e/original.png?1748143696"
            }
            alt=""
            unoptimized
            width={17}
            height={24}
          />
        </div>
      )}
      <h2 className={`dialog-subtitle-group__title ${color}`}>{title}</h2>
    </div>
  );
}
