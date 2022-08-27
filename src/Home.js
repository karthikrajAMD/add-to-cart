import Book from "./Book";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Home({ fdata, cartitem, handlecart }) {
  const [cartcount, setCartcount] = useState(cartitem.length);

  const navigate = useNavigate();

  return (
    <>
      <div className="headtop">
        <div className="homehead">
          <button
            className="cartdisp mr-2 mb-2"
            onClick={(e) => {
              e.preventDefault();

              navigate("/CartItem");
            }}
          >
            <i className="fas fa-shopping-cart"></i>

            <span className="col">Cart</span>
            <span>{cartcount}</span>
          </button>
        </div>
        <div className="headofpage mt-5"> Shopping</div>
        <div className="whole">
          {fdata.map((mv, i) => (
            <Book
              key={i}
              list={mv}
              setCartcount={setCartcount}
              cartcount={cartcount}
              handlecart={handlecart}
              cartitem={cartitem}
            />
          ))}
        </div>
        <div className="bottomofpage">Copyright &copy; 2022</div>
      </div>
    </>
  );
}
export default Home;
