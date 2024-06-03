import React from "react";

const Avatar = (props) => {
  const {
    imageUrl,
    imageWidth,
    imageHeight,
    containerHeight,
    containerWidth,
    containerColor,
  } = props;
  return (
    <div
      className="imageContainer"
      style={{
        width: containerWidth,
        height: containerHeight,
        background: containerColor,
      }}
    >
      <img
        className="userImage"
        alt="userImage"
        aria-label="User image"
        style={{ width: imageWidth, height: imageHeight, borderRadius: "100%" }}
        src={imageUrl}
      />
    </div>
  );
};

export default Avatar;
