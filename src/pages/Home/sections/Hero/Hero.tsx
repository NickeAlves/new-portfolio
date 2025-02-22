import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/linkedin-image.jpeg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import "../../../../style/style.css";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      paddingTop: "100px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "0",
    },
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  }));

  const StrongText = styled("strong")(({ theme }) => ({
    fontWeight: 800,
    color: theme.palette.primary.main,
    fontSize: "2rem",
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
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography
                color="#4f8e3e"
                variant="h1"
                textAlign="center"
                pb={2}
              >
                Hello!
              </Typography>
              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign="center"
              >
                I'm Nicolas, <StrongText> Backend Developer </StrongText>
              </Typography>
              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={3}
                pt={3}
              >
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1dSAg4YY5kng8vOy2e12y-GAbHqCpibD8/view?usp=sharing",
                        "_blank"
                      )
                    }
                  >
                    <DownloadIcon />
                    <Typography>View resume</Typography>
                  </StyledButton>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton
                    onClick={() =>
                      window.open(
                        "https://linktr.ee/nicke.rodrigues1125",
                        "_blank"
                      )
                    }
                  >
                    <EmailIcon></EmailIcon>
                    <Typography>Contact me</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
