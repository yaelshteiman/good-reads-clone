import React from 'react';
import NavLink from "./NavLink";

const navLinks = [
    {
        title:"Search",
        path: "#bookSearch",
    },
    {
        title:"Bookshelves",
        path: "#bookshelves",
    }
]

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
                           <NavLink href={link.path} title={link.title}/>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
