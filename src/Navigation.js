import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

const Navigation = ({ onSectionChange }) => {
  return (
    <div className="navigation">
      <ListGroup className="app" defaultActiveKey="about">
        <ListGroup.Item onClick={() => onSectionChange("about")} eventKey="about" variant="dark">
          Sobre mí
        </ListGroup.Item>
        <ListGroup.Item  onClick={() => onSectionChange("estudios")} eventKey="estudios" variant="dark">
          Estudios
        </ListGroup.Item>
        <ListGroup.Item onClick={() => onSectionChange("proyectos")} eventKey="proyectos" variant="dark">
          Proyectos
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Navigation;
