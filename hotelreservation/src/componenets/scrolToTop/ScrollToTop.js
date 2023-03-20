import React, { useState, useEffect } from "react";
import NavigationIcon from "@mui/icons-material/Navigation";
import { Button, Typography } from "@mui/material";
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;

      if (scrollTop > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Button
        sx={{ borderRadius: "15px", backgroundColor: "greenyellow" }}
        onClick={handleClick}
        style={{
          visibility: isVisible ? "visible" : "hidden",
          position: "fixed",
          bottom: "20px",
          right: "20px",
        }}
      >
        <NavigationIcon
          sx={{ color: "black", width: 40, height: 40 }}
        ></NavigationIcon>
      </Button>
    </>
  );
}

export default ScrollToTop;
