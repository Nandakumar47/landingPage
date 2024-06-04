import React from "react";
import SearchBar from "./SearchBar";
import Avatar from "../shared/Avatar";
const NavBar = (props) => {
  const { isAdmin } = props;
  return (
    <nav>
      <div className="navbar_firstContainer">
        <div className="logo">
          <div className="logo_circle1"></div>
          <div className="logo_circle2"></div>
        </div>
        <ul className="links">
          <li>
            <a href="#features">Home</a>
          </li>
          <li>
            <a href="#about">Features</a>
          </li>
          <li>
            <a href="#launch">Explore creators</a>
          </li>
          <li>
            <a href="#signup">FAQ</a>
          </li>
        </ul>
      </div>
      {!isAdmin ? (
        <div className="navbar_secondContainer">
          <SearchBar />
          <button aria-label="Button to sign in" className="secondary_button">
            Sign in
          </button>
          <button aria-label="Button to sign up" className="primary_button">
            Sign up
          </button>
        </div>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <p>Admin</p>
          <Avatar
            imageWidth="32px"
            imageHeight="32px"
            // containerColor="#a9f3a9s"
            imageUrl="https://s3-alpha-sig.figma.com/img/59a5/7acb/59fb42a6bc646831c0d45696cc92eb2d?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zv6Su2mUh3qumraZy1lFKm0QRjOL2sESuPYjWvWoe~6i8qrXButQEiwoG4lSdRw5~L1n7Yxha-HFy9LF1g9KkT82X2ZLbmUVewSatj5sD9kW2n~fERztbZ9EJpUrcqBOGztm~sa4RK49i~inMha8NleR3Sn23vHrT5MQVXxVXNi5fHOLD65160KbdHSHwzWcnpBPs-Aihi00zKLs50am8YVj5QMJhtODqHm3WwViwhvY~LYDdYbmKVCqc6~i0xnqKVjbz7nv6pjxhDK51ZKtBeGbc139jqk9IthuPksAT2GrlFSt84SWyBiiQbvH8lXamPxFfAi~69RsPGRdkrQrOw__"
          />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
