import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Background from './components/Background';
import NavBar from './components/NavBar';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Film from './components/Film';
import Projects from './components/Projects/Projects';
import Text from './components/Texts/Text';
import Cook from './components/Food/Cook';
import Article from './components/Texts/Article';

function App() {
  return (
    <Router>
      <Background/>
      <Header/>
      <NavBar/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/film" element={<Film />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/text" element={<Text />} />
          <Route path="/cook" element={<Cook />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
    </Router>
  );
}

export default App;

