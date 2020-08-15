import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import Body from "./Components/Body/Body";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Menu from "./Components/Menu/Menu";
import Cart from "./Components/Cart/Cart";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import AddingPanel from "./Components/ItemsAdding/ItemsAdding";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

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
  useEffect(() => {
    if (!window.localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify({ items: [] }));
    }
  }, []);

  //fetch user
  useEffect(() => {
    let didCancel = false;
    if (!didCancel) {
      const fetchData = async () => {
        const result = await axios("/user");
        setUser(result.data);
      };

      fetchData();
    }
    return () => {
      didCancel = true;
    };
  }, []);
  // Menu functions !!
  const handleLocalAdding = (data) => {
    let currentCart;
    isEmpty(user)
      ? (currentCart = localCart.splice(0))
      : (currentCart = userCart.splice(0));
    let item = currentCart.find((a) => a.item === data.itemName);
    if (item) {
      item.count += 1;
    } else {
      let newItem = {
        item: data.itemName,
        description: data.description,
        price: data.price,
        count: 1,
      };
      currentCart.push(newItem);
    }
    if (isEmpty(user)) {
      setLocalCart(currentCart);
    } else {
      setUserCart(currentCart);
    }
  };

  // update user cart
  const updateCart = (data) => {
    console.log(data);
    let currentCart = userCart.splice(0);
    let item = currentCart.find((a) => a.item === data.value);
    if (data.action === "increment") {
      item.count += 1;
    } else if (data.action === "decrement" && item.count > 1) {
      item.count -= 1;
    } else {
      let index = currentCart.indexOf(item);
      currentCart.splice(index, 1);
    }
    setUserCart(currentCart);
  };

  useEffect(() => {
    if (
      (user === null || user === "") &&
      JSON.parse(window.localStorage.getItem("cart")) !== undefined
    ) {
      setLocalCart(JSON.parse(window.localStorage.getItem("cart")).items);
    } else {
      setUserCart(user.local.cart);
      setIsLogged(true);
    }
  }, [busy, user, isLogged]);
  const getPrice = useCallback(() => {
    let itemsPrice;
    if (isLogged !== true) {
      itemsPrice = localCart.map((a) =>
        parseFloat(a.price.slice(0, a.price.length - 1) * parseFloat(a.count))
      );
    } else {
      itemsPrice = userCart.map((a) =>
        parseFloat(a.price.slice(0, a.price.length - 1) * parseFloat(a.count))
      );
    }
    if (itemsPrice.length > 1) {
      return itemsPrice.reduce((a, b) => a + b);
    } else {
      return itemsPrice[0];
    }
  }, [localCart, userCart, isLogged]);

  // local Cart update
  const handleChange = (data) => {
    let currentCart = localCart.splice(0);

    let item = currentCart.find((a) => a.item === data.value);

    if (data.action === "increment") {
      item.count += 1;
    }
    if (data.action === "decrement" && item.count > 1) {
      item.count -= 1;
    }
    if (data.action === "delete") {
      let index = currentCart.indexOf(item);
      currentCart.splice(index, 1);
    }
    setLocalCart(currentCart);
  };

  useEffect(() => {
    const currentPrice = getPrice();
    setPrice(currentPrice);
  }, [localCart, userCart, getPrice]);

  return (
    <Router>
      <div className="App">
        <div className="nav-div">
          <Header user={user} price={price} />
        </div>
      </div>

      <Switch>
        <Route exact path="/">
          <Body />
          <Footer />
        </Route>
        <Route exact path="/about">
          <About />
          <Footer />
        </Route>
        <Route exact path="/contact">
          <Contact />
          <Footer />
        </Route>
        <Route exact path="/menu">
          <Menu
            user={user}
            userCart={userCart}
            localCart={localCart}
            handleLocalAdding={handleLocalAdding}
          />
          <Footer />
        </Route>
        <Route exact path="/itemsAdding">
          <AddingPanel />
        </Route>
        <Route exact path="/cart">
          <Cart
            user={user}
            price={price}
            localCart={localCart}
            userCart={userCart}
            handleChange={handleChange}
            isLogged={isLogged}
            updateCart={updateCart}
          />
          <Footer />
        </Route>
        <Route exact path="/login">
          <Login />
          <Footer />
        </Route>
        <Route exact path="/register">
          <Register />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
