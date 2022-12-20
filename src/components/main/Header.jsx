import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {

    return (
        <div className='header'>
            <div className='header-navBar'>
                <Link className='logo' to='/'>Moodle</Link>
                <nav className='nav-bar'>
                    <Link className='login' to='/login'>Login</Link>
                    {/* <Link className='professors' to='/professor'>Professor</Link> */}
                    {/* <Link className='students'></Link>  */}
                </nav>
            </div>
        </div>
    );
}

export default Header;