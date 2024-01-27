import { Link } from "react-router-dom";

const ItemList = ({ shopData }) => {

  
  return (
    <div className="grid grid-cols-5 p-10 overflow-x-hidden">
      {shopData.map((item) => (
        <Link
          to={`item/${item.id}`}
          key={item.id}
          id={item.id}
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
