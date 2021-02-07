import React from "react";
import Navbar from "./shoppingCart/Navbar";
// import MainMenuHome from "./shoppingCart/Home";
import TestMenu from "./shoppingCart/TestMenu";
import Order from "./shoppingCart/Order/Order";
import OrderCompleted from "./shoppingCart/Order/OrderCompleted";
import "./ShoppingCart.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ModalButton from "./components/widgets/Modals/ItemInfoModal";
import Checkout from "./shoppingCart/Checkout/Checkout";
//REDUX
import store from "./store";
import { Provider } from "react-redux";
import Cart from "./shoppingCart/cart";

const ShoppingCart = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/shop" exact component={TestMenu} />
            <Route path="/Cart" exact component={Cart} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/order" exact component={Order} />
            <Route path="/order-completed" exact component={OrderCompleted} />
          </Switch>
          <ModalButton />
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default ShoppingCart;
