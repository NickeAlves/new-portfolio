import { Container, styled } from "@mui/material";
import "../../../../styles/style.css";

const Projects = () => {
  const StyledProjects = styled("div")(({ theme }) => ({
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

  return (
    <>
      <StyledProjects>
        <Container>
          <p>fnudia</p>
        </Container>
      </StyledProjects>
    </>
  );
};

export default Projects;
