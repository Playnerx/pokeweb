import { useState, useRef, useEffect } from 'react';
import userAvatar from "../assets/img/user.png";
import homeIcon from "../assets/img/house-solid.png";
import pokeIcon from "../assets/img/pokeball.bafce1b0.jpg";
import buildIcon from "../assets/img/pen-to-square-regular.png";
import { NavLink } from 'react-router-dom';

// Dropdown Menu
const DropdownMenu = () => {
  return (
    <ul className="w-full text-center">
      <li className="my-2"><NavLink to="/" className="hover:text-white font-bold block px-4 py-2 hover:bg-[black]">Home</NavLink></li>
      <li className="my-2"><NavLink to="/pokedex" className="hover:text-white font-bold block px-4 py-2 hover:bg-[black]">Pokédex</NavLink></li>
      <li className="my-2"><NavLink to="/teams" className="hover:text-white font-bold block px-4 py-2 hover:bg-[black]">Teams</NavLink></li>
      <li className="my-2"><p className="hover:text-white font-bold block px-4 py-2 hover:bg-[black]">Logout</p></li>
    </ul>
  );
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='fullNavbar navbarBorder'>
      <div className="navbar max-2xl:w-[80%] flex justify-between items-center mx-auto">
        <div className='w-max'>
          <div>
            <NavLink to="/"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/581e2efc-8fab-47ca-9536-3770aab24ea4/d2joc5j-c2562d13-9dbe-4747-b70b-03e25d3abb80.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4MWUyZWZjLThmYWItNDdjYS05NTM2LTM3NzBhYWIyNGVhNFwvZDJqb2M1ai1jMjU2MmQxMy05ZGJlLTQ3NDctYjcwYi0wM2UyNWQzYWJiODAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7RCqdHsS0eXFQ4PjKi-Nusb3gfY259k3RIeHZv4rlKs" width={60} /></NavLink>
          </div>
        </div>

        {/* Menu hamburger */}
        <div className="lg:hidden" ref={dropdownRef}>
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m0 6h-16" />
              )}
            </svg>
          </button>
          {/* Dropdown del menu */}
          <div className={`${menuOpen ? 'h-[200px]' : 'h-0'} z-50 overflow-hidden flex justify-center items-center absolute left-0 w-full bg-white duration-500 mt-[28px] shadow-[0_5px_10px_rgba(0,0,0,.25)]`}>
            <DropdownMenu />
          </div>
        </div>

        {/* Menu centrato */}
        <div className='centralNavbar hidden lg:block'>
          <ul className='flex justify-between'>
            <li className='navMenu marginNav font-bold text-white'>
              <NavLink to="/" className={({isActive}) => {
                return `h-[98px] items-center px-7 ${isActive ? 'navActive' : ''}`
                }}>
                <p><img className='iconImage mx-auto mb-2' src={homeIcon} alt="Home Icon" /></p>
                <p>Home</p>
              </NavLink>
            </li>
            <li className='navMenu marginNav font-bold text-white'>
              <NavLink to="/pokedex" className={({isActive}) => {
                return `h-[98px] items-center px-7 ${isActive ? 'navActive' : ''}`
                }}>
                <p><img className='iconImage mx-auto mb-2' src={pokeIcon} alt="Poké Icon" /></p>
                <p>Pokédex</p>
              </NavLink>
            </li>
            <li className='navMenu font-bold text-white'>
              <NavLink to="/teams" className={({isActive}) => {
                return `h-[98px] items-center px-7 ${isActive ? 'navActive' : ''}`
                }}>
                <p><img className='iconImage mx-auto mb-2' src={buildIcon} alt="Build Icon" /></p>
                <p>Teams</p>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Menu LogIn */}
        <div className="endNavbar hidden lg:flex items-center">
  <div className="relative">
    <button
      className="focus:outline-none flex items-center"
      onClick={toggleMenu}
    >
      <div className="flex flex-col items-center">
        <img className='iconImage' src={userAvatar} alt="User Avatar" />
        <p className="text-white mt-2 font-semibold">Nome_Utente</p>
      </div>
    </button>
    {menuOpen && (
      <div className="z-10 absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
        <a
          href="#"
          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
        >
          Logout
        </a>
      </div>
    )}
  </div>
</div>

      </div>
    </div>
  );
}