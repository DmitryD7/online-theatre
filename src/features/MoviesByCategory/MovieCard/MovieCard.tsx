import React, {useCallback, useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {BASE_IMG_URL} from "../../App/App";
import {truncate} from "../../Header/Header";
import {handleShowTrailerClick} from "../../../utils/showTrailer";
import {MovieTrailer} from "../../../components/MovieTrailer/MovieTrailer";
import {MovieType} from "../../../models/models";

const useStyles = makeStyles({
    root: {
        width: 315,
        height: 489,
        backgroundColor: '#222',
        marginBottom: 27,
        position: 'relative',
    },
    media: {
        height: 200,
    },
    topInfo: {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: 'wrap-reverse',
        marginBottom: 5,
    },
    overview: {
        fontSize: '0.73rem',
    },
    button: {
        margin: '0 auto',
        position: 'absolute',
        bottom: 15,
        left: 0,
        right: 0,
    },
    trailer: {
        width: '100%',
        textAlign: 'center',
        paddingBottom: 13,
        marginBottom: 13,
        backgroundColor: '#000'
    },
});

export const MovieCard = (props: MoviePropsType) => {
    const classes = useStyles();
    const {movie, handleError} = props;

    const [trailerUrl, setTrailerUrl] = useState<string>('')

    const showTrailer = useCallback(async () => {
        try {
            await handleShowTrailerClick({movie, trailerUrl, setTrailerUrl});
        } catch (e) {
            handleError(e.message);
        }
    }, [movie, trailerUrl, handleError]);

    return (
        <><Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`${BASE_IMG_URL}${movie?.poster_path}`}
                    title={movie?.title || movie?.name}
                />
                <CardContent>
                    <div className={classes.topInfo}>
                        <Typography gutterBottom variant='subtitle1' component="h3" color={"primary"}>
                            {movie?.title || movie?.name}
                        </Typography>
                        <Typography color={"primary"} variant={"subtitle2"}>
                            Rating: {movie?.vote_average}
                        </Typography>
                    </div>
                    <Typography variant="body2" color="primary" component="p" className={classes.overview}>
                        {truncate(movie?.overview, 500)}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="medium" color="primary" variant={"outlined"} className={classes.button}
                        onClick={showTrailer}>
                    Watch trailer
                </Button>
            </CardActions>
        </Card>
            {trailerUrl && <MovieTrailer trailerUrl={trailerUrl} setTrailerUrl={setTrailerUrl}/>}
        </>
    )
}

type MoviePropsType = {
    movie: MovieType,
    handleError: (message: string) => void,
}