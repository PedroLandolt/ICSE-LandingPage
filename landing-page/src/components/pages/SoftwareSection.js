import React from "react";
import "../css/SoftwareSection.css";

function SoftwareSection() {
    return (
        <>
            <div className="software-section">
                <div className="software-container">
                    <div className="software-container-row">
                        <div className="software-container-col">
                            <div className="software-img-wrapper">
                                <img src="images/pngegg.png" alt="Software" className="software-img" />
                            </div>
                        </div>
                        <div className="software-container-col">
                            <div className="software-text-wrapper">
                                <h1 className="heading">Software Engineering</h1>
                                <p className="description">
                                    Software engineering is crucial in shaping the digital landscape, ensuring efficient and reliable software systems that power our modern world.
                                    It encompasses the systematic design, development, testing, and maintenance of software, driving innovation and progress across industries.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SoftwareSection;

