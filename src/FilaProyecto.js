import * as React from "react";
import Badge from "react-bootstrap/Badge";
import { Button } from "@mui/material";

export default function MultiActionAreaCard({
  year,
  title,
  descripcion,
  tags,
  repositorio,
}) {
  return (
    <>
      <td>{year}</td>
      <td>{title}</td>
      <td>{descripcion}</td>
      <td>
        {tags.map((valor, index) => (
          <Badge bg="" key={index} style={{marginRight : "5px", backgroundColor :"#E7E8AD", color: "black"}}>
            {valor}
          </Badge>
        ))}
      </td>
      <td>
        <Button
          size="small"
          color="primary"
          onClick={() => abrirEnlace(repositorio)}
        >
          Ver repositorio
        </Button>
      </td>
    </>
  );
}

function abrirEnlace(enlace) {
  window.open(enlace, "_blank");
}
