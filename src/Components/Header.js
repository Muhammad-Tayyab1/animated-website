import React from "react";

import { Typography, makeStyles, withStyles, Box } from "@material-ui/core";

//import flashImage from "../WFH_svg 3/2 SCENE.svg";
import brainImage from "../WFH_svg 3/1 SCENE.svg";
import Body from './Body'
import useWebAnimations from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    background:
      "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    height: "90.8vh",
   // marginTop: "60px",
  },
  flash: {
    
  },
  rightSide: {
    margin: "120px",
    width: "60%",
    height: "350px",
    color:"black" ,
    padding: "40px",
    "& h4": {
      fontSize: "3.125rem",
    },
    "& p": {
      fontSize: "1.1rem",
      padding: "0px",
      marginBottom: "12px",
    },
    "& button": {
      cursor: "pointer",
      background:
        " linear-gradient(to bottom, #dc97d2, #df8296, #c57c63, #997a44, #66763f)",
      fontSize: "1.1rem",
      marginLeft: "0px",
      textTransform: "uppercase",
      color: "#fff",
      fontWeight: 700,
      borderRadius: "50px",
      border: "1px solid rgb(206, 2, 189)",
      padding: "15px 11px",
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  const header = useWebAnimations({
    keyframes: {
      transform: "translateY(40px)",
    },
    timing: {
      duration: 1500, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  });

  return (
    <div>
    <Box component="section" className={classes.root}>
      <Box component="div">
        <img src={brainImage} ref={header.ref} alt="brain" height="500px" />
      </Box>
      <Box component="div" className={classes.rightSide}>
        <Typography variant="h4">React Animations</Typography>
        <p>After this we will be able to work on freelance market place</p>
        <button className={classes.btn}>React  World</button>
      </Box>
    </Box>
    <div>
      {<Body/>}
    </div>
    </div>
  );
};

export default withStyles(useStyles)(Header);
