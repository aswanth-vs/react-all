import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, setState] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 700) {
        setState(true);
      } else {
        setState(false);
      }
    });
  });
  return (
    <div className={`nav ${show && "blackNav"}`}>
      <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix logo" style={{ width: "150px" }} />
    </div>
  );
}

export default Nav;
