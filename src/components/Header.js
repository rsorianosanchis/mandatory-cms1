import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = ()=> (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
            <NavLink to='/' className='navbar-brand '>
                Sjömans loggbok
            </NavLink>
            <ul className='navbar-nav mr-auto'>
                <li className='nav-item'><NavLink to='/' className='nav-link'>Artiklar</NavLink></li>
                <li className='nav-item'><NavLink to='/authorslist' className='nav-link' >Författare</NavLink></li>
            </ul>

        </div>
    </nav>

);

export default Header;