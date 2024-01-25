
const ItemList = ({shopData}) => {
        // {
    //     "id": 1,
    //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //     "price": 109.95,
    //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //     "category": "men's clothing",
    //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //     "rating": {
    //         "rate": 3.9,
    //         "count": 120
    //     }
    // }
  return (
    <div className="grid grid-cols-5 gap-2">
        {shopData.map(item=>
            (<div key={item.id} className="flex flex-col items-center place-content-evenly p-5 text-center shadow-lg">
                <img className="h-1/2" src={item.image} alt={item.title} />
                <div>
                <div className="font-semibold">{item.title}</div>
                <div>price: {item.price}</div>
                <div>category: {item.category}</div>
                <div>
                    rated {item.rating.rate} by {item.rating.count} users
                </div>
                </div>
            </div>)
        )
        }
    </div>
  )
}

export default ItemList