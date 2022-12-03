import Media from "react-media";
import { BsCart3, BsFillPersonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import Avatar from "./Avatar";

function Navbar() {
  const logoUrl = "../../images/logo.svg";
  const queries = {
    small: "(max-width: 499px)",
  };

  return (
    <nav className="flex justify-between bg-green-400 py-5 px-4">
      <div className="flex items-center gap-5">
        <Media queries={queries}>
          {(matches) => (
            <>
              {matches.small && (
                <button>
                  <GiHamburgerMenu size={20} />
                </button>
              )}
              {<img src={logoUrl} alt="Logo" className="grow-0" />}
              {!matches.small && (
                <ul>
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
      <div className="flex gap-5">
        <button>
          <BsCart3 size={20} />
        </button>
        <Avatar>
          <BsFillPersonFill size={20} />
        </Avatar>
      </div>
    </nav>
  );
}

export default Navbar;
