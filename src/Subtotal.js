import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue, getBasketTotal } from "./StateProvider";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();
  const handleHistory = () => {
    history.push("/payment");
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"£"}
      />
      <button className="app_primary_button" onClick={handleHistory}>
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
