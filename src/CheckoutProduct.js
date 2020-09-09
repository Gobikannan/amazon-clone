import React from "react";
import GradeIcon from "@material-ui/icons/Grade";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // dispatch the item into data layer
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutproduct">
      <img alt={title} className="checkoutproduct__image" src={image} />
      <div className="checkoutproduct__info">
        <p className="checkoutproduct__title">{title}</p>
        <p className="checkoutproduct__price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <GradeIcon key={index} className="checkoutproduct__ratingIcon" />
            ))}
        </div>
        <button
          className="checkoutproduct__removeFromBasket"
          onClick={removeFromBasket}
        >
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
