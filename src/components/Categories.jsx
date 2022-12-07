import { Link } from "react-router-dom";

function Categories({ ulStyle, liStyle }) {
  const categories = [
    { title: "Collections", path: "/collections" },
    { title: "Men", path: "/men" },
    { title: "Women", path: "/women" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];
  return (
    <ul className={ulStyle}>
      {categories.map(({ title, path }, index) => {
        return (
          <li key={index} className={liStyle}>
            <Link to={path}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Categories;
