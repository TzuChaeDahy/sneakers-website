import { useSelector } from "react-redux";

function Cart() {
  const isOpen = useSelector((state) => state.cart.value);
  const openStyle = isOpen ? "z-50 opacity-100" : "-z-50 opacity-0";
  const containerStyles = `absolute w-11/12 max-w-sm h-36 mt-4 rounded-lg right-1/2 sm:right-5 lg:right-14 translate-x-2/4 sm:translate-x-0 bg-blue-500 ${openStyle} transition-all`;
  return (
    <>
      <div className={containerStyles}>
        <h1 className="px-5 py-3 border-b-2">Cart</h1>
      </div>
    </>
  );
}

export default Cart;
