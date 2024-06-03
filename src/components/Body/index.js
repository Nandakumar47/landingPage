import React from "react";
import MobilePhone from "./MobilePhone";
import Avatar from "../shared/Avatar";
import UserWithAudio from "../shared/UserWithAudio";
import { ReactComponent as Gift } from "./gift.svg";
import EmojiEmotionsSharpIcon from "@mui/icons-material/EmojiEmotionsSharp";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import Carousel from "../Carousel";
const Body = () => {
  return (
    <section className="body">
      <div className="first_container">
        <div className="header1">
          <span className="header1__subheader1">Stay close to your</span>
          <span className="header1__subheader2">favorite people</span>
        </div>
      </div>
      <div className="second_container">
        <div className="phoneNumber_container">
          <input
            className="phoneNumber_input"
            placeholder="Enter your phone number"
          />
          <button className="phoneNumber_button">Get started</button>
        </div>
      </div>
      <div className="third_container">
        <div className="mobilePhoneContainer">
          <MobilePhone />
        </div>
        <div className="userWithAudio1">
          <UserWithAudio />
        </div>
        <div className="giftContainer">
          <Gift />
          <div className="giftMessage">
            You received
            <br /> a Gift
          </div>
          <div className="giftButton">View gift</div>
        </div>
        <div className="userWithoutAudio">
          <Avatar
            imageWidth="36px"
            imageHeight="36px"
            // containerColor="#a9f3a9s"
            imageUrl="https://s3-alpha-sig.figma.com/img/7bd6/a7df/b0dc1c0bc43a10c83d90e527e0946c03?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ec3TCrEerBhdHlh8djhm8jSwaSK5jMy6husvz47T0dHHZD5rqe0tZ3J21HYF8MtjAYF0G6AkENWitqIqvWoJ-Nt6uH3ZqUqQejrThM1CvKiaKWPwsfmor3JJNSkSjZc5Kcud9hosQn-WlTPIBcmzt8YbiWfKNY9exlH3gdqtG09suOX7y0jbFxmcbnXt1fjH6XMQotecVn6FzgkqcDBJGvuYxez8nLAQodZ-SR7Cin2MSFriABbCaepgy38rvJkABZiEc32a3x-lpn1KhEbH-NjsdCJgQpABP0rDIZ82q1joSlsGmDSa~jnjDX39Sw8X4x5sz-~es1GhmYC4qOxj3A__"
          />
        </div>
        <div className="yellowGradient1"></div>
        <div className="violetGradient"></div>
        <div className="yellowGradient2"></div>
      </div>
      <div className="fourth_container">
        <div className="content_section">
          <div className="smiley">
            <EmojiEmotionsSharpIcon />
          </div>
          <div className="content_header">
            Express yourself
            <br />
            freely
          </div>
          <div className="content_description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            voluptates esse sint maiores enim perferendis vel corporis et
            consequatur incidunt aliquam impedit iusto obcaecati atque placeat
            maxime
          </div>
          <div className="learnMore">
            <button>
              Learn more <EastSharpIcon />
            </button>
          </div>
        </div>
        <div className="image_section">
          <div className="image_section_imageContainer">
            <div className="image_section_imageBg">
              <img
                className="person"
                src="https://s3-alpha-sig.figma.com/img/a958/3ddc/8f862d741130961807f972b30e6b4ff9?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hwegLBqrRxXlhcG3ucqJCyar5EZE0F6vzGNKCDXXfyQGb09s4h8bn7h-ztUH6tM1LMJiU5uUAXT6btuy4wxDEAHrU4~DiaYU0zvSkB8vT52kOedwyIhtYaZckPOqtiS9pP7mB46hugfuPYBuqpu2vg200IDl8b4z~trJHdoyyxDlp5VGCfTDBVBCUUiFMn0GTBb6OubLIQEKQ~xL2lnFVnZSkuwDpugbaCfKoYmC0AZ62p9UShajd5GzLMPApR8dCQ5xfljGX3prHSvN2dPLhoKAuX0vA8kdESn-sOJ6PqCYgnLXeZgFXo1iEW2lXq08dL~7V4rdu2lOt4YrOJQ-GA__"
                alt="personImage"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="fifth_container">
        <div className="fifth_container_mobile_container">
          <div className="fifth_container_mobile">
            <div className="fifth_container_mobileUser_container">
              <Avatar
                imageWidth="36px"
                imageHeight="36px"
                // containerColor="#a9f3a9s"
                imageUrl="https://s3-alpha-sig.figma.com/img/7bd6/a7df/b0dc1c0bc43a10c83d90e527e0946c03?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ec3TCrEerBhdHlh8djhm8jSwaSK5jMy6husvz47T0dHHZD5rqe0tZ3J21HYF8MtjAYF0G6AkENWitqIqvWoJ-Nt6uH3ZqUqQejrThM1CvKiaKWPwsfmor3JJNSkSjZc5Kcud9hosQn-WlTPIBcmzt8YbiWfKNY9exlH3gdqtG09suOX7y0jbFxmcbnXt1fjH6XMQotecVn6FzgkqcDBJGvuYxez8nLAQodZ-SR7Cin2MSFriABbCaepgy38rvJkABZiEc32a3x-lpn1KhEbH-NjsdCJgQpABP0rDIZ82q1joSlsGmDSa~jnjDX39Sw8X4x5sz-~es1GhmYC4qOxj3A__"
              />
              <div className="fifth_container_mobileUser_userName_container">
                <div className="fifth_container_mobileUser_userName">
                  Sara john
                </div>
                <div className="fifth_container_mobileUser_userName_timestamp">
                  2hr ago
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fifth_container_content">
          <div className="fifth_container_icon_container">
            <div className="fifth_container_icon">
              <div></div>
            </div>
          </div>
          <div className="fifth_container_header">
            Create and <br />
            Share
          </div>
          <div className="fifth_container_description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            corrupti vel minus, maxime quos eum est sapiente sunt architecto
            tenetur nemo atque fugit sint iusto, laboriosam et vitae, fugiat
            beatae. Odio libero ducimus, vero totam animi saepe esse accusamus
            voluptate harum voluptates dolor cum perspiciatis natus culpa
            corporis nobis vel!
          </div>
          <div className="fifth_container_button_container">
            <div className="fifth_container_button">
              <button>
                Learn more <EastSharpIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sixth_container">
        <div className="sixth_container_content_section">
          <div className="sixth_container_location_icon">
            <LocationOnSharpIcon />
          </div>
          <div className="sixth_container_header">
            Create and <br />
            Share
          </div>
          <div className="sixth_container_description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque id,
            recusandae beatae mollitia magni, quae provident magnam eligendi
            nihil esse quibusdam quod repellendus eum! Natus, vero dolore. Ab
            quidem debitis velit optio necessitatibus, totam ratione. Vero
            quaerat tenetur quo nobis. Non perspiciatis earum eaque expedita
            quas quam, temporibus accusamus iure.
          </div>
          <div className="sixth_container_button_container">
            <div className="sixth_container_button">
              <button>
                Learn more <EastSharpIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="sixth_container_image_section">
          <img
            className="sixth_container_personImage"
            src="https://s3-alpha-sig.figma.com/img/deb2/0d3e/f0a942e7ab395f03946acb28ff909b07?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C0q5pp1LHwn~RDNoWeqlCo-ou91EIl~LDNOXTwouDdWth7dJzH62OfbuF7rMiX5Zz00FYlTdF7SuE~06oN1Q4Bt24zazbLMNbC-PoCRlwQ8vqT91CM~2tIxeXg2dj1JkwyE5ehrZATsBi5EVInuBOo5WFCle-fw3mFgeR~RWNAmZMeKmhEie983QleX~7f2H9yGs09ym6wCdNbshMOQwhspjClbJRZXGF62GWpUKBSRWuDootc57OJRbdUnCUl2B31gWBYLgKxFmy3NflcyIOMlpwIeGa~~XZE1LqnPRrXdTWX9SQJ3s7bfuu4hlhDSs~p4uSyflkkAQP2DM-ucS2g__"
            alt="man looking mobile"
          />
          <img
            className="sixth_container_mapIcon"
            src="https://s3-alpha-sig.figma.com/img/20d5/42a6/90b5134bd754639f83d74cf5f66ae355?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OkHVTS2oL3BXbmnQWZUmRRcfVCv3To5wujMteN-41Jxo1rDyWCCdv10fWzMO12ewRqJZdBshkpIw9oheLfJ4m7~aRjp6tb1yqrCvIHfjT-vUnMpadpxkg4QiT5sPxzNp930VwvJ1iUiVKKkhY~mf6~7zMOA8sdll4BM8PvyO~u6CL~DnPiIv~at9nVHOUqCxE6AsTUHCwooFWPo4LZEfkUSRT65WgAHu3EGZz25wQTtklfvhwbGLMIU2fMsI77-Wh5JEScSoFpKxGwLUmYzsfcarGbVKKUoJzlYxf-wm3eXmtZHAboj9MgzOl-NfFZk9b015b7VX26ohui5aj50ztg__"
            alt="map icon"
          />
          <div className="sixth_container_person_chat">
            <Avatar
              imageWidth="36px"
              imageHeight="36px"
              // containerColor="#a9f3a9s"
              imageUrl="https://s3-alpha-sig.figma.com/img/7bd6/a7df/b0dc1c0bc43a10c83d90e527e0946c03?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ec3TCrEerBhdHlh8djhm8jSwaSK5jMy6husvz47T0dHHZD5rqe0tZ3J21HYF8MtjAYF0G6AkENWitqIqvWoJ-Nt6uH3ZqUqQejrThM1CvKiaKWPwsfmor3JJNSkSjZc5Kcud9hosQn-WlTPIBcmzt8YbiWfKNY9exlH3gdqtG09suOX7y0jbFxmcbnXt1fjH6XMQotecVn6FzgkqcDBJGvuYxez8nLAQodZ-SR7Cin2MSFriABbCaepgy38rvJkABZiEc32a3x-lpn1KhEbH-NjsdCJgQpABP0rDIZ82q1joSlsGmDSa~jnjDX39Sw8X4x5sz-~es1GhmYC4qOxj3A__"
            />
            <div className="sixth_container_person_chat_message">
              I am here!
            </div>
          </div>
        </div>
      </div>
      <div className="seventh_container">
        <div className="seventh_container_text_section">
          <div className="seventh_container_header">Around 5M+ creators</div>
          <div className="seventh_container_description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut libero
            beatae consectetur corporis, blanditiis
          </div>
        </div>
        <div className="seventh_container_carousel_Section">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Body;
