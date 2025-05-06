import React from 'react';
import NavLink from "./NavLink";

const navLinks = [
    {
        title: "Search",
        to: "/#bookSearch"
    },
    {
        title: "Bookshelves",
        to: "/#bookshelves"
    }
];

const NavBar = () => {
    return (
        <nav className="navBar">
            <a className="title" href={'/'}>
                <h1><span className="my">my</span><b>reads</b></h1>
            </a>
            <div className="menu" id="navbar">
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                           <NavLink to={link.to} title={link.title}/>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
