import Logo from "../../images/logo.svg";
import Media from "react-media";
import { BsCart3, BsFillPersonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import Avatar from "./Avatar";

function Navbar() {
  const queries = {
    small: "(max-width: 650px)",
  };

  return (
    <nav className="flex justify-between py-5 px-4 border-b-2 sm:mx-5 md:mx-10 lg:mx-14">
      <div className="flex items-center gap-5 md:gap-10 lg:gap-16">
        <Media queries={queries}>
          {(matches) => (
            <>
              {matches.small && (
                <button>
                  <GiHamburgerMenu size={20} />
                </button>
              )}
              {<img src={Logo} alt="Logo" className="grow-0" />}
              {!matches.small && (
                <ul className="flex gap-4 text-sm text-project-black-200 lg:gap-7">
                  <li>
                    <a href="#">Collections</a>
                  </li>
                  <li>
                    <a href="#">Men</a>
                  </li>
                  <li>
                    <a href="#">Women</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              )}
            </>
          )}
        </Media>
      </div>
      <div className="flex gap-6 pr-2 lg:pr-8 lg:gap-10">
        <button>
          <BsCart3 size={22} />
        </button>
        <Avatar>
          <BsFillPersonFill size={22} />
        </Avatar>
      </div>
    </nav>
  );
}

export default Navbar;
