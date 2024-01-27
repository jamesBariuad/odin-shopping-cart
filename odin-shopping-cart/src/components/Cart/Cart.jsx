import { useOutletContext } from "react-router-dom"

const Cart = () => {
  const [cartItems] = useOutletContext()
  console.log(cartItems )

  return (
    <div>Cart</div>
  )
}

export default Cart