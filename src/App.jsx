import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Mapa from "./components/Mapa";
import MapaRuta from "./components/MapaRuta";
import MapaClusters from "./components/MapaClusters";
import MapaDrawingTools from "./components/MapaDrawingTools";
import GoogleMapsProvider from "./components/GoogleMapsProvider";
import MapaDirection from "./components/MapaDirection";

function App() {
  return (
    <GoogleMapsProvider>
      <Router>
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          width: "100vw",
          paddingTop: "60px"
        }}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/map" element={<Mapa />} />
            <Route path="/mapRoute" element={<MapaRuta />} />
            <Route path="/mapClusters" element={<MapaClusters/>}/>
            <Route path="/mapDrawingTools" element={<MapaDrawingTools/>}/>
            <Route path="/mapDirection" element={<MapaDirection/>}/>
          </Routes>
        </div>
      </Router>
    </GoogleMapsProvider>
  );
}

export default App;