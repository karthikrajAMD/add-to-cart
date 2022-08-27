import "./style.css";
import { FaStar } from "react-icons/fa";

function Book({ list, setCartcount, cartcount, cartitem, handlecart }) {
  const strike = {
    textDecoration: "line-through",
    color: "green",
  };

  return (
    <>
      <div className="eachitem">
        <img className="bookimage" src={list.img} alt={list.name} />
        <h2>{list.name}</h2>
        <div></div>
        {list.isstrike ? (
          <div>
            <div className="rating">
              <span>
                {[...Array(5)].map((m, i) => {
                  return <FaStar key={i} className="star" size={15} />;
                })}
              </span>
            </div>
            <div>
              <span style={strike}>{<list className="oldp"></list>}</span>
              <span>{list.newp}</span>
            </div>
          </div>
        ) : (
          <div>
            <span>{list.minp}</span>-<span>{list.maxp}</span>
          </div>
        )}
        <div className="buttondisp">
          <button
            className="button"
            disabled={cartitem.some((obj) => obj.id === list.id)}
            onClick={(e) => {
              e.preventDefault();
              setCartcount(+cartcount + 1);
              handlecart(list);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Book;
