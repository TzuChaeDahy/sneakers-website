import { Link } from "react-router-dom";
import { closeSidebar } from "../redux/sidebarSlice";
import { useDispatch } from "react-redux";
import { closeCart } from "../redux/cartSlice";
import { closeProfile } from "../redux/profileSlice";

function Categories({ ulStyle, liStyle = "", hover = true }) {
  const categories = [
    { title: "Collections", path: "/collections" },
    { title: "Men", path: "/men" },
    { title: "Women", path: "/women" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(closeSidebar());
    dispatch(closeCart());
    dispatch(closeProfile());
  };
  const hoverStyles =
    "hover:text-project-black-400 border-b-2 border-transparent hover:border-project-orange-200 transition";
  return (
    <ul className={ulStyle}>
      {categories.map(({ title, path }, index) => {
        return (
          <li key={index} className={liStyle} onClick={handleClick}>
            <Link className={hoverStyles} to={path}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Categories;
