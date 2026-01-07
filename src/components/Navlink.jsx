import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navlink({ link }) {
  const location = useLocation();
  const isActive = location.pathname === link.url;

  return (
    <Link
      to={link.url}
      className={`rounded p-1 ${
        isActive ? "bg-black text-white" : "text-gray-300 hover:text-white"
      }`}
    >
      {link.title}
    </Link>
  );
}

export default Navlink;
