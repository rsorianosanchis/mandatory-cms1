import React from 'react';
import {Link} from 'react-router-dom';

const Header = ()=> (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
            <Link to='/articleslist' className='navbar-brand '>
                Sjömans loggbok
            </Link>
            <ul className='navbar-nav mr-auto'>
                <li className='nav-item'><Link toto='/articleslist' className='nav-link'>Artiklar</Link></li>
                <li className='nav-item'><Link toto='/articleslist' className='nav-link'>Författare</Link></li>
            </ul>
        </div>
    </nav>

);

export default Header;