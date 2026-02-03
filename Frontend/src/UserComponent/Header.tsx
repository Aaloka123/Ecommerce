import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white px-6 py-3 flex items-center justify-between shadow-md">
      {/* Logo / System Name */}
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold"> PharmaCare</span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex gap-6 font-medium">
        <Link to="/" className="hover:text-gray-200">
          Dashboard
        </Link>
        <Link to="/medicines" className="hover:text-gray-200">
          Medicines
        </Link>
        <Link to="/inventory" className="hover:text-gray-200">
          Inventory
        </Link>
        <Link to="/sales" className="hover:text-gray-200">
          Sales
        </Link>
        <Link to="/reports" className="hover:text-gray-200">
          Reports
        </Link>
        <Link to="/users" className="hover:text-gray-200">
          Users
        </Link>
      </nav>

      {/* User Section */}
      <div className="flex items-center gap-4">
        <span className="hidden sm:block">Admin</span>
        <button className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
