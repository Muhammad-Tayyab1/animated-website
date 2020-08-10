import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 0,
        
        background:
        "linear-gradient(90deg, rgba(75,6,193,1) 0%, rgba(206,2,189,1) 100%)",
    },
    NavBody: {
background: "red",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.NavBody}>
            <div className={classes.root}>
                <AppBar >
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            <h4>Animated Website</h4>
                        </Typography>
                        <Typography variant="h6">

                            <Link to='/' className="Nav" style={{ "float": "right", "padding": "5px", "color": "white", "textDecoration": "none" }}>Home</Link>
                        </Typography>
                        <Typography>

                            <Link to='project' className="Nav" style={{ "float": "right", "padding": "5px", "color": "white", "textDecoration": "none", "fontWeight": "bold" }}>Projects</Link>
                        </Typography>
                        <Typography variant="h6">
                            <Link to='About' className="Nav" style={{ "float": "right", "padding": "5px", "color": "white", "textDecoration": "none" }}>About</Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </div >
    )
}

export default Navbar;