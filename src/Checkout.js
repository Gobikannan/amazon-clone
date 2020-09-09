import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          alt="checkout ad"
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div className="checkout__title">
          <h3>Hello, {user ? user.email : "Guest"}</h3>
          <h2>Your Shopping Basket {basket.length === 0 && "is empty"}</h2>
        </div>

        {basket.length === 0 && (
          <div className="checkout__noItems">
            <span>
              You have no items in your basket. To buy one or more items,
              navigate to home page and click "Add to basket" next to the item.
            </span>
            <SentimentVeryDissatisfiedIcon />
          </div>
        )}
        <FlipMove leaveAnimation="elevator">
          {basket.map((item, index) => (
            <div key={item.id}>
              <CheckoutProduct {...item} />
            </div>
          ))}
        </FlipMove>
      </div>
      <div className="checkout__right">{basket.length > 0 && <Subtotal />}</div>
    </div>
  );
}

export default Checkout;
