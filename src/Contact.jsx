function Contact() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      textAlign: "center",
      flexDirection: "column",
      backgroundColor: "#f9fafb",
      padding: "20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#333",
    }}>
      <h1 style={{ marginBottom: "10px", fontWeight: "700", fontSize: "2.5rem" }}>
        Contacto
      </h1>
      <p style={{ maxWidth: "400px", marginBottom: "30px", fontSize: "1.1rem", lineHeight: "1.6" }}>
        ¡Hola! Soy Saúl Valenzuela Osuna. Si tienes alguna pregunta, sugerencia o quieres colaborar,
        no dudes en escribirme. Estaré encantado de responderte lo antes posible.
      </p>
      
      <form style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        width: "100%",
        maxWidth: "400px",
      }}>
        <input
          type="text"
          placeholder="Tu nombre"
          style={{
            padding: "10px",
            fontSize: "1rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            outline: "none",
            transition: "border-color 0.3s",
          }}
          onFocus={e => e.target.style.borderColor = "#2196F3"}
          onBlur={e => e.target.style.borderColor = "#ccc"}
          required
        />
        <input
          type="email"
          placeholder="Tu correo electrónico"
          style={{
            padding: "10px",
            fontSize: "1rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            outline: "none",
            transition: "border-color 0.3s",
          }}
          onFocus={e => e.target.style.borderColor = "#2196F3"}
          onBlur={e => e.target.style.borderColor = "#ccc"}
          required
        />
        <textarea
          placeholder="Tu mensaje"
          rows="5"
          style={{
            padding: "10px",
            fontSize: "1rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            resize: "vertical",
            outline: "none",
            transition: "border-color 0.3s",
          }}
          onFocus={e => e.target.style.borderColor = "#2196F3"}
          onBlur={e => e.target.style.borderColor = "#ccc"}
          required
        />
        <button
          type="submit"
          style={{
            padding: "12px",
            fontSize: "1.1rem",
            backgroundColor: "#2196F3",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={e => e.target.style.backgroundColor = "#1976D2"}
          onMouseLeave={e => e.target.style.backgroundColor = "#2196F3"}
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}

export default Contact;
