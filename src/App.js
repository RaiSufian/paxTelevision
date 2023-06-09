import './App.css';
import React, { useState } from "react"
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Header from './components/header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/footer';
import AboutUs from './pages/aboutUs';
import Stream from './pages/stream';
import Login from './pages/login';
import SignUp from './pages/signup';
import WebSeries from './pages/webseries';
import WebSeriesEpisodes from './pages/episides';
import 'react-multi-carousel/lib/styles.css';


function App() {

  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webserices/:id" element={<WebSeries />} />
        <Route path="/webserices/web-series-episodes/:id" element={<WebSeriesEpisodes />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/stream-buy" element={<Stream />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
