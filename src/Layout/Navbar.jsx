import { Home, ShoppingBag, User } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const active = useLocation().pathname;
  return (
    <nav className="w-full flex px-10 justify-between items-center h-20">
      <div className="w-[30%] h-full flex items-center">
        <Link to={"/"}>
          <img className="w-[150px]" src="/logo.png" alt="" />
        </Link>
      </div>

      <ul className="w-[40%] h-full flex items-center justify-center gap-10">
        <Link  to={"/"}
          className={`${active === "/" && "border-b-4 border-yellow-500"}`}
        >
          Home
        </Link>
        <Link to={"/shop"}   className={`${active === "/shop" && "border-b-4 border-yellow-500"}`}>
          Shop 
        </Link>
        <Tabs>About Us</Tabs>
        <Tabs>Contact Us</Tabs>
        <Tabs>Blog</Tabs>
      </ul>
      <div className="w-[30%] h-full flex items-center justify-end px-5 gap-10">
        <User size={25} className="text-white" />
        <ShoppingBag size={25} className="text-white" />
      </div>
    </nav>
  );
}

export default Navbar;

const Tabs = ({ children }) => {
  return <li>{children}</li>;
};
