import './navigation.css';

import { NavLink } from 'react-router-dom';
import Friends from './../friends/Friends';


const Navigation = () => {

    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    return (
            <nav className='nav'>
               
                <ul className='nav-list'>
                    <li className='nav-list__item'>
                        <NavLink to='/Profile' className={({isActive}) => isActive ? activeLink : normalLink}>Profile
                        </NavLink>
                    </li>
                    <li className='nav-list__item'><NavLink to='/Dialogues' className={({isActive}) => isActive ? activeLink : normalLink}>Messages</NavLink></li>
                    <li className='nav-list__item'><NavLink to='/News' className={({isActive}) => isActive ? activeLink : normalLink}>News</NavLink></li>
                    <li className='nav-list__item'><NavLink to='/Music' className={({isActive}) => isActive ? activeLink : normalLink}>Music</NavLink></li>
                    <li className='nav-list__item'><NavLink to='/Settings' className={({isActive}) => isActive ? activeLink : normalLink}>Settings</NavLink></li>
                    <li className='nav-list__item'><NavLink to='/Users' className={({isActive}) => isActive ? activeLink : normalLink}>Users</NavLink></li>
                </ul>

                <Friends />
            </nav>
         

    );
}

export default Navigation;