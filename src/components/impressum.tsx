import React from 'react'
import Impressum from '../files/Impressum.pdf';
import '../styles/impressum.css';

type Props = {}

export default function impressum({ }: Props) {
  return (
    <div className="impressum" id='impressum'>
      <ul>
        <li>
          <span><a href='https://simon-grimm.at'>© Simon Grimm</a></span>
        </li>
      </ul>
    </div>
  )
}