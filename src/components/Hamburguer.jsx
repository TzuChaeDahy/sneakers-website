import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { openSidebar } from "../redux/sidebarSlice";

function Hamburguer() {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(openSidebar())}>
      <GiHamburgerMenu size={20} />
    </button>
  );
}

export default Hamburguer;
