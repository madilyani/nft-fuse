import React from "react";
import WhyItem from "./WhyItem";
import {whyItems} from "./WhyModule";

export default function Why() {
  return (
    <section className="why">
      <div className="auto__container">
        <div className="why__inner">
          <h3 className="center">why you’ll like us</h3>
          <h2 className="center">
            Fusing made simple for <span>artists</span>
          </h2>
          <p className="center">
            nftFUSE was made to make life easier for artists and NFT creators.
            Instead of having to find expensive developers, you can now focus on
            what you’re passionate about - making art.
          </p>
          <div className="why__inner-arrow">
            <img src="images/icons/arrow.png" alt="img" />
          </div>
        </div>
        <div className="why__inner-row">
          {whyItems.map((whyItem) => {
            return (
              <WhyItem
                key={whyItem.id}
                image={whyItem.image}
                title={whyItem.title}
                text={whyItem.text}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
