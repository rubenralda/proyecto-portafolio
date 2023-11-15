import React, { useState } from "react";
import Content from "./Content";
import Header from "./Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Proyectos from "./TablaProyectos";

export default function AppComponent() {
  const [selectedSection, setSelectedSection] = useState("about");
  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };
  return (
    <div className="container h-100 app">
      <section className="vh-100">
        <Row className="align-items-center">
          <Header handleSectionChange={handleSectionChange} />
          <Content selectedSection={selectedSection} />
        </Row>
      </section>
      <section className="vh-100" style={{ paddingTop: "5%" }}>
        <h1 style={{marginBottom : "25px"}}>Todos los proyectos</h1>
        <Proyectos />
      </section>
    </div>
  );
}
