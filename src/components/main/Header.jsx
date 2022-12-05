import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {

    return (
        <div className='header'>
            <div className='header-navBar'>
                <div className='logo'>Moodle</div>
                <nav className='nav-bar'>
                    <Link className='login' to='/login'>Login</Link>
                    {/* <Link className='professors'></Link>
                    <Link className='students'></Link> */}
                </nav>
            </div>
        </div>
    );
}

export default Header;