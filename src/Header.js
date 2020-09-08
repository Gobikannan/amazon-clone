import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          alt="Logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__nav__option">
          <span className="header__nav__optionLineOne">Hello Guest</span>
          <span className="header__nav__optionLineTwo">Sign In</span>
        </div>
        <div className="header__nav__option">
          <span className="header__nav__optionLineOne">Return</span>
          <span className="header__nav__optionLineTwo">&amp; Orders</span>
        </div>
        <div className="header__nav__option">
          <span className="header__nav__optionLineOne">Your</span>
          <span className="header__nav__optionLineTwo"> Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__nav__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__nav__optionLineTwo header__basketCount">
              {basket ? basket.length : 0}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
