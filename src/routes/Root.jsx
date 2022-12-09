import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Cart from "../components/Cart";
import Profile from "../components/Profile";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <SideBar />
      <NavBar />
      <Cart />
      <Profile />
      <Outlet />
    </>
  );
}

export default App;
