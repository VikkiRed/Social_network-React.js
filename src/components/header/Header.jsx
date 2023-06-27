import './header.css';

import logo from "./../../img/logo.svg";

const Header = () => {
    return (  
        <div className='header-wrapper'>
            <header>
                <div className='logo-container'>
                    
                    <img className='logo-icon' src={logo} alt="logo" />
                </div>
                
            </header>
        </div>
    
    );
}
 
export default Header;