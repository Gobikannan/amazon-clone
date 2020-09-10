import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import RegisterAccount from "./RegisterAccount";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51HPvUUCty4F6IehefQrkhKOPk3JL0aFuUnDluB2VLMNAZ8rjzlK66HiGelQQIFqIlgRXyUX9EKB2lEThqgMUR1st00QrjJHPdz"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // check user login
    auth.onAuthStateChanged((authUser) => {
      dispatch({
        type: "SET_USER",
        user: authUser,
      });
    });
  }, []);
  return (
    // BEM convention
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <RegisterAccount />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          {/** make sure the default path is always at the bottom */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
