import React from 'react'
import { HashLink } from 'react-router-hash-link';

const NavLink = ({to, title}) => {
    return (
        <HashLink smooth className="navLink" to={to}>
            {title}
        </HashLink>
    );
};

export default NavLink