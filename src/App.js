import './App.css';
import Navbar from './components/navbar.tsx';
import Dajino from './components/dajino.tsx';
import Gigs from './components/gigs.tsx';
import Impressum from './components/impressum.tsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dajino />
      <Gigs
        path1='/images/dajino1.jpg'
        path2='/images/dajino2.jpg'
        path3='/images/dajino3.jpg'
      />
      <Impressum/>
    </div>
  );
}

export default App;
