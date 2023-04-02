import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Header from './components/header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/footer';
import AboutUs from './pages/aboutUs';
import Stream from './pages/stream';
import WebSeries from './pages/webseries';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webserices" element={<WebSeries />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/stream-buy" element={<Stream />} />
      </Routes>
      <Footer />

    </>

  );
}

export default App;
