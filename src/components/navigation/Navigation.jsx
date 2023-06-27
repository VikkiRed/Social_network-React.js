import './navigation.css';


import 'boxicons';



const Navigation = () => {
    return (
        <div className="nav-wrapper">
            <nav>
                <ul>
                    <li className='nav-link'><a href='#!'>Profile</a></li>
                    <li className='nav-link'><a href='#!'>Messages</a></li>
                    <li className='nav-link'><a href='#!'>News</a></li>
                    <li className='nav-link'><a href='#!'>Music</a></li>
                 </ul>
                 <box-icon name="message"></box-icon>
                 <box-icon name="news"></box-icon>
                 <box-icon name="music"></box-icon>
                 <box-icon name="user"></box-icon>
            </nav>
            
        </div>
        
    );
}
 
export default Navigation;