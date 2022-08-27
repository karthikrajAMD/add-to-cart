import "./CartItem.css";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
function CartItem({ cartitem, handlecart, handlecartr }) {
  const navigate = useNavigate();

  const total = cartitem.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  const totstyle = {
    fontWeight: "bold",
    marginRight: "10px",
    // position: "relative",
  };
  // const [quant, setQuant] = useState(cartitem.quantity);
  return (
    <>
      {cartitem.length == 0 ? (
        <>
          <div className="noitems">Cart is empty!!</div>
          <button
            onClick={(e) => {
              navigate(-1);
            }}
            className="back"
          >
            Back
          </button>
        </>
      ) : (
        <div className="container">
          <div className="cartlist ">
            {cartitem.map((m, i) => (
              <div className="cartcard row" key={i}>
                <div className="col-3">{m.name}</div>
                <img className="cartimage col-2" src={m.img} alt={m.name} />
                <div className="col-4">
                  <div className="but ">
                    <button
                      className="round "
                      onClick={() => {
                        handlecartr(m);
                        console.log(cartitem);
                      }}
                    >
                      -
                    </button>
                    <input
                      className="quantity"
                      value={m.quantity}
                      type="text "
                    ></input>

                    <button className="round " onClick={() => handlecart(m)}>
                      +
                    </button>
                  </div>
                </div>
                <div className="col-2">Rs.{m.quantity * m.price}</div>
              </div>
            ))}
            <div className="total">
              <div className="col">
                <span style={totstyle}>Total</span>Rs.{total}
              </div>
            </div>
            <button
              onClick={(e) => {
                navigate(-1);
              }}
              className="back"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default CartItem;
