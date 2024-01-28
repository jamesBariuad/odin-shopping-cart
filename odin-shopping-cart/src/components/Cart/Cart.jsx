import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useOutletContext();

  const handleCartQuantityChange = (e) => {
    if (e.target.innerHTML === "+") {
      const updatedCartItems = cartItems.map((item) =>
        item.id == e.target.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    }

    if (e.target.innerHTML === "-") {
      //dont go below 1
      const itemToCheck = cartItems.filter((item) => item.id == e.target.id)[0];
      if (itemToCheck.quantity === 1) return;

      const updatedCartItems = cartItems.map((item) =>
        item.id == e.target.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCartItems(updatedCartItems);
    }
  };

  const handleDelete = (e)=>{
    const idToDelete = e.target.id
    const updatedItems= cartItems.filter(item=>item.id!=idToDelete)
    setCartItems(updatedItems)
  }

  if (cartItems.length === 0) return "No item/s added to cart";

  return (
    <>
      <table className="table-fixed  container mx-auto mt-16 text-gray-500 shadow-sm ">
        <thead className="text-xs text-gray-700 uppercase bg-slate-300">
          <tr>
            <th className="p-5">Product</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="text-center bg-slate-50 border-b ">
              <td className="p-5 font-medium text-gray-900 ">
                <div className="flex gap-3 justify-evenly items-center">
                  <img className="h-24" src={item.image} alt={item.title} />{" "}
                  {item.title}
                </div>
              </td>
              <td>${item.price}</td>
              <td>
                <div className="flex justify-center items-center gap-3">
                  <button
                    className="bg-slate-200 w-10"
                    onClick={handleCartQuantityChange}
                    id={item.id}
                  >
                    -
                  </button>
                  <div> {item.quantity}</div>
                  <button
                    className="bg-slate-200 w-10"
                    onClick={handleCartQuantityChange}
                    id={item.id}
                  >
                    +
                  </button>
                </div>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <span id={item.id} onClick={handleDelete} className="text-red-400 hover:text-red-900 hover:cursor-pointer">
                  Delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Cart;
