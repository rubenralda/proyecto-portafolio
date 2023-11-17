import React from "react";
//import ListGroup from "react-bootstrap/ListGroup";

const Navigation = ({ handleSectionChange, selectedSection }) => {
  return (
    <>
      <nav className="navigation">
        <ul>
          <li onClick={() => handleSectionChange("about")} className={selectedSection === "about" ? "selected" : ""}>Sobre mí</li>
          <li onClick={() => handleSectionChange("estudios")} className={selectedSection === "estudios" ? "selected" : ""}>Estudios</li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
