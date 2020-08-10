import React from "react";
import { Zoom } from "react-reveal";
import useWebAnimations from "@wellyshen/use-web-animations";
import { Box , makeStyles} from "@material-ui/core"
import Image from "../WFH_svg 3/7 SCENE.svg";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 2,
      display: "flex",
      //background:"linear-gradient(90deg, rgba(75,6,193,1) 0%, rgba(206,2,189,1) 100%)",
      background: "linear-gradient(to right top, #93b3e3, #b19fd6, #cb8ab6, #d57b8a, #c8775c)",
       // background: "linear-gradient(to bottom, #f472e1, #ff6193, #ff7848, #d29900, #85b119)",
      // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      height: "90.8vh",
      
    },
    set: {
        marginTop: "30px",
        display: "flex"
        
    },
    flash: {
        marginTop: "-28rem"},
      rightSide: {
        margin: "50px",
        width: "60%",
        height: "350px",
        color: "#fff",
        padding: "20px",
        "& h4": {
          fontSize: "3.125rem",
        },
       heading: {
        color : "red",
        marginTop: "50px"
       },
       btn: {
        cursor: "pointer",
        display: "start",
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
}))
function Body() {


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
   
    <div className={classes.root} >
    <Zoom> <h1 ><h2 className={classes.heading}>Education & Online Learning System</h2><h5>This BootCamp will provide you to Earn Money in IT World </h5></h1>
</Zoom><br></br>
<br></br>
<br></br>
  <fade left>
      <Box>
      <Box className={classes.rightSide}>
     
     </Box>
        <Box component="div">
        <img src={Image} ref={header.ref} alt="brain" height="500px" className={classes.flash}/>
     
      </Box> </Box>
       
        </fade>
        
    </div>
  );
}

export default Body;
