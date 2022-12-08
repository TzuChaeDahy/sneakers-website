import Categories from "./Categories";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { closeSidebar } from "../redux/sidebarSlice";

function SideBar() {
  const sidebarState = useSelector((state) => state.sidebar.value);
  const dispatch = useDispatch();
  const zIndex = sidebarState ? "z-50 opacity-100" : "-z-50 opacity-0";

  return (
    <>
      <div className="bg-project-white-100 w-full h-full absolute -z-10"></div>
      <section
        className={`absolute flex h-full w-full transition-all duration-300 ${zIndex}`}
      >
        <div className="bg-project-white-100 h-full w-2/3 lg:w-1/3 p-4">
          <button className="mb-10" onClick={() => dispatch(closeSidebar())}>
            <IoCloseSharp size={22} />
          </button>
          <Categories ulStyle="gap-10" liStyle="p-2 font-bold text-lg" />
        </div>
        <div
          className="bg-project-black-300 opacity-60 w-1/3 lg:w-2/3"
          onClick={() => dispatch(closeSidebar())}
        ></div>
      </section>
    </>
  );
}

export default SideBar;
