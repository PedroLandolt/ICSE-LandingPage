import React from "react";
import "../css/KeynotesSection.css";
import { Link } from "react-router-dom";
import { Button } from "./Button";

function KeynotesSection() {
    return (
        <>
            <div className="keynotes-section">
                <div className="keynotes-wrapper">
                    <h1 className="keynotes-heading">Keynotes</h1>
                    <div className="keynotes-container">
                        <div className="keynotes-card">
                            <div className="keynotes-card-info">
                                <h2>Rupak Majumdar</h2>
                                <img src="images/keynotes/rupak_majumdar.jpg" alt="Rupak Majumdar" />
                                <p>Challenges and Opportunities in Model Checking Large-scale Distributed Systems</p>
                            </div>
                        </div>
                        <div className="keynotes-card">
                            <div className="keynotes-card-info">
                                <h2>Martin Rinard</h2>
                                <img src="images/keynotes/martin_rinard.jpg" alt="Martin Rinard" />
                                <p>Software Engineering in a World with Generative AI</p>
                            </div>
                        </div>
                        <div className="keynotes-card">
                            <div className="keynotes-card-info">
                                <h2>Carol Smith</h2>
                                <img src="images/keynotes/carol_smith.jpg" alt="Carol Smith" />
                                <p>Trustworthy by Design</p>
                            </div>
                        </div>
                    </div>
                    <Link to="https://conf.researchr.org/attending/icse-2024/keynotes" className="keynotes-btn">
                        <Button buttonStyle="btn--outline" buttonSize="btn--wide" buttonColor="secondary">DETAILS</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default KeynotesSection;