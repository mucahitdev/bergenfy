import './App.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Musics from './pages/Musics';
import Navbar from './components/Navbar';





function App() {


  return (
    <div className="App">
      <Navbar />


      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="musics" element={<Musics />} />
      </Routes>

    </div>
  );
}

export default App;


