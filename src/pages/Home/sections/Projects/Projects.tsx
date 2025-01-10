import { styled, Typography } from "@mui/material";
import NavBar from "../../../../components/NavBar/NavBar";

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
      <NavBar />
      <StyledProjects>
        <Typography> sjhfa</Typography>
      </StyledProjects>
    </>
  );
};

export default Projects;
