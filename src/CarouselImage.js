import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Slide } from "@mui/material";

function SwipeableTextMobileStepper({ images, interval }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [isSlideIn, setIsSlideIn] = React.useState(true);
  const maxSteps = images.length;

  const handleNext = () => {
    setIsSlideIn(false)
    setTimeout(() => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
        setIsSlideIn(true)
    }, 250);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, interval);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, [activeStep, interval]);

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      {
        <Slide
          direction="left"
          in={isSlideIn}
          timeout={250}
          mountOnEnter unmountOnExit
        >
             <img
              style={{
                height: 255,
                display: "block",
                maxWidth: 400,
                overflow: "hidden",
                width: "100%",
              }}
              src={images[activeStep]}
              alt={`Imagen ${activeStep + 1}`}
            ></img>
          {/**
                 * <Box
              component="img"
              sx={{
                height: 255,
                display: "block",
                maxWidth: 400,
                overflow: "hidden",
                width: "100%",
              }}
              src={images[activeStep]}
              alt={images[activeStep]}
            />
                 */}
        </Slide>
      }
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Siguiente
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Anterior
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
