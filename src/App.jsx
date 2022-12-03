import { useState } from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

function App() {
  const [isOpenned, setIsOpenned] = useState(false);
  return (
    <>
      <SideBar setIsOpenned={setIsOpenned} isOpenned={isOpenned} />
      <Navbar setIsOpenned={setIsOpenned} />
    </>
  );
}

export default App;
