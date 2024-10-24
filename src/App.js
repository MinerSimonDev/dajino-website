import './App.css';
import Navbar from './components/navbar.tsx';
import Dajino from './components/dajino.tsx';
import Gigs from './components/gigs.tsx';
import Impressum from './components/impressum.tsx';
import React, { useRef } from 'react';

import { motion, useInView } from 'framer-motion';

function App() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="App">
      <Navbar />
      <Dajino />
      <motion.div
        ref={ref}
        initial={{ y: '-15vh', opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ type: 'spring', stiffness: 50, duration: 1.5 }}
      >
        <Gigs
          path1='/images/dajino1.jpg'
          path2='/images/dajino2.jpg'
          path3='/images/dajino3.jpg'
        />
      </motion.div>
      <Impressum />
    </div>
  );
}

export default App;
