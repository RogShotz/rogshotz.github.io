import 'bootstrap/dist/css/bootstrap.min.css'; // Required for css rendering of elements
import './App.css';
import Link from 'react-scroll' // use this and youtube video to figure out clicking to new parts of profile or idk
import NavBar from './components/NavBar';
import Hero from './components/Hero'
import About from './components/About'
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Resume />
    </div>
  );
}

export default App;