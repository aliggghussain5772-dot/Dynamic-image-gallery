import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaHeart
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="container footer-container">

                <div className="footer-content">

                    <h2>ImageHub</h2>

                    <p>
                        Explore thousands of beautiful images powered by the Pixabay API.
                    </p>

                </div>

                <div className="social-icons">

                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>

                    <a href="mailto:your@email.com">
                        <FaEnvelope />
                    </a>

                </div>

                <div className="copyright">

                    <p>
                        Made with <FaHeart className="heart" /> by Ali Hussain
                    </p>

                    <p>
                        © {new Date().getFullYear()} ImageHub. All Rights Reserved.
                    </p>

                </div>

            </div>
        </footer>
    );
};

export default Footer;