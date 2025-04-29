import React, {useState} from 'react';

const navLinks = [
    {
        title:"Book Search",
        path: "#bookSearch",
    }
]

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="NavBar">
            <a className="title" href={'/'}>
                <h1>my<b>reads</b></h1>
            </a>
            <div className="menu" id="navbar">
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                           <a href = {link.path}>
                               {link.title}
                           </a>
                        </li>
                    ))}
                </ul>
            </div>
            {navbarOpen ?
                <ul className="menu-overlay">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href = {link.path}>
                                {link.title}
                            </a>
                        </li>
                        ))
                    }
                </ul>
                : null
            }

        </nav>
    )
}

export default NavBar;
