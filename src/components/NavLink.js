import React from 'react'

const NavLink = ({href, title}) => {
    return (
        <a className="navLink" href={href}>
            {title}
        </a>
    );
};

export default NavLink