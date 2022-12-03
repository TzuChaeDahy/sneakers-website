import { GiHamburgerMenu } from "react-icons/gi";

function Hamburguer({ setIsOpenned }) {
  const handleSideBar = () => {
    setIsOpenned(true);
  };
  return (
    <button onClick={handleSideBar}>
      <GiHamburgerMenu size={20} />
    </button>
  );
}

export default Hamburguer;
