import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { handleCart } from "../redux/cartSlice";
import { closeProfile } from "../redux/profileSlice";

function Cart() {
  const isOpen = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(handleCart());
    dispatch(closeProfile());
  };
  return (
    <>
      <button onClick={handleClick}>
        <BsCart3 size={22} />
      </button>
    </>
  );
}

export default Cart;
