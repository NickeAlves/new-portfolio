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

  const StrongText = styled("strong")(({ theme }) => ({
    fontWeight: 800,
    color: "white",
    border: "1px solid white",
    borderRadius: "30px",
    fontSize: "3rem",
    letterSpacing: "0.1rem",
    position: "relative",
    overflow: "hidden",
    background: "#141313b8",
    padding: "0.4rem 0.7rem",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    transition: "color 0.3s ease, transform 0.3s ease",
    "&:hover": {
      color: theme.palette.secondary.main,
      transform: "scale(1.1)",
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
          <Typography
            color="primary.contrastText"
            variant="h1"
            textAlign="center"
          >
            <StrongText>About me</StrongText>
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
              old, and I am from Brazil. Currently, I am a backend developer in
              the ONE (Oracle Next Education) program, offered by Alura in
              partnership with Oracle. In this program, I am enhancing my skills
              in web development, API integration, and software maintenance,
              preparing me to tackle the dynamic and innovative challenges of
              the technology industry.<br></br>
              <br></br>I am passionate about optimizing processes, automating
              tasks, and driving innovation to deliver high-quality software
              solutions. With a strong commitment to continuous improvement, I
              am always seeking new challenges in backend development and
              contributing to meaningful projects.
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
          </Slider>
        </Container>
      </StyledAbout>
    </>
  );
};

export default About;
