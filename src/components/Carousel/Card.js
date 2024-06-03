import React from "react";
function capitalizeFirstLetter(string) {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function Card(props) {
  const { name, gender, status } = props;
  console.log(props);
  return (
    <div
      className="card_container"
      style={{
        background: `url("https://xsgames.co/randomusers/avatar.php?g=${gender}&random=${Math.random()}") center center / cover no-repeat`,
      }}
    >
      <div className="card_container_status">
        <span
          className="card_container_indicator"
          style={{ backgroundColor: status === "inactive" ? "red" : "green" }}
        ></span>
        <p>{capitalizeFirstLetter(status)}</p>
      </div>
      <div className="card_container_userName">
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Card;
