import React from "react";
import GradeIcon from "@material-ui/icons/Grade";
import "./BasketItem.css";
import { useStateValue } from "./StateProvider";

function BasketItem({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // dispatch the item into data layer
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="basketitem">
      <img alt="prod banner" className="basketitem__image" src={image} />
      <div className="basketitem__info">
        <p className="basketitem__title">{title}</p>
        <p className="basketitem__price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className="basketitem__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <GradeIcon className="basketitem__ratingIcon" />
            ))}
        </div>
        <button
          className="basketitem__removeFromBasket"
          onClick={removeFromBasket}
        >
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default BasketItem;
