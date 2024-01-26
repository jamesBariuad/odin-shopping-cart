import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemList from "./subComponents/ItemList";

const Shop = () => {
  const [shopData, setShopData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("server error");
        }
        return res.json();
      })
      .then((json) => setShopData(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Network Error has occured</div>;

  return (
    <>
      <ItemList shopData={shopData} />
    </>
  );
};

export default Shop;
