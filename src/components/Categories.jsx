function Categories({ ulStyle, liStyle }) {
  const categories = [
    { title: "Collections", path: "#" },
    { title: "Men", path: "#" },
    { title: "Women", path: "#" },
    { title: "About", path: "#" },
    { title: "Contact", path: "#" },
  ];
  return (
    <ul className={ulStyle}>
      {categories.map(({ title, path }, index) => {
        return (
          <li key={index} className={liStyle}>
            <a href={path}>{title}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default Categories;
