import React from 'react';
import '../styles/navbar.css';
import Impressum from '../files/Impressum.pdf';

type Props = {}

export default function Navbar(props: Props) {
    return (
        <div className="navbar">
            <div className="navbar-container-1">
                <div className="navbar-title">
                    <span>DAJINO</span>
                </div>
            </div>
            <div className="navbar-container-2">
                <div className="navbar-categories">
                    <ul>
                        <li>
                            <a
                                href="#about"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.scrollTo(0, 0);
                                }}
                            >
                                About
                            </a>
                        </li>
                        <li><a href="#gigs">Upcoming gigs</a></li>
                        <li>
                            <a
                                href="https://www.instagram.com/shakeclubbing/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Shake Clubbing
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-container-3">
                <div className="navbar-socials">
                    <ul>
                        <li><a href='https://www.instagram.com/dajino_music/' target='_blank' rel='noreferrer'>Instagram</a></li>
                        <li><a href='https://www.tiktok.com/@dajino_music' target='_blank' rel='noreferrer'>Tiktok</a></li>
                        <li><a href={Impressum} download='Impressum & Datenschutz.pdf'>Impressum</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
