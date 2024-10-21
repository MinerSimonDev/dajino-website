import React from 'react';
import '../styles/dajino.css';

type Props = {}

export default function dajino(props: Props) {
    return (
        <div className="dajino">
            <div className="dajino-container-1" id='about'>
                <span className='h1'>DAJINO</span>
                <span className='h3'>DJ @ SHAKE CLUBBING</span>
                <span className='h3 book-dajino-now'>
                    <a href='mailto:bookingsdajino@gmail.com'>BOOK DAJINO NOW</a>
                </span>
            </div>
        </div>
    )
}