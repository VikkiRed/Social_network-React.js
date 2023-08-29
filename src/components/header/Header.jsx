import { NavLink } from 'react-router-dom';

import './header.css';

import logo from "./../../img/logo.svg";
import lightTheme from "./../../img/sun.svg";
import darkTheme from "./../../img/moon.svg";

const Header = () => {
    return (  
        <div className='header-wrapper'>
            <header className='header'>
                <div className='logo-container'>
                    <NavLink to="/Profile">
                        <img className='logo-icon' src={logo} alt="logo" />
                        <div className='logo-show-animate'>
                            <div class="logo-text-animate">
                                <h1>Social network</h1>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className='dark-mode-btn-container'>
                    <button class="dark-mode-btn">
                        <img src={lightTheme} alt="Light mode" class="dark-mode-btn__icon" />
                        <img src={darkTheme} alt="Dark mode" class="dark-mode-btn__icon" />
                    </button>
                </div>
                
            </header>
        </div>
    
    );
}
 
export default Header;