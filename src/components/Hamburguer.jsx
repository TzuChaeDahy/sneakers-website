import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { closeCart } from "../redux/cartSlice";
import { closeProfile } from "../redux/profileSlice";
import { openSidebar } from "../redux/sidebarSlice";

function Hamburguer() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openSidebar());
    dispatch(closeCart());
    dispatch(closeProfile());
  };
  return (
    <button onClick={handleClick}>
      <GiHamburgerMenu size={20} />
    </button>
  );
}

export default Hamburguer;
