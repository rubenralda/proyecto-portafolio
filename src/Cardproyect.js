import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import Carrusel from "./CarouselImage";

export default function MultiActionAreaCard({
  title,
  descripcion,
  images,
  repositorio,
}) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <Carrusel images={images} interval={4000}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => abrirEnlace(repositorio)}
        >
          Ver repositorio
        </Button>
      </CardActions>
    </Card>
  );
}

function abrirEnlace(enlace) {
  window.open(enlace, "_blank");
}
