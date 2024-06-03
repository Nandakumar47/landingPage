import React from "react";
import FooterLists from "./FooterLists";
import { ReactComponent as PlayStore } from "./playstore.svg";
import { ReactComponent as AppStore } from "./appStore.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <div className="logo_circle1"></div>
        <div className="logo_circle2"></div>
      </div>
      <div className="footer_innerContainer">
        <FooterLists
          header="Company"
          items={["About", "Privacy", "Privacy & Terms"]}
        />
        <FooterLists
          header="Support"
          items={["Chat with us", "help center", "Feature request"]}
        />
        <FooterLists
          header="Community"
          items={["Twitter", "Facebook", "Discord"]}
        />
        <FooterLists
          header="More"
          items={["Buttons", "Brand assests", "Careers"]}
        />
      </div>
      <div className="footer_downloadOptions">
        <PlayStore />
        <AppStore />
      </div>
    </div>
  );
};

export default Footer;
