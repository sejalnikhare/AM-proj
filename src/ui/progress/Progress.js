import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alighItems: 'center',

        marginTop: '45vh',


        '& >  + ': {
            marginLeft: theme.spacing(2),
        },
    },
}));
const Progress = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress />

        </div>
    );
}

export default Progress;


