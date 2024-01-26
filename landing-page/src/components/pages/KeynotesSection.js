import React from "react";
import "../css/KeynotesSection.css";
import { Link } from "react-router-dom";
import { Button } from "./Button";

function KeynotesSection() {
    return (
        <>
            <div className="keynotes-section">
                <div className="keynotes-container">
                    <div className="keynotes-text">
                        <h1>Keynotes</h1>
                        <p>Our keynotes are the best in the world.</p>
                        <div className="keynotes-btns">
                            <Link to="/keynotes">
                                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Learn More</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KeynotesSection;