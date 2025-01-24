import { styled } from "@mui/material";
import "../../../../style/style.css";

const Skills = () => {
  const StyledSkills = styled("div")(({ theme }) => ({
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
  return (
    <>
      <StyledSkills></StyledSkills>
    </>
  );
};

export default Skills;
