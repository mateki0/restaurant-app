import React, { useState, useEffect, useRef } from "react";
import "./menu.css";
import axios from "axios";
import Title from "../Title";
import Desserts from "./Desserts";
import Drinks from "./Drinks";
import Meal from "./Meal";

const Menu = ({ user, userCart, localCart, handleLocalAdding }) => {
  const [items, setItems] = useState([]);
  const _isMounted = useRef(true);

  function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

  const submitChanges = () => {
    axios
      .post("/update", {
        data: userCart,
      })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const submitLocalChanges = () => {
    let items = localCart;
    window.localStorage.setItem("cart", JSON.stringify({ items }));
  };

  useEffect(() => {
    const fetchData = async () => {
      if (_isMounted.current) {
        const result = await axios("/items");
        setItems(result.data);
      }
    };
    fetchData();
    return () => {
      _isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    return () => {
      if (isEmpty(user) && localCart.length) {
        submitLocalChanges();
      }
    };
  }, [localCart, submitLocalChanges, user]);
  useEffect(() => {
    return () => {
      if (!isEmpty(user) && userCart.length) {
        console.log(userCart);
        submitChanges();
      }
    };
  }, [userCart, submitChanges, user]);
  const meals = items.filter((a) => {
    return a.type === "Meal";
  });
  const drinks = items.filter((a) => {
    return a.type === "Drink";
  });
  const desserts = items.filter((a) => {
    return a.type === "Dessert";
  });
  return (
    <>
      {!items.length ? (
        <div>Loading...</div>
      ) : (
        <main>
          <Title value="Checkout our menu below" />
          <Meal
            data={meals}
            user={user}
            handleLocalAdding={handleLocalAdding}
          />
          <Drinks
            data={drinks}
            user={user}
            handleLocalAdding={handleLocalAdding}
          />
          <Desserts
            data={desserts}
            user={user}
            handleLocalAdding={handleLocalAdding}
          />
        </main>
      )}
    </>
  );
};
export default Menu;
