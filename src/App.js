import React from "react";
import Home from "./Home";
import "./style.css";
import { useState } from "react";
import CartItem from "./CartItem";
import { Route, Routes } from "react-router-dom";

const data = [
  {
    name: "React BOOK",
    img: "https://d2sofvawe08yqg.cloudfront.net/reactjs-documentation-pdf/s_hero2x?1620645510",
    id: 1,
    oldp: "$80",
    newp: "$40",
    price: 3199,
    isstrike: true,
  },
  {
    name: "JavaScript",
    img: "https://uploads.sitepoint.com/wp-content/uploads/2017/03/1488480428eloquent-js.jpg",
    id: 2,
    minp: "$30",
    maxp: "$60",
    price: 4391,
    isstrike: false,
  },
  {
    name: "CSS",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391311956l/6649292.jpg",
    id: 3,
    minp: "$35",
    maxp: "$48",
    price: 3800,
    isstrike: false,
  },
  {
    name: "HTML & CSS",
    img: "https://images-na.ssl-images-amazon.com/images/I/510+qf4fG4L._SX401_BO1,204,203,200_.jpg",
    oldp: "$57",
    newp: "$30",
    price: 30,
    isstrike: true,
    id: 2395,
  },
  {
    name: "Bootstrap",
    img: "https://m.media-amazon.com/images/I/41137qW7yGL._SX260_.jpg",
    minp: "$45",
    maxp: "$78",
    price: 3597,
    id: 5,
    isstrike: false,
  },
];

function App() {
  const [cartitem, setCartitem] = useState([]);
  let handleaddtocart = (e) => {
    const ProductExist = cartitem.find((item) => item.id === e.id);

    if (ProductExist) {
      setCartitem(
        cartitem.map((item) =>
          item.id === e.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartitem([...cartitem, { ...e, quantity: 1 }]);
    }
  };
  const handleRemoveProduct = (e) => {
    const ProductExist = cartitem.find((item) => item.id === e.id);
    if (ProductExist.quantity === 1) {
      setCartitem(cartitem.filter((item) => item.id !== e.id));
    } else {
      setCartitem(
        cartitem.map((item) =>
          item.id === e.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              fdata={data}
              cartitem={cartitem}
              setCartitem={setCartitem}
              handlecart={handleaddtocart}
              handlecartr={handleRemoveProduct}
            />
          }
        />
        <Route
          path="/cartitem"
          element={
            <CartItem
              cartitem={cartitem}
              setCartitem={setCartitem}
              handlecart={handleaddtocart}
              handlecartr={handleRemoveProduct}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
