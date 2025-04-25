import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Mapa from "./components/Mapa";

function App() {
  return (
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
    </Routes>
  </div>
</Router>

  );
}

export default App;



/** 
 * ACTIVIDAD 9 - Consumir una API y llenar tabla usando fetch
 * 
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

export default function UsersTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 800, margin: "auto", mt: 4 }}>
      <Typography variant="h6" align="center" sx={{ my: 2 }}>Lista de Usuarios</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Usuario</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}*/



/**
 * ACTIVIDAD 7    -   Creación de tabla con MUI
 * 
 * const usersList = [
    {name:"Juan", lastName:"Mendoza", age:17}, 
    {name:"Luis", lastName:"Pérez", age:16}, 
    {name:"Jorge", lastName:"Fernández", age:21}]

    return (
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Edad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersList.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
 */



/** ACTIVIDAD 8   -    USO DE useContext
 * 
 * 
 * import { createContext, useContext, useState } from "react";

// Crear el contexto de autenticación
const AuthContext = createContext();

// Proveedor del contexto
function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  // Función para iniciar sesión
  const login = () => {
    setUsuario({ nombre: "Juan Pérez", correo: "juan@example.com" });
  };

  // Función para cerrar sesión
  const logout = () => {
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado para usar el contexto
function useAuth() {
  return useContext(AuthContext);
}

// Componente que muestra información del usuario
function PerfilUsuario() {
  const { usuario } = useAuth();

  return usuario ? (
    <div>
      <h2>Bienvenido, {usuario.nombre}</h2>
      <p>Correo: {usuario.correo}</p>
      <LogoutButton />
    </div>
  ) : (
    <p>No has iniciado sesión.</p>
  );
}

// Botón para iniciar sesión
function LoginButton() {
  const { login } = useAuth();
  return <button onClick={login}>Iniciar Sesión</button>;
}

// Botón para cerrar sesión
function LogoutButton() {
  const { logout } = useAuth();
  return <button onClick={logout}>Cerrar Sesión</button>;
}

// Componente principal
function App() {
  return (
    <AuthProvider>
      <h1>Sistema de Autenticación</h1>
      <PerfilUsuario />
      <LoginButton />
    </AuthProvider>
  );
}

export default App;

 */
