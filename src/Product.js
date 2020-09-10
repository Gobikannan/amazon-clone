import React from "react";
import GradeIcon from "@material-ui/icons/Grade";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { v4 as uuidv4 } from "uuid";

function Product({ title, image, price, rating }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: uuidv4(),
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <GradeIcon key={index} className="product__ratingIcon" />
            ))}
        </div>
      </div>
      <img alt="prod banner" className="product__image" src={image} />
      <button
        className="product__addtobasket app_primary_button"
        onClick={addToBasket}
      >
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
