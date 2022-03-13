import './App.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Musics from './pages/Musics';
import Navbar from './components/Navbar';
import Images from './pages/Images';
import About from './pages/About';





function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="musics" element={<Musics />} />
        <Route  path="images" element={<Images />} />
        <Route  path="about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;


