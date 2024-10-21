import React from 'react';
import '../styles/gigs.css';

type Props = {
  path1: string;
  path2: string;
  path3: string;
}

export default function Gigs({ path1, path2, path3 }: Props) {
  return (
    <div className="gigs" id='gigs'>
      <div className="gigs-container-1">
        <img src={path1} alt='1' />
      </div>
      <div className="gigs-container-2">
        <img src={path2} alt='2' />
      </div>
      <div className="gigs-container-3">
        <img src={path3} alt='3' />
      </div>
    </div>
  )
}
