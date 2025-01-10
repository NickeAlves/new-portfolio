import { Container, styled, Typography } from "@mui/material";
import "../../../../styles/style.css";

const About = () => {
  const StyledAbout = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "50vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      paddingTop: "100px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "0",
    },
  }));

  const StrongText = styled("strong")(({ theme }) => ({
    fontWeight: 800,
    color: theme.palette.primary.main,
    fontSize: "3rem",
    letterSpacing: "0.1rem",
    position: "relative",
    overflow: "hidden",
    background: theme.palette.background.default,
    padding: "0.2rem 0.5rem",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    transition: "color 0.3s ease, transform 0.3s ease",
    "&:hover": {
      color: theme.palette.secondary.main,
      transform: "scale(1.1)",
    },
  }));

  return (
    <>
      <StyledAbout>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Typography
            color="primary.contrastText"
            variant="h1"
            textAlign="center"
          >
            <StrongText>About me</StrongText>
          </Typography>
          <Typography color="primary.contrastText" fontSize="1.5rem">
            Greetings, 👋<br></br> <br></br>My name is Nicolas, I am 22 years
            old, and I am from Brazil. Currently, I am a backend developer in
            the ONE (Oracle Next Education) program, offered by Alura in
            partnership with Oracle. In this program, I am enhancing my skills
            in web development, API integration, and software maintenance,
            preparing me to tackle the dynamic and innovative challenges of the
            technology industry.<br></br>
            <br></br>I am passionate about optimizing processes, automating
            tasks, and driving innovation to deliver high-quality software
            solutions. With a strong commitment to continuous improvement, I am
            always seeking new challenges in backend development and
            contributing to meaningful projects. 🌟
          </Typography>
        </Container>
      </StyledAbout>
    </>
  );
};

export default About;
