import React, { useState, useEffect } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);
  const start = 500;
  const onScroll = () => {
    if (window.scrollY > start) {
      document.getElementById("header").classList.add("sticky");
    } else {
      document.getElementById("header").classList.remove("sticky");
    }
  };
  return (
    <header className="header" id="header">
      <div className="auto__container">
        <div className="header__inner">
          <a href="#intro" className="header__inner-logo">
            nft<span>FUSE</span>
          </a>
          <nav className={"nav " + (menu ? "active" : "")} id="menu">
            <div className="nav__inner">
              <a href="#why" className="nav__inner-link">
                Features
              </a>
              <a href="#price" className="nav__inner-link">
                Pricing
              </a>
              <a href="#footer" className="nav__inner-link">
                About
              </a>
              <a href="/" className="button button-primary">
                Generate Now
              </a>
            </div>
          </nav>
          <div
            className={"burger " + (menu ? "active" : "")}
            onClick={() => {
              setMenu(!menu);
            }}
          ></div>
        </div>
      </div>
    </header>
  );
}
