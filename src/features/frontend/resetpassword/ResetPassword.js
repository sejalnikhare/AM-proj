import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';



const useStyles = makeStyles({
    container: {
        margin: 'auto'
    },
    root: {
        maxWidth: 345,
        margin: 'auto',
        marginTop: '10vh'
    },
    media: {
        height: 140,
    },

    margin: {
        margin: '5px'
    },
    withoutLabel: {
        marginTop: '5px'
    },
    textField: {
        display: 'flex'
    },
    title: {
        textAlign: 'center'
    }
});

const ResetPassword = () => {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        email: ''

    });

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className={classes.container}>
            <Card className={classes.root}>


                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                        Reset Password
                    </Typography>
                    <Typography gutterBottom className={classes.title}>
                        You will get password reset link to your registered email address
                    </Typography>
                    <form onSubmit={handleSubmit}>


                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <OutlinedInput
                                id="email"
                                type='email'
                                value={values.email}
                                name="email"
                                onChange={handleChange}
                                fullWidth

                                labelWidth={50}
                            />
                        </FormControl>

                        <CardActions>
                            <Button variant="contained">Clear</Button>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit">
                                Reset
                            </Button>
                        </CardActions>
                    </form>
                </CardContent>


            </Card>
        </div>
    );
}


export default ResetPassword;