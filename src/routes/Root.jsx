import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <SideBar />
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
