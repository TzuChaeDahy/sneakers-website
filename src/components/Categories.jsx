import { Link } from "react-router-dom";
import { closeSidebar } from "../redux/sidebarSlice";
import { useDispatch } from "react-redux";

function Categories({ ulStyle, liStyle }) {
  const categories = [
    { title: "Collections", path: "/collections" },
    { title: "Men", path: "/men" },
    { title: "Women", path: "/women" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];
  const dispatch = useDispatch();

  const autoCloseSidebar = () => {
    return dispatch(closeSidebar());
  };

  return (
    <ul className={ulStyle}>
      {categories.map(({ title, path }, index) => {
        return (
          <li key={index} className={liStyle} onClick={autoCloseSidebar}>
            <Link to={path}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Categories;
