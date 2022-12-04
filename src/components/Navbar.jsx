import Hamburguer from "./Hamburguer";
import Logo from "../../images/logo.svg";
import Media from "react-media";
import Categories from "./Categories";
import Cart from "./Cart";
import Avatar from "./Avatar";

function Navbar() {
  const queries = {
    small: "(max-width: 650px)",
  };

  return (
    <nav className="flex justify-between py-5 px-4 border-b-2 sm:mx-5 md:mx-10 lg:mx-14">
      <div className="flex items-center gap-5 md:gap-10 lg:gap-16">
        <Media queries={queries}>
          {({ small }) => (
            <>
              {small && <Hamburguer />}
              <img src={Logo} alt="Logo" />
              {!small && (
                <Categories ulStyle="flex gap-4 text-sm text-project-black-200 lg:gap-7" />
              )}
            </>
          )}
        </Media>
      </div>
      <div className="flex gap-6 px-2 lg:pr-8 lg:gap-10">
        <Cart />
        <Avatar />
      </div>
    </nav>
  );
}

export default Navbar;
