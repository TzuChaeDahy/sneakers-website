import Hamburguer from "./Hamburguer";
import Logo from "../../images/logo.svg";
import Media from "react-media";
import Categories from "./Categories";
import CartButton from "./CartButton";
import ProfileButton from "./ProfileButton";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeCart } from "../redux/cartSlice";
import { closeProfile } from "../redux/profileSlice";

function Navbar() {
  const dispatch = useDispatch();
  const queries = {
    small: "(max-width: 650px)",
  };
  const handleClick = () => {
    dispatch(closeCart());
    dispatch(closeProfile());
  };

  return (
    <nav className="flex justify-between py-5 px-4 border-b-2 sm:mx-5 md:mx-10 lg:mx-14">
      <div className="flex items-center gap-5 md:gap-10 lg:gap-16">
        <Media queries={queries}>
          {({ small }) => (
            <>
              {small && <Hamburguer />}
              <Link to="/" onClick={handleClick}>
                <img src={Logo} alt="Logo" />
              </Link>
              {!small && (
                <Categories
                  ulStyle="flex gap-4 text-sm text-project-black-200 lg:gap-7"
                  hover={true}
                />
              )}
            </>
          )}
        </Media>
      </div>
      <div className="flex gap-6 px-2 lg:pr-8 lg:gap-10">
        <CartButton />
        <ProfileButton />
      </div>
    </nav>
  );
}

export default Navbar;
