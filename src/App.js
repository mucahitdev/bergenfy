import './App.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Musics from './pages/Musics';
import Navbar from './components/Navbar';
import Images from './pages/Images';





function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="musics" element={<Musics />} />
        <Route  path="images" element={<Images />} />
      </Routes>

    </div>
  );
}

export default App;


