import React from "react";
import { useLocation, Link } from "react-router-dom";

const Header = ({bgImg,title }) => {
  let location = useLocation();
  console.log(location);
  const checkLocation = (slug) => {
    if (location.pathname === slug) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(
            ${bgImg}
          )`,
        }}
        className=" relative bg-cover  bg-bg-black/60 bg-blend-darken shadow text-[#0a0a0a80]  bg-bottom bg-no-repeat overflow-hidden block"
      >
        <div className="max-w-[1100px] mx-auto relative  ">
          <div className="w-auto float-left mx-auto relative z-10 py-[6%] px-[1rem]">
            <div className="mb-1">
              <Link to="/">
              <a
                // href="https://drjamespsychicspells.com/"
                className="mb-1 text-white site-title tracking-[-0.03em] font-semibold  text-[2em]"
                rel="home"
              >
                drmarkpsychicspells
              </a>
              </Link>
              
            </div>
            <p className="text-white font-medium">drmarkpsychicspells</p>
          </div>
        </div>
      </div>
      <header className="w-full bg-[#0a0808] py-2">
        <nav
          className="
    flex flex-wrap
    items-center
    justify-between
    max-w-[1100px] mx-auto
    
    py-4
    md:py-0
    
    text-lg 
    text-white
  "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div
            className="hidden w-full md:flex md:items-center md:w-auto"
            id="menu"
          >
            <ul
              className="
        pt-4
        text-base text-gray-700
        md:flex
        md:justify-between 
        md:pt-0"
            >
              <li>
              <Link to="/">
                <a
                  className={`header-link ${
                    checkLocation("/") ? "text-gray-300" : "text-white"
                  }`}
                  href="#"
                >
                  HOME
                </a>
              </Link>
                
              </li>
              <li>
              <Link to="/about-me">
                <a
                  className={`header-link ${
                    checkLocation("/about-me") ? "text-gray-300" : "text-white"
                  }`}
                  href="#"
                >
                  ABOUT ME
                </a>
                </Link>
              </li>
              <li>
                <div className="dropdown group inline  relative cursor-pointer">
                  <a
                    className={`header-link group-hover:text-white/80 ${
                      checkLocation("/services")
                        ? "text-gray-300"
                        : "text-white"
                    }`}
                    href="#"
                  >
                    SERVICES
                  </a>
                  <div className="dropdown-menu top-5 absolute hidden h-auto flex pt-4 group-hover:block transition-all max-h-screen ease-in-out duration-300 ">
                    <ul className=" block w-full bg-black shadow p-8">
                      <div>
                        <li
                          id="menu-item-89"
                          className="menu-item menu-item-89"
                        >
                          <a href="https://drjamespsychicspells.com/cleansing-banish-and-remove-negativity/">
                            Cleansing/Banish &amp; Remove Negativity
                          </a>
                        </li>
                        <li
                          id="menu-item-90"
                          className="menu-item menu-item-90"
                        >
                          <a href="https://drjamespsychicspells.com/fertility-pregnancy-spell/">
                            Fertility/Pregnancy Spell
                          </a>
                        </li>
                        <li
                          id="menu-item-91"
                          className="menu-item menu-item-91"
                        >
                          <a href="https://drjamespsychicspells.com/forgiveness-reconcilation-spell/">
                            Forgiveness/Reconciliation Spell
                          </a>
                        </li>
                        <li
                          id="menu-item-92"
                          className="menu-item menu-item-92"
                        >
                          <a href="https://drjamespsychicspells.com/hex-cursejinx-removal/">
                            Hex/Curse &amp; Jinx Removal
                          </a>
                        </li>
                        <li
                          id="menu-item-94"
                          className="menu-item menu-item-94"
                        >
                          <a href="https://drjamespsychicspells.com/job-promotionprosperity-spell/">
                            Job/Promotion &amp; Prosperity Spell
                          </a>
                        </li>
                        <li
                          id="menu-item-95"
                          className="menu-item menu-item-95"
                        >
                          <a href="https://drjamespsychicspells.com/love-spell/">
                            Love Spell
                          </a>
                        </li>
                        <li
                          id="menu-item-96"
                          className="menu-item menu-item-96"
                        >
                          <a href="https://drjamespsychicspells.com/money-attraction-lottery-spell/">
                            Money Attraction /Lottery Spell
                          </a>
                        </li>
                        <li
                          id="menu-item-97"
                          className="menu-item menu-item-97"
                        >
                          <a href="https://drjamespsychicspells.com/protection-spell/">
                            Protection Spell
                          </a>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a
                  className={`header-link ${
                    checkLocation("/testimonies")
                      ? "text-gray-300"
                      : "text-white"
                  }`}
                  href="#"
                >
                  TESTIMONIES
                </a>
              </li>
              <li>
                <a
                  className={`header-link ${
                    checkLocation("/contact") ? "text-gray-300" : "text-white"
                  }`}
                  href="#"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="bg-white w-full">
        <div className="max-w-[1100px] mx-auto bg-white   w-full h-32">
          <h1 className="float-left mx-auto mb-0 font-light py-[3%] px-[1rem] text-[2.5em] text-black">
            {title.toUpperCase()}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
