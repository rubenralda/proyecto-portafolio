import { datos } from "./datosProyect";
import Card from "./Cardproyect";
import Grid from "@mui/material/Grid";

export default function ListCard() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={3}>
          {datos.map((valor, index) => (
            <div key={index}>
              <Card
                title={valor.title}
                descripcion={valor.descripcion}
                images={valor.carruselImage}
                repositorio={valor.repositorio}
              />
            </div>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
