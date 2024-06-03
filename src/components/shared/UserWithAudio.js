import React from "react";
import Avatar from "./Avatar";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
const UserWithAudio = () => {
  return (
    <div className="userWithAudio">
      <Avatar
        imageWidth="36px"
        imageHeight="36px"
        containerColor="#a9f3a9s"
        imageUrl="https://s3-alpha-sig.figma.com/img/7bd6/a7df/b0dc1c0bc43a10c83d90e527e0946c03?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ec3TCrEerBhdHlh8djhm8jSwaSK5jMy6husvz47T0dHHZD5rqe0tZ3J21HYF8MtjAYF0G6AkENWitqIqvWoJ-Nt6uH3ZqUqQejrThM1CvKiaKWPwsfmor3JJNSkSjZc5Kcud9hosQn-WlTPIBcmzt8YbiWfKNY9exlH3gdqtG09suOX7y0jbFxmcbnXt1fjH6XMQotecVn6FzgkqcDBJGvuYxez8nLAQodZ-SR7Cin2MSFriABbCaepgy38rvJkABZiEc32a3x-lpn1KhEbH-NjsdCJgQpABP0rDIZ82q1joSlsGmDSa~jnjDX39Sw8X4x5sz-~es1GhmYC4qOxj3A__"
      />
      <div className="audioContainer">
        <PlayArrowIcon />
        <div className="progressBar">
          <div className="playedProgress"></div>
          <div className="unPlayedProgress"></div>
        </div>
        <div className="playTime">0:16</div>
      </div>
    </div>
  );
};

export default UserWithAudio;
