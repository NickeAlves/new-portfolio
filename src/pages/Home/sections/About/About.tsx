import { Container, styled, Typography } from "@mui/material";

const About = () => {
  const StyledAbout = styled("div")(({ theme }) => ({
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

  return (
    <>
      <StyledAbout>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            color="primary.contrastText"
            variant="h2"
            textAlign="center"
          >
            About me
          </Typography>
          <Typography>
            I am passionate about optimizing processes, automating tasks, and
            driving innovation to deliver high-quality software solutions. With
            a focus on continuous improvement, I look forward to tackling new
            backend development challenges and contributing to meaningful
            projects.
          </Typography>
        </Container>
      </StyledAbout>
    </>
  );
};

export default About;
