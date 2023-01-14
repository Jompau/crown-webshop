import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
            <div>Logo</div>
        </Link>
        <div className='nav-links-container'>
            <Link to='/shop' className='nav-link'>
                SHOP
            </Link>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Nav;