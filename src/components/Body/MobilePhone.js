import React from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Avatar from "../shared/Avatar";
const heights = [
  20, 40, 60, 80, 100, 80, 60, 40, 20, 40, 60, 80, 100, 80, 60, 40, 20, 40, 60,
  80,
];
const MobilePhone = () => {
  return (
    <div className="phone_container">
      <div className="userContainer">
        <Avatar
          imageUrl="https://s3-alpha-sig.figma.com/img/7bd6/a7df/b0dc1c0bc43a10c83d90e527e0946c03?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ec3TCrEerBhdHlh8djhm8jSwaSK5jMy6husvz47T0dHHZD5rqe0tZ3J21HYF8MtjAYF0G6AkENWitqIqvWoJ-Nt6uH3ZqUqQejrThM1CvKiaKWPwsfmor3JJNSkSjZc5Kcud9hosQn-WlTPIBcmzt8YbiWfKNY9exlH3gdqtG09suOX7y0jbFxmcbnXt1fjH6XMQotecVn6FzgkqcDBJGvuYxez8nLAQodZ-SR7Cin2MSFriABbCaepgy38rvJkABZiEc32a3x-lpn1KhEbH-NjsdCJgQpABP0rDIZ82q1joSlsGmDSa~jnjDX39Sw8X4x5sz-~es1GhmYC4qOxj3A__"
          imageWidth="25px"
          imageHeight="25px"
        />
        <div className="nameAndStatus">
          <div className="name">Sara John</div>
          <div className="status">Active now</div>
        </div>
      </div>
      <div className="firstChat">
        <div className="firstChat_text">
          <p> Yeah sure! get him too</p>
        </div>
        <div className="firstChat_timeStamp">
          <p>12:20PM</p>
        </div>
      </div>
      <div className="secondChat">
        <div className="secondChat_text">
          <p> Yeah sure! get him too</p>
        </div>
        <div className="secondChat_timeStamp">
          <p>12:20PM</p>
        </div>
      </div>
      <div className="thirdChat">
        <div className="thirdChat_audio">
          <PlayCircleFilledIcon />
          <div className="sound-wave">
            {heights.map((height, index) => (
              <div
                key={index}
                className="bar"
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
        </div>
        <div className="thirdChat_timeStamp">
          <p>12:20PM</p>
        </div>
      </div>
      <div className="bagImage_container">
        <img
          alt="bagImage"
          className="bagImage"
          aria-label="Bag Image"
          src="https://s3-alpha-sig.figma.com/img/eabf/3138/8d6a4e94ccc69168521be958a06a9255?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k7D5gBPN7AlayvMNcy4HMKzYZxJjjscTtmqeTqh8hxlhOjM5JgtF3LnPxYReQ62lrUEVJhD4Poh40jonsmaJYiJ2Uk7OHUp85QgWqnKobZT-amlxb2sQ0Jc28xPW0tquCbXaOj~C8Pwdg0DaUZRjk4OQpOXDoa-ix3ZeDJ1otNhC6qL4DjLdmJqd8RtcDVYcSdlIYENUXnIJP66R4V7x70HBCxhEfrhIuf2URESBmBU4MikWWNAOunb-H7Ub5BGKKonqSFuhQ2CJy-tY2TyiFE40tAgJygOOdAronB3EoQLcs2r185OoGjAte4pOdqCXDhwr06aacgrdbPQSszlT4g__"
        />
      </div>
    </div>
  );
};

export default MobilePhone;
