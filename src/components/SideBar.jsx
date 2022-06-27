import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="bg-white p-4 md:p-[2rem] mb-6">
      <h4 className="text-[#353535] text-2xl font-semibold clear-both mt-[0.2rem] mb-[0.8rem]">
        Quick Links
      </h4>
      <ul className="flex space-y-2 flex-col items-start justify-center">
        <li className="page_item page-item-11">
          <Link to="/about-me">
            <a>ABOUT ME</a>
          </Link>
        </li>
        <li className="page_item page-item-21">
          <Link to="/cleansing-banish-and-remove-negativity">
            <a>CLEANSING/BANISH AND REMOVE NEGATIVITY</a>
          </Link>
        </li>
        <li className="page_item page-item-2">
          <Link to="/contact-me">
            <a>CONTACT ME</a>
          </Link>
        </li>
        <li className="page_item page-item-23">
          <Link to="/fertility-pregnancy-spell">
            <a>FERTILITY/PREGNANCY SPELL</a>
          </Link>
        </li>
        <li className="page_item page-item-30">
          <Link to="/forgiveness-reconcilation-spell">
            <a>FORGIVENESS/RECONCILATION SPELL</a>
          </Link>
        </li>
        <li className="page_item page-item-19">
          <Link to="/hex-cursejinx-removal">
            <a>HEX/CURSE&amp;JINX REMOVAL</a>
          </Link>
        </li>
        <li className="page_item page-item-5 current_page_item">
          <Link to="/">
            <a aria-current="page">HOME</a>
          </Link>
        </li>
        <li className="page_item page-item-15">
          <Link to="/job-promotionprosperity-spell">
            <a>JOB/PROMOTION&amp;PROSPERITY SPELL</a>
          </Link>
        </li>
        <li className="page_item page-item-33">
          <Link to="/love-spell">
            <a>LOVE SPELL</a>
          </Link>
        </li>
        <li className="page_item page-item-27">
          <Link to="/money-attraction-lottery-spell">
            <a>MONEY ATTRACTION /LOTTERY SPELL</a>
          </Link>
        </li>
        <li className="page_item page-item-25">
          <Link to="/protection-spell">
            <a>PROTECTION SPELL</a>
          </Link>
        </li>
        <li className="page_item page-item-35">
          <Link to="/testimonies">
            <a>TESTIMONIES</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
