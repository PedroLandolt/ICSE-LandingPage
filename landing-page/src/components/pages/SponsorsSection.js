import React from "react";
import "../css/SponsorsSection.css";
import { Link } from "react-router-dom";
import { Button } from "./Button";

function SponsorsSection() {
    return (
        <>
            <div className="sponsors-section">
                <div className="sponsors-container">
                    <div className="sponsors-text">
                        <h1>Sponsors</h1>
                        <p>Our sponsors are the best in the world.</p>
                        <div className="sponsors-btns">
                            <Link to="/sponsors">
                                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Learn More</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SponsorsSection;