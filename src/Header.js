import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

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
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__nav__option">
            <span className="header__nav__optionLineOne">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="header__nav__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
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
