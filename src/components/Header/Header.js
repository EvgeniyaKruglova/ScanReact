import React from 'react';
import './Header.css';
import Logo from './Logo';
import BeforeAllauth from './BeforeAllauth';
import AfterAllauth from './AfterAllauth';
import NavBar from './NavBar';
import BurgerMenu from './HeadMenu';
import { useSelector } from 'react-redux';

function Header() {
  const accountInfo = useSelector((state)=>state.profile.companyInfo);
    const AccountElement = accountInfo ? AfterAllauth : BeforeAllauth
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <Logo />
        <NavBar />
        <AccountElement />
        <BurgerMenu />
      </div>  
    </header>
  )
}

export default Header
