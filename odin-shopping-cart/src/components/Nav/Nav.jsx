import logo from "../../assets/fakestore logo.png";
import { Link, } from "react-router-dom";

const Nav = ({ cartItems }) => {
  const quantityInCart = () => {
    total = 0;
    cartItems.map((item) => (total += item.quantity));
    return total;
  };

  return (
    <>
      <nav>
        <ul className="w-screen flex shadow-lg justify-between h-24 text-lg font-medium">
          <img src={logo} alt="logo" />
          <div className="flex items-center gap-16">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="shop">
              <li>Shop</li>
            </Link>
            <Link to="cart">
              <li className="self-center me-16">
                Cart 
                {/* {cartItems.length!==0 && <sup>{quantityInCart}</sup>} */}
              </li>
            </Link>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
