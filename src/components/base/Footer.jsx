import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="anchor" id="footer"></div>
      <div className="auto__container">
        <div className="footer__inner">
          <div className="footer__inner-column">
            <a href="/" className="footer__inner-column-link">
              Home
            </a>
            <a href="/" className="footer__inner-column-link">
              Contact Us
            </a>
            <a href="/" className="footer__inner-column-link">
              Start Fusing
            </a>
            <a href="/" className="footer__inner-column-link">
              View Metadata
            </a>
            <a href="/" className="footer__inner-column-link">
              FAQ
            </a>
          </div>
          <div className="footer__inner-column">
            <a href="/" className="footer__inner-column-link">
              Terms
            </a>
            <a href="/" className="footer__inner-column-link">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="footer__copy">
          <div className="footer__copy-text">
            Copyright 2021 nftFUSE. All rights reserved.
          </div>
          <div className="footer__copy-abs">an o4 studios tool</div>
          <a href="/" className="footer__copy-link">
            hello@nftFUSE.xyz
          </a>
          <a href="/" className="footer__copy-social">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
