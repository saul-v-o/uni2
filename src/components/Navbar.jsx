import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      background: "#40c54a",
      padding: "15px",
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      color: "white",
    }}>
      <Link to="/" style={{ color: "black" }}>Home</Link>
    
      <Link to="/map" style={{ color: "black" }}>Map</Link>
      <Link to="/mapRoute" style={{ color: "black" }}>Mapa con Ruta</Link>
      <Link to="/mapClusters" style={{ color: "black" }}>Mapa con Clusters</Link>
      <Link to="/mapDrawingTools" style={{ color: "black" }}>Mapa con Drawing Tools</Link>
      <Link to="/mapDirection" style={{ color: "black" }}>Mapa con Directions</Link>
      <Link to="/about" style={{ color: "black" }}>About</Link>
      <Link to="/contact" style={{ color: "black" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
