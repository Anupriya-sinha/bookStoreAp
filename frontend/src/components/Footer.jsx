import React from "react";
import { FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';

function Footer() {
  return ( 
    <footer className="flex flex-col items-center footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <hr className="w-full border-t border-gray-300 mb-6" />
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover" href="#">About us</a>
        <a className="link link-hover" href="#">Contact</a>
        <a className="link link-hover" href="#">Jobs</a>
        <a className="link link-hover" href="#">Press kit</a>
      </nav>
      
      <nav className="grid grid-flow-col gap-4">
        <a href="#"><FaTwitter className="w-6 h-6" /></a>
        <a href="#"><FaYoutube className="w-6 h-6" /></a>
        <a href="#"><FaFacebook className="w-6 h-6" /></a>
      </nav>
      
      <p>Copyright © 2025 - All right reserved by ACME Industries Ltd</p>
    </footer>
  );
}

export default Footer;