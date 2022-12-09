import { BsFillPersonFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { closeCart } from "../redux/cartSlice";
import { handleProfile } from "../redux/profileSlice";

function Avatar() {
  const isOpen = useSelector((state) => state.profile.value);
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(handleProfile());
    dispatch(closeCart());
  }
  return (
    <>
      <button onClick={handleClick}>
        <BsFillPersonFill size={22} />
      </button>
    </>
  );
}

export default Avatar;
