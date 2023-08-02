import React from 'react';
import s from './Navbar.module.scss';
import NavbarItems from './NavbarItems/NavbarItems';
import { useDispatch, useSelector } from 'react-redux';
import { setIsNavbarOpen } from '../../../redux/navCloseSlice';
import menu from '../../../assets/images/menu.svg';

export default function Navbar() {
  const dispatch = useDispatch();
  const isNavbarOpen = useSelector((state) => state.navClose.isNavbarOpen);

  const toggleNavbar = () => {
    dispatch(setIsNavbarOpen(!isNavbarOpen));
  };

  return (
    <div className={s.Navbar}>
      <button className={s.ToggleButton} onClick={toggleNavbar}>
        <img src={menu} alt="Menu" />
      </button>
      {isNavbarOpen && <NavbarItems isNavbarOpen={isNavbarOpen} onCloseNavbar={toggleNavbar} />}
    </div>
  );
}
