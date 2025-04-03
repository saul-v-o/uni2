import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      textAlign: "center",
      flexDirection: "column"
    }}>
      <h1>Este es el Home</h1>
      <p>Saúl Valenzuela Osuna.</p>
    </div>
  );
}

export default Home;
