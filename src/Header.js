import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Navigation from "./Navigation";
import Col from 'react-bootstrap/Col';

export default function Header({handleSectionChange}) {
  return (
    <Col className="header">
      <h1 style={{ fontSize: "80px", margin: "0px" }}>
        Rubén Ralda
      </h1>
      <h2 style={{ fontSize: "35px", margin: "0px" }}>
        Programador Junior
      </h2>
      <Navigation onSectionChange={handleSectionChange} />
      <SocialMedia />
    </Col>
  );
}

function SocialMedia() {
  return (
    <div style={{paddingTop :"200px"}}>
      <a href="https://github.com/rubenralda" rel="noreferrer" target="_blank">
        <IconButton>
          <GitHubIcon sx={{ color: "#D1D1D1" }} />
        </IconButton>
      </a>
      <a
        href="https://linkedin.com/in/rubén-alejandro-ralda-mejia-8499a6240"
        rel="noreferrer"
        target="_blank"
      >
        <IconButton>
          <LinkedInIcon sx={{ color: "#D1D1D1" }} />
        </IconButton>
      </a>
    </div>
  );
}
