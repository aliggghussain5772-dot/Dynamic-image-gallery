import { useState, useEffect } from "react";
import {
    FaImages,
    FaSearch,
    FaBars,
    FaTimes,
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ searchTerm, setSearchTerm }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={sticky ? "navbar sticky" : "navbar"}>
            <div className="container navbar-container">

                {/* Logo */}
                <div className="logo">
                    <FaImages className="logo-icon" />
                    <span>ImageHub</span>
                </div>

                {/* Search */}

                <div className="search-box">

                    <FaSearch className="search-icon" />

                    <input
                        type="text"
                        placeholder="Search beautiful images..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                </div>

                {/* Desktop Menu */}

                <ul className={menuOpen ? "nav-links active" : "nav-links"}>

                    <li>
                        <a href="#">Home</a>
                    </li>

                    <li>
                        <a href="#gallery">Gallery</a>
                    </li>

                    <li>
                        <a href="#footer">Contact</a>
                    </li>

                </ul>

                {/* Mobile Button */}

                <div
                    className="menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;