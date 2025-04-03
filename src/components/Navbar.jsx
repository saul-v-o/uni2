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
      <Link to="/" style={{ marginRight: "15px", color: "black" }}>Home</Link>
      <Link to="/about" style={{ marginRight: "15px", color: "black" }}>About</Link>
      <Link to="/contact" style={{ color: "black" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
