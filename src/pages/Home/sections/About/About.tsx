import { Container, styled, Typography } from "@mui/material";
import "../../../../style/style.css";
import Java from "../../../../assets/images/Java-Dark.svg";
import CSS from "../../../../assets/images/CSS.svg";
import Docker from "../../../../assets/images/Docker.svg";
import Git from "../../../../assets/images/Git.svg";
import HTML from "../../../../assets/images/HTML.svg";
import JavaScript from "../../../../assets/images/JavaScript.svg";
import MySQL from "../../../../assets/images/MySQL-Dark.svg";
import PostgrSQL from "../../../../assets/images/PostgreSQL-Dark.svg";
import Spring from "../../../../assets/images/Spring-Dark.svg";
import SQLite from "../../../../assets/images/SQLite.svg";
import React from "../../../../assets/images/react-svgrepo-com.svg";
import Typescript from "../../../../assets/images/typescript-icon-svgrepo-com.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const StyledAbout = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("xs")]: {
      paddingTop: "100px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "0",
    },
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "80%",
    maxWidth: "100px",
    borderRadius: "50%",
    border: `.1px solid ${theme.palette.primary.contrastText}`,
    margin: "0 auto",
    padding: "5px",
  }));

  const sliderSettings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          centerPadding: "5px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "5px",
        },
      },
    ],
  };

  return (
    <>
      <StyledAbout>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            paddingBottom: "50px",
          }}
        >
          <Typography color="#4f8e3e" variant="h1" textAlign="center">
            About Me
          </Typography>

          <Container
            sx={{
              backgroundColor: "#141313b8",
              borderRadius: "1rem",
              padding: "10px",
              border: "1px solid white",
            }}
          >
            <Typography color="primary.contrastText" fontSize="1.5rem">
              Greetings, 👋<br></br> <br></br>My name is Nicolas, I am 22 years
              old, and I am from Brazil. <br></br>
              <br></br> I am passionate about optimizing processes, automating
              tasks, and driving innovation to deliver high-quality software
              solutions. With a strong dedication to continuous improvement, I
              am always eager to tackle new challenges in back-end development
              and contribute to impactful projects.
            </Typography>
          </Container>
        </Container>

        <Container>
          <Slider {...sliderSettings}>
            <StyledImg src={Java} alt="Java" />
            <StyledImg src={CSS} alt="CSS" />
            <StyledImg src={Docker} alt="Docker" />
            <StyledImg src={Git} alt="Git" />
            <StyledImg src={HTML} alt="HTML" />
            <StyledImg src={JavaScript} alt="JavaScript" />
            <StyledImg src={MySQL} alt="MySQL" />
            <StyledImg src={PostgrSQL} alt="PostgreSQL" />
            <StyledImg src={Spring} alt="Spring" />
            <StyledImg src={SQLite} alt="SQLite" />
            <StyledImg src={React} alt="React" />
            <StyledImg src={Typescript} alt="Typescript" />
          </Slider>
        </Container>
      </StyledAbout>
    </>
  );
};

export default About;
