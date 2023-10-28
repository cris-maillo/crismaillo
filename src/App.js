import './index.css'
import LandingPage from './components/LandingPage';
import Background from './components/Background';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Background/>
      <Banner/>
      <Header/>
      <NavBar/>
      <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;
