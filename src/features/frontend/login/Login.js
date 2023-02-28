import React,{useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import AuthContext from '../../../shared/context/AuthContext';
// import Swal from 'sweetalert2';

// import API from '../../../api/API'

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

const Login = () => {
    const classes = useStyles();
    const setAuthenticated = useContext(AuthContext);
    const history = useHistory();

    const [values, setValues] = React.useState({
        email: '',
        password: '',

        showPassword: false,
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = e => {
        e.preventDefault();
        // if (!values.email || !values.password)
        //     Swal.fire("Enter valid email and password", "email and password are mandatory", "warning");
        // else
        //     API.post("/user/auth", { email: values.email, password: values.password })
        //         .then(response => {

        
        //         })
        //         .catch(err => {
        //             let message = "Could not login";
        //             if (err.response)
        //                 message = err.response.data.message;
        //             Swal.fire(message, "Enter valid email and password", "error");

        //         })
        if(values.email === "sejal@gmail.com" && values.password === "sejal"){
            setAuthenticated(true);
            history.push("/secured");
        }else{
            alert("Invalid email or password");
        }
    };

    return (
        <div className={classes.container}>
            <Card className={classes.root}>


                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                        Customers Login
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
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                name="password"
                                onChange={handleChange}
                                fullWidth
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>
                        <CardActions>
                            <Button variant="contained">Clear</Button>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit">
                                Login
                            </Button>
                        </CardActions>
                    </form>
                    <Link to="/resetpassword" >Forgot Password? </Link>
                </CardContent>


            </Card>
        </div>
    );
}
export default Login;