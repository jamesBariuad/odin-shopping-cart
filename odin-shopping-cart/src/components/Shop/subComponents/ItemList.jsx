import { Link } from "react-router-dom";

const ItemList = ({ shopData }) => {
  // {
  //     "id": 1,
  //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //     "price": 109.95,
  //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //     "category": "men's clothing",s
  //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //     "rating": {
  //         "rate": 3.9,
  //         "count": 120
  //     }
  // }

  const handleItemClick = (e) => {
    console.log(e.target.id);
  };

  return (
    <div className="grid grid-cols-5 p-10 overflow-x-hidden">
      {shopData.map((item) => (
        <Link
          to={`item/${item.id}`}
          key={item.id}
          id={item.id}
          onClick={handleItemClick}
        >
          <div className="flex flex-col items-center h-full justify-center p-5 text-center gap-5 shadow-lg pointer-events-none" >
            <img className="h-1/2" src={item.image} alt={item.title} />
            <div>
              <div className="font-semibold">{item.title}</div>
              <div>price: {item.price}</div>
              <div>category: {item.category}</div>
              <div>
                 {item.rating.rate}/5 | {item.rating.count} sold
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
