import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";

function Carousel() {
  const containerRef = useRef(null);
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    try {
      const url = "https://gorest.co.in/public/v2/users";
      const result = await fetch(url, {
        method: "GET",
      });
      const response = await result.json();
      setUserDetails(response);
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    const scrollContainer = containerRef.current;

    let scrollAmount = 0;
    const scrollStep = 1; // Speed of the scroll

    const scroll = () => {
      scrollAmount += scrollStep;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);
  return (
    <div className="carousel_container" ref={containerRef}>
      {userDetails?.length
        ? userDetails.map((user) => (
            <Card
              key={user.id}
              name={user.name}
              gender={user.gender}
              status={user.status}
            />
          ))
        : null}
    </div>
  );
}

export default Carousel;
