import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Stack from '@mui/material/Stack';
import Swal from 'sweetalert2';
import API from '../../../../api/API';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
    display: 'none',
});


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const AddEditUser = props => {

    // const [value, setValue] = React.useState(new Date());
    const { open, setOpen, operation, user, setUser, loadUsers } = props;

    const classes = useStyles();
    const [validate, setValidate] = useState({
        firstname: "",
        lastname: "",
        occupation: "",
        dob: "",
    })

    const handleClose = () => {
        setOpen(false);
    };


    const validateForm = () => {

        //name 
        if (user.firstname.length > 3) {
            setValidate({ ...validate, name: false })
        } else {
            setValidate({ ...validate, name: true })

        }

        if (user.lastname.length > 4) {
            setValidate({ ...validate, name: false })
        } else {
            setValidate({ ...validate, name: true })

        }

        //name
        // occupation
        //    if(user.occupation  )
        // occupation


    }

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }


    useEffect(() => {
        validateForm();
    }, [user])


    const handleSubmit = e => {
        e.preventDefault();
        console.log("User: ", user);
        if (operation === "add")
            API.post(`/user`, user)
                .then(response => {
                    setOpen(false);
                    Swal.fire("User created", "", "success");
                    loadUsers();

                })
                .catch(err => {
                    Swal.fire("User not created", "please try again", "error");


                })

        else if (operation === "edit")
            API.put(`/user/${user._id}`, {
                firstname: user.firstname,
                lastname: user.lastname,
                occupation: user.occupation,
                dob: user.dob,
                status: user.status,
                bio: user.bio,
                profilepic: user.profilepic,
            }).then(response => {
                setOpen(false);
                loadUsers();

                Swal.fire("User updated", "", "success");

            })
                .catch(err => {
                    Swal.fire("User not updated", "please try again", "error");

                })

        else
            Swal.fire("Something wrong", "please try again later", "error")

    };//handleSubmit


    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>

            <Dialog
                open={open}
                onClose={handleClose}
                scroll='paper'
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title"> {operation === "edit" ? "Update" : "Add"} Customers</DialogTitle>
                <DialogContent dividers={true}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        <form>
                            <TextField
                                name="firstname"
                                fullWidth
                                onChange={handleChange}
                                value={user.firstname}
                                id="outlined-basic"
                                className={classes.formControl}
                                label="First Name"
                                variant="outlined"
                                error={validate.name}
                                helperText={validate.firstname ? "First Name is required" : ""}
                            />
                            <TextField
                                name="lastname"
                                fullWidth
                                onChange={handleChange}
                                value={user.lastname}
                                // value=""
                                id="outlined-basic"
                                className={classes.formControl}
                                label="Last Name"
                                variant="outlined"
                                error={validate.name}
                                helperText={validate.lastname ? "Last Name is required" : ""}
                            />

                            <FormControl variant="outlined" fullWidth className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">occupation</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={user.occupation}
                                    onChange={handleChange}
                                    label="Occupation"
                                    name="occupation"
                                >
                                    <MenuItem value="employed">Employed</MenuItem>
                                    <MenuItem value="business">Business</MenuItem>
                                    <MenuItem value="student">Student</MenuItem>
                                </Select>
                            </FormControl>

                            <Stack component="form" noValidate spacing={3}>
                                <TextField
                                    name="dob"
                                    id="date"
                                    label="DOB"
                                    type="date"
                                    value={user.dob}
                                    onChange={handleChange}
                                    // sx={{ width: 10 }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Stack>
                            <FormControl fullWidth variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={user.status}
                                    onChange={handleChange}
                                    name="status"
                                    label="Status"
                                >
                                    <MenuItem value={1}>Active</MenuItem>
                                    <MenuItem value={0}>Inactive</MenuItem>
                                </Select>
                            </FormControl>


                            <TextField
                                name="bio"
                                id="outlined-multiline-static"
                                label="BIO"
                                multiline
                                rows={5}
                                value={user.bio}
                                placeholder='BIO'
                                onChange={handleChange}
                            />


                             <label htmlFor="contained-button-file">
                                <Input accept="image/*" id="contained-button-file" 
                                onChange={handleChange}
                                name="profilepic"
                                //  value={user.profilepic}
                                 multiple type="file"
                                  />
                                <Button variant="contained"
                                    component="span"
                                    value={user.profilepic}
                                >
                                    Upload
                                </Button>
                            </label> 

                        </form>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel </Button>
                    <Button variant="contained" onClick={handleSubmit} color="primary">
                        {operation === "edit" ? "Update" : "Add"}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}


export default AddEditUser;
