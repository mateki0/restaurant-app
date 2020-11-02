import React, { useEffect, useState, useCallback } from "react";
import Cart from "./Components/Cart/Cart";
import AddingPanel from "./Components/ItemsAdding/ItemsAdding";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Header from "./Components/Header" ;
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import MenuPage from "./Pages/MenuPage";
import { ModalProvider } from 'styled-react-modal';
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import CartPage from "./Pages/CartPage";
import { LocalCartContextProvider } from "./Contexts/LocalCartContext";
import { TotalPriceProvider } from "./Contexts/TotalPriceContext";
function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

const App = () => {
  const [user, setUser] = useState(null);
  const [localCart, setLocalCart] = useState([]);
  const [userCart, setUserCart] = useState([]);
  const busy = false;
  const [price, setPrice] = useState(0);
  const [isLogged, setIsLogged] = useState(false);

  // initial set local storage
  // useEffect(() => {
  //   if (!window.localStorage.getItem("cart")) {
  //     localStorage.setItem("cart", JSON.stringify({ items: [] }));
  //   }
  // }, []);

  // //fetch user
  // useEffect(() => {
  //   let didCancel = false;
  //   if (!didCancel) {
  //     const fetchData = async () => {
  //       const result = await axios("/user");
  //       setUser(result.data);
  //     };
  //     fetchData();
  //   }
  //   return () => {
  //     didCancel = true;
  //   };
  // }, []);
  // // Menu functions !!
  // const findItemInCart = (data) => {
  //   let values2 = Object.values(data.description).join("");
  //   return values2;
  // };
  // const handleLocalAdding = (data) => {
  //   let currentCart;
  //   isEmpty(user)
  //     ? (currentCart = localCart.splice(0))
  //     : (currentCart = userCart.splice(0));
  //   const id = data.itemName + findItemInCart(data);
  //   let item = currentCart.find((a) => {
  //     return a.id === id;
  //   });
  //   if (item) {
  //     item.count += 1;
  //   } else {
  //     let newItem = {
  //       id: id,
  //       item: data.itemName,
  //       description: data.description,
  //       price: data.price,
  //       count: 1,
  //     };
  //     currentCart.push(newItem);
  //   }
  //   if (isEmpty(user)) {
  //     setLocalCart(currentCart);
  //   } else {
  //     setUserCart(currentCart);
  //   }
  // };
  // // local Cart update
  // const handleChange = (data) => {
  //   let currentCart = localCart.splice(0);
  //   let item = currentCart.find((a) => {
  //     return a.id === data.value;
  //   });
  //   if (data.action === "increment") {
  //     item.count += 1;
  //   }
  //   if (data.action === "decrement" && item.count > 1) {
  //     item.count -= 1;
  //   }
  //   if (data.action === "delete") {
  //     let index = currentCart.indexOf(item);
  //     currentCart.splice(index, 1);
  //   }
  //   setLocalCart(currentCart);
  // };
  // // update user cart
  // const updateCart = (data) => {
  //   let currentCart = userCart.splice(0);
  //   let item = currentCart.find((a) => a.item === data.value);
  //   if (data.action === "increment") {
  //     item.count += 1;
  //   } else if (data.action === "decrement" && item.count > 1) {
  //     item.count -= 1;
  //   } else {
  //     let index = currentCart.indexOf(item);
  //     currentCart.splice(index, 1);
  //   }
  //   setUserCart(currentCart);
  // };

  // useEffect(() => {
  //   if (
  //     (user === null || user === "") &&
  //     JSON.parse(window.localStorage.getItem("cart")) !== undefined
  //   ) {
  //     setLocalCart(JSON.parse(window.localStorage.getItem("cart")).items);
  //   } else {
  //     setUserCart(user.local.cart);
  //     setIsLogged(true);
  //   }
  // }, [busy, user, isLogged]);
  // const getPrice = useCallback(() => {
  //   let itemsPrice;

  //   if (isLogged !== true) {
  //     itemsPrice = localCart.map(
  //       (a) => parseFloat(a.price) * parseInt(a.count)
  //     );
  //   } else {
  //     itemsPrice = userCart.map((a) => parseFloat(a.price) * parseInt(a.count));
  //   }
  //   if (itemsPrice.length > 1) {
  //     return itemsPrice.reduce((a, b) => a + b);
  //   } else {
  //     return itemsPrice[0];
  //   }
  // }, [localCart, userCart, isLogged]);

  // useEffect(() => {
  //   const currentPrice = getPrice();
  //   setPrice(currentPrice);
  // }, [localCart, userCart, getPrice]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <HomePage />
        </Route>
        <Route exact path="/about">
          <Header />
          <AboutPage />
        </Route>
        <Route exact path="/contact">
          <Header />
          <ContactPage />
        </Route>
        <Route exact path="/menu">
        <TotalPriceProvider>
        <Header />
          <ModalProvider>
            <MenuPage
              user={user}
            />
          </ModalProvider>
          </TotalPriceProvider>
        </Route>
        <Route exact path="/itemsAdding">
          <AddingPanel />
        </Route>
        <Route exact path="/cart">
        <TotalPriceProvider>
          <Header />
          <CartPage
          />
          </TotalPriceProvider>
        </Route>
        <Route exact path="/login">
          <Header />
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <Header />
          <RegisterPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
