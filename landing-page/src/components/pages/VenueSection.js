import React from "react";
import "../css/VenueSection.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function VenueSection() {
    return (
        <>
            <div className="venue-section">
                <div className="venue-container">
                    <div className="venue-container-row">
                        <div className="venue-container-col">
                            <div className="venue-text-wrapper">
                                <h1 className="venue-heading">Centro Cultural de Belém</h1>
                                <h2 className="venue-subheading">April</h2>
                                <h3 className="venue-subheading">12th - 20th</h3>
                                <Link to="https://www.ccb.pt/">
                                    <Button buttonStyle="btn-primary" buttonSize='btn--wide' buttonColor='primary'>EXPLORE</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="venue-container-col-special">
                            <div className="venue-img-wrapper">
                                <img src="images/venueSection/CCB-2.jpg" alt="Venue" className="venue-img" width='100%' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VenueSection;
