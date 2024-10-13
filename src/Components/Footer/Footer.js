import React from "react";
import Button from '../UI/Button'
import { Link } from "react-router-dom";
import './Footer.css'

function Footer(){
    return(
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                Abonnieren Sie unseren Newsletter, um über unsere Tourenangebote informiert zu werden.
                </p>
                <p className="footer-subscription-text">
                Sie können Ihre Mitgliedschaft jederzeit kündigen.
                </p>
                <div>
                    <form className="input-areas">
                        <input className="footer-input" type="email" placeholder="Bitte geben Sie Ihre E-Mail-Adresse ein" />
                        <Button buttonStyle="btn--special">Mitgliedschaft</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>über uns</h2>
                        <Link to="/">Stellenangebote</Link>
                        <Link to="/">Kontaktieren Sie uns</Link>
                        <Link to="/">Arbeiten Sie mit uns zusammen</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Führung</h2>
                        <Link to="/">Sitemap</Link>
                        <Link to="/">Häufig gestellte Fragen</Link>
                        <Link to="/">Privatsphäre</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Reservierung</h2>
                        <Link to="/">Hotelreservierung</Link>
                        <Link to="/">Flugticketreservierung</Link>
                        <Link to="/">Reservierung von Bahntickets</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Soziale Netzwerke</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Twitter</Link>
                        <Link to="/">Linkdin</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            Reisen <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rights">
                        Reisen &copy; 2024
                    </small>
                    <div className="social-icons">
                        <Link
                        className="social-icon-link facebok"
                        to="/"
                        >
                            <i className="fab fa-facebook-f"/>
                        </Link>
                        <Link
                        className="social-icon-link instagram"
                        to="/"
                        >
                            <i className="fab fa-instagram"/>
                        </Link>
                        <Link
                        className="social-icon-link twitter"
                        to="/"
                        >
                            <i className="fab fa-twitter"/>
                        </Link>
                        <Link
                        className="social-icon-link linkedin"
                        to="/"
                        >
                            <i className="fab fa-linkedin"/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;