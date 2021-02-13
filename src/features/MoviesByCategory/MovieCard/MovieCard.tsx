import React from "react";
import {MovieType} from "../../../api/apiTypes";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {BASE_IMG_URL} from "../../App/App";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        backgroundColor: '#222'
    },
    media: {
        height: 200,
    },
    overview: {
        fontSize: '0.8rem'
    },
});

export const MovieCard = (props: MoviePropsType) => {
    const classes = useStyles();
    const {movie} = props

    return (
        <Card className= {classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`${BASE_IMG_URL}${movie?.poster_path}`}
                    title={movie?.title || movie?.name}
                />
                <CardContent>
                    <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center", marginBottom: '5px'}}><Typography gutterBottom variant="h5" component="h2" color={"primary"}>
                        {movie?.title || movie?.name}
                    </Typography>
                        <Typography color={"primary"} variant={"subtitle1"}>
                            Rating: {movie?.vote_average}
                        </Typography></div>
                    <Typography variant="body2" color="primary" component="p" className={classes.overview}>
                        {movie?.overview}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="medium" color="primary" variant={"outlined"} style={{margin: '0 auto'}}>
                    Watch trailer
                </Button>
            </CardActions>
        </Card>
    )
}

type MoviePropsType = {
    movie: MovieType
}