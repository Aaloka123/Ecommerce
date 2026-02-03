import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left */}
        <div className="text-sm">
          © {new Date().getFullYear()} PharmaCare. All rights reserved.
        </div>

        {/* Center */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-gray-200">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-200">
            Terms
          </a>
          <a href="#" className="hover:text-gray-200">
            Support
          </a>
        </div>

        {/* Right */}
        <div className="text-sm">Developed by Aaloka Poudel</div>
      </div>
    </footer>
  );
};

export default Footer;
