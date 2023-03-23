import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Header from './components/header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>

  );
}

export default App;
