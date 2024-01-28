import React from "react";
import "../css/SponsorsSection.css";
import { Link } from "react-router-dom";

function SponsorsSection() {

    const topSponsors = ['acm', 'ieee-cs', 'sigsoft', 'tcse'];
    const platSponsors = ['huawei'];
    const silverSponsors = ['google', 'bytedance'];
    const bronzeSponsors = ['oracle'];
    const exbBoothSponsors = ['blip'];
    const supporterSponsors = ['feup', 'inesc-id-lisboa', 'visit-portugal'];

    const sponsorsLinks = {
        'acm': 'https://www.acm.org/',
        'ieee-cs': 'https://www.computer.org/',
        'sigsoft': 'https://www2.sigsoft.org/',
        'tcse': 'https://scholarshipinfo.in/',
        'huawei': 'https://www.huawei.com/',
        'google': 'https://www.google.com/',
        'bytedance': 'https://www.bytedance.com/',
        'oracle': 'https://www.oracle.com/',
        'blip': 'https://blip.pt/',
        'feup': 'https://sigarra.up.pt/feup/pt/web_page.inicial',
        'inesc-id-lisboa': 'https://www.inesc-id.pt/',
        'visit-portugal': 'https://www.visitportugal.com/en'
    }


    return (
        <>
            <div className="sponsors-section">
                <div className="sponsors-container">
                    <div className="sponsors-title">
                        <h1>SPONSORS</h1>
                    </div>
                    <div className="sponsors-content">
                        <div className="sponsors-content-row">
                            <div className="sponsors-content-row-title">
                                <h2>Top Sponsors</h2>
                            </div>
                            <div className="sponsors-content-row-logos">
                                {topSponsors.map((sponsor, index) => {
                                    return (
                                        <div className="sponsors-content-row-logo" key={index}>
                                            <Link to={sponsorsLinks[sponsor]} target="_blank">
                                                <img src={`images/sponsors/${sponsor}.png`} alt={sponsor} />
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="sponsors-content-row">
                            <div className="sponsors-content-row-title">
                                <h2>Platinum Sponsors</h2>
                            </div>
                            <div className="sponsors-content-row-logos">
                                {platSponsors.map((sponsor, index) => {
                                    return (
                                        <div className="sponsors-content-row-logo" key={index}>
                                            <Link to={sponsorsLinks[sponsor]} target="_blank">
                                                <img src={`images/sponsors/${sponsor}.png`} alt={sponsor} />
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="sponsors-content-row">
                            <div className="sponsors-content-row-title">
                                <h2>Silver Sponsors</h2>
                            </div>
                            <div className="sponsors-content-row-logos">
                                {silverSponsors.map((sponsor, index) => {
                                    return (
                                        <div className="sponsors-content-row-logo" key={index}>
                                            <Link to={sponsorsLinks[sponsor]} target="_blank">
                                                <img src={`images/sponsors/${sponsor}.png`} alt={sponsor} />
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="sponsors-content-row">
                            <div className="sponsors-content-row-title">
                                <h2>Bronze Sponsors</h2>
                            </div>
                            <div className="sponsors-content-row-logos">
                                {bronzeSponsors.map((sponsor, index) => {
                                    return (
                                        <div className="sponsors-content-row-logo" key={index}>
                                            <Link to={sponsorsLinks[sponsor]} target="_blank">
                                                <img src={`images/sponsors/${sponsor}.png`} alt={sponsor} />
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="sponsors-content-row">
                            <div className="sponsors-content-row-title">
                                <h2>Exhibition Booth</h2>
                            </div>
                            <div className="sponsors-content-row-logos">
                                {exbBoothSponsors.map((sponsor, index) => {
                                    return (
                                        <div className="sponsors-content-row-logo" key={index}>
                                            <Link to={sponsorsLinks[sponsor]} target="_blank">
                                                <img src={`images/sponsors/${sponsor}.png`} alt={sponsor} />
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="sponsors-content-row">
                            <div className="sponsors-content-row-title">
                                <h2>Supporters</h2>
                            </div>
                            <div className="sponsors-content-row-logos">
                                {supporterSponsors.map((sponsor, index) => {
                                    return (
                                        <div className="sponsors-content-row-logo" key={index}>
                                            <Link to={sponsorsLinks[sponsor]} target="_blank">
                                                <img src={`images/sponsors/${sponsor}.png`} alt={sponsor} />
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SponsorsSection;