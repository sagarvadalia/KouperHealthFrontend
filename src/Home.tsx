import { makeStyles } from "@mui/styles";
import { Link } from "react-router";

export const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Link to="/upload">Upload PDFs</Link>
      <Link to="/patients">View Patient Data</Link>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    gap: "10px",
  },
}));
