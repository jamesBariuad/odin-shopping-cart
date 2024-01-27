import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const ItemPage = () => {
  const { itemId } = useParams();
  const [cartItems, setCartItems] = useOutletContext();

  const [itemData, setItemData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [itemQuantity, setItemQuantity] = useState(1);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemId}`)
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("server error");
        }
        return res.json();
      })
      .then((json) => setItemData(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  const handleAddToCart = () => {
    alert("added to cart success")
    //check if present in cart
    const isItemInCart = cartItems.some((item) => item.id === itemData.id);

    if (isItemInCart) {
      const updatedCartItems = cartItems.map((item) =>
        itemData.id === item.id
          ? { ...item, quantity: item.quantity + itemQuantity }
          : item
      );
      setCartItems(updatedCartItems);
    }else{
      const itemToAdd = {
        id: itemData.id,
        title: itemData.title,
        quantity: itemQuantity,
        price: itemData.price
      } 
      setCartItems([...cartItems, itemToAdd])
    }
    //if present, increase the quantity,
    //if not, append to list with the quantity

  };

  if (loading) return <div>Loading item please wait..</div>;
  if (error) return <div>oh no there is an error:{error}</div>;

  const handlePlusMinusClick = (e) => {
    if (e.target.innerText === "-" && itemQuantity === 1) return;

    if (e.target.innerText === "+") {
      setItemQuantity(itemQuantity + 1);
    }

    if (e.target.innerText === "-") {
      setItemQuantity(itemQuantity - 1);
    }
  };

  return (
    <div className="w-3/4 mx-auto my-auto h-4/5">
      <div className="grid gap-10 grid-cols-2 p-16 bg-slate-50 items-center ">
        <div className="place-self-center">
          <img
            className="shadow-xl "
            src={itemData.image}
            alt={itemData.title}
          />
        </div>

        <div className="flex flex-col">
          <div className="mb-5">
            <div className="text-4xl font-semibold">{itemData.title}</div>
            <div className="flex gap-5">
              <div>⭐{itemData.rating.rate}/5</div> |
              <div>{itemData.rating.count} ratings</div>
            </div>
          </div>
          <hr />
          <div className="my-5">{itemData.description}</div>
          <hr />
          <div className="mt-10 flex justify-center items-center gap-3">
            <button
              className="bg-slate-200 w-10"
              onClick={handlePlusMinusClick}
            >
              -
            </button>
            <div> quantity: {itemQuantity}</div>
            <button
              className="bg-slate-200 w-10"
              onClick={handlePlusMinusClick}
            >
              +
            </button>
          </div>

          <button
            className="fw-bold text-2xl bg-black text-white mx-16 mt-5"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
