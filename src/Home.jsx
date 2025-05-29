import { Box, Typography, Grid, Card, CardActionArea, CardContent, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import MapIcon from "@mui/icons-material/Map";
import RouteIcon from "@mui/icons-material/AltRoute";
import ClusterIcon from "@mui/icons-material/Place";
import DrawIcon from "@mui/icons-material/Gesture";
import DirectionIcon from "@mui/icons-material/Directions";

const activities = [
  { title: "Mapa Básico", path: "/map", icon: <MapIcon sx={{ fontSize: 40 }} /> },
  { title: "Mapa con Ruta", path: "/mapRoute", icon: <RouteIcon sx={{ fontSize: 40 }} /> },
  { title: "Mapa con Clusters", path: "/mapClusters", icon: <ClusterIcon sx={{ fontSize: 40 }} /> },
  { title: "Herramientas de Dibujo", path: "/mapDrawingTools", icon: <DrawIcon sx={{ fontSize: 40 }} /> },
  { title: "Direcciones", path: "/mapDirection", icon: <DirectionIcon sx={{ fontSize: 40 }} /> },
];

const Home = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        background: `linear-gradient(to right, ${theme.palette.primary.light}10, ${theme.palette.primary.dark}10)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 4,
      }}
    >
      {/* Información personal */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Saúl Valenzuela Osuna
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Proyecto de integración con Google Maps usando React y Material UI. Explora las diferentes herramientas disponibles.
        </Typography>
      </Box>

      {/* Índice de actividades */}
      <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: 1200 }}>
        {activities.map((activity, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              elevation={3}
              sx={{
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
                borderRadius: 3,
              }}
            >
              <CardActionArea
                component={Link}
                to={activity.path}
                sx={{ p: 3, display: "flex", flexDirection: "column", alignItems: "center" }}
              >
                {activity.icon}
                <CardContent>
                  <Typography variant="h6" align="center">
                    {activity.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
