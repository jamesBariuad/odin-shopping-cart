import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ItemPage = () => {
  const { itemId } = useParams();

  const [itemData, setItemData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [itemCount, setItemCount] = useState(1);

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

  if (loading) return <div>Loading item please wait..</div>;
  if (error) return <div>oh no there is an error:{error}</div>;

  const handlePlusMinusClick = (e) => {
    console.log(e);

    if (e.target.innerText === "-" && itemCount === 1) return;

    if (e.target.innerText === "+") {
      setItemCount(itemCount + 1);
    }

    if (e.target.innerText === "-") {
      setItemCount(itemCount - 1);
    }
  };

  console.log(itemCount);

  //    {
  //     "id": 3,
  //     "title": "Mens Cotton Jacket",
  //     "price": 55.99,
  //     "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
  //     "category": "men's clothing",
  //     "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  //     "rating": {
  //         "rate": 4.7,
  //         "count": 500
  //     }
  // }
  return (
    <div className="w-1/2 mx-auto my-auto">
      <div className="grid gap-10 grid-cols-2 p-16 bg-slate-50 items-center ">
        <div className="place-self-center">
          <img
            className="shadow-xl "
            src={itemData.image}
            alt={itemData?.title}
          />
        </div>

        <div className="flex flex-col">
          <div className="mb-5">
            <div className="text-4xl font-semibold">{itemData.title}</div>
            <div className="flex gap-5">
              <div>rated {itemData.rating.rate}/5</div> |
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
            <div> quantity: {itemCount}</div>
            <button
              className="bg-slate-200 w-10"
              onClick={handlePlusMinusClick}
            >
              +
            </button>
          </div>

          <button className="fw-bold text-2xl bg-black text-white mx-16 mt-5">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
