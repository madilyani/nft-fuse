import React from "react";
import PriceItem from "./PriceItem";
import { priceItems } from "./PriceModule";

export default function Price() {
  return (
    <section className="price">
      <div className="auto__container">
        <div className="price__inner">
          <h2>Affordable Pricing</h2>
          <div className="price__inner-row">
            {priceItems.map((priceItem) => {
              return (
                <PriceItem
                  key={priceItem.id}
                  title={priceItem.title}
                  number={priceItem.number}
                  abs={priceItem.abs}
                  price={priceItem.price}
                  subtitle={priceItem.subtitle}
                  text={priceItem.text}
                  small={priceItem.small}
                />
              );
            })}
          </div>
          <p className="center-footer">
            Agency or Network? Contact Us if you are looking for a monthly
            subscription.
          </p>
        </div>
      </div>
    </section>
  );
}
