import React from "react";
import "../css/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="footer-section">
                <div className="footer-container">
                    <div className="footer-logo">
                        <Link to="/" className="footer-logo-link">
                            <img src="images/logo-3.png" alt="logo" />
                        </Link>
                    </div>
                    <div className="footer-links">
                        <Link to="https://twitter.com/ICSEconf" target="_blank" className="footer-link">
                            <i className="fab fa-twitter"></i> @ICSEconf
                        </Link>
                        <p className="footer-link">
                            <i className="fas fa-envelope"></i> email@email.com
                        </p>
                    </div>
                </div>
                <div className="footer-copywrite">
                    <p>© 2024 ICSE. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer;
