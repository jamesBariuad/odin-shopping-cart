import logo from "../../assets/fakestore logo.png";
import { Link } from "react-router-dom";
import homeIcon from "../../assets/home_FILL0_wght400_GRAD0_opsz24.svg";
import storeIcon from "../../assets/storefront_FILL0_wght400_GRAD0_opsz24.svg";
import cartIcon from "../../assets/shopping_cart_FILL0_wght400_GRAD0_opsz24.svg";

const Nav = ({ cartItems }) => {
  console.log(cartItems);
  const getQuantityInCart = () => {
    let total = 0;
    cartItems.map((item) => (total += item.quantity));
    return total;
  };

  const quantity = getQuantityInCart();

  return (
    <>
      <nav>
        <div className="h-20 mx-auto place-content-center flex overflow-clip">
          <img className="h-full  scale-150" src={logo} alt="logo icon" />
        </div>
        <ul className="w-screen flex shadow-lg h-20 text-lg font-medium absolute  bottom-0 bg-white ">
          <div className="flex items-center gap-16 w-screen  place-content-evenly ">
            <Link to="/">
              <img className="w-7" src={homeIcon} alt="homeIcon" />
            </Link>
            <Link to="shop">
              <img className="w-7" src={storeIcon} alt="ShopIcon" />
            </Link>
            <Link to="cart">
              <div className="relative">
                <img className="w-7" src={cartIcon} alt="cartIcon" />{" "}
                {cartItems.length !== 0 && (
                  <sup className="ml-1 text-red-500 absolute -right-1 top-0">
                    {quantity}
                  </sup>
                )}
              </div>
            </Link>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
