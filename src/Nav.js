import React, { useEffect, useState } from "react";
import { NavBlock, NavLogo, NavAvatar } from "./Nav.styles";

function Nav() {
  const [show, handleShow] = useState(false);

  //listening when you scroll down
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  //  <div className={`nav ${show && "nav__black"}`}>
  return (
    // if show=true -> nav__black
    <NavBlock>
      <NavLogo
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/400px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
      />
      <NavAvatar
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="Netflix logo"
      />
    </NavBlock>
  );
}

export default Nav;
