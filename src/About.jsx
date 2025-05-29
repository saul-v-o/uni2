function About() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      textAlign: "center",
      flexDirection: "column",
      padding: "20px",
      backgroundColor: "#f4f6f8",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#222",
    }}>
      <h1 style={{ fontSize: "2.8rem", fontWeight: "700", marginBottom: "15px" }}>
        Sobre mí
      </h1>
      <p style={{ maxWidth: "600px", fontSize: "1.2rem", lineHeight: "1.6" }}>
        Hola, soy <strong>Saúl Valenzuela Osuna</strong>, desarrollador de software con
        pasión por crear soluciones tecnológicas que mejoren la vida de las personas.
        Tengo experiencia en diversas tecnologías y me encanta aprender y enfrentar
        nuevos retos en el mundo de la programación.
      </p>
      <p style={{ maxWidth: "600px", fontSize: "1.1rem", lineHeight: "1.5", marginTop: "20px", color: "#555" }}>
        Este proyecto es una muestra de mis habilidades y compromiso con la calidad y la innovación.
        Si quieres saber más o colaborar, no dudes en contactarme.
      </p>
    </div>
  );
}

export default About;
