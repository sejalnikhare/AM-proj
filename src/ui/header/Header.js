import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import StoreIcon from '@material-ui/icons/Store';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: "#ffffff",
        textDecoration: "none"
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>

                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Link to="/" className={classes.link}> <StoreIcon fontSize="large" />  </Link>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" className={classes.link}> Angular Minds  </Link>
                    </Typography>

                    <Link to="/login" className={classes.link}>
                        <Button color="inherit">Login</Button>
                    </Link>
                    <Link to="/forms" className={classes.link}>
                        <Button color="inherit">Forms</Button>
                    </Link>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;


