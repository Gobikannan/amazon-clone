import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import BasketItem from "./BasketItem";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import { Link } from "react-router-dom";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          alt="checkout ad"
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div className="checkout__title">
          <h2>Your Shopping Basket</h2>
        </div>
        {basket.length === 0 && (
          <div className="checkout__noItems">
            <SentimentVeryDissatisfiedIcon />
            <span>No items added to basket</span>
          </div>
        )}
        {basket.map((value, i) => (
          <BasketItem {...value} />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
