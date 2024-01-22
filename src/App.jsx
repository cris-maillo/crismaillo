import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Background from './components/Background';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Film from './components/Film';
import Projects from './components/Projects/Projects';
import Text from './components/Texts/Text';
import Toolbox from './components/Toolbox/Toolbox';
import Cook from './components/Food/Cook';

function App() {
  return (
    <Router>
      <Background/>
      <Banner/>
      <Header/>
      <NavBar/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/film" element={<Film />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/text" element={<Text />} />
          <Route path="/toolbox" element={<Toolbox />} />
          <Route path="/cook" element={<Cook />} />
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

