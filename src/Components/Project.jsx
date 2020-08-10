import React from 'react';
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import projects from "../projects.json";
import useWebAnimation, { fadeInLeft, zoomIn } from "@wellyshen/use-web-animations";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        margin: 10,
        //background:"linear-gradient(to bottom, #f472e1, #ff6193, #ff7848, #d29900, #85b119)",
    },
    paper: {
        textAlign: 'center',

    }
});

const Project = () => {
    const { ref } = useWebAnimation({ ...fadeInLeft });
    const { ref: ref1 } = useWebAnimation({ ...zoomIn });
    const { ref: ref2 } = useWebAnimation({ ...zoomIn });
    const { ref: ref3 } = useWebAnimation({ ...zoomIn });
    const refs = [ref1, ref2, ref3];
    const classes = useStyles();
    return (
        <>
        <div className="project">
            <h1 ref={ref} style={{ "textAlign": "center" }}>My Projects</h1>
            <Grid container spacing={4}>
                {Object.entries(projects).map((project, i) => {
                    return (
                        <Grid item xs={12} sm={6} md={4}>
                            <Card ref={refs[i]} className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        className={classes.media}
                                        image={project[1].img}
                                        title={project[1].name}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {project[1].name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {project[1].desc}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <a href={project[1].url} style={{ "textDecoration": "none" }}>
                                        Visit Demo
                                    </a>
                                    <a href={project[1].github} style={{ "textDecoration": "bold" }}>
                                        Github link
                                    </a>
                                </CardActions>
                            </Card >
                        </Grid>
                    )
                })}
            </Grid>
            </div>
        </>
    )
}

export default Project;