import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ backgroundColor: "grey.800", color: "white" }} // Grey background
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/user/123">
          User
        </Button>
        <Button color="inherit" component={Link} to="/graph/abc">
          Graph
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
