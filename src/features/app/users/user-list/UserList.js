import React, { useState, useEffect } from 'react';
import MUIDataTable from "mui-datatables";
import API from '../../../../api/API';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete'

import AddEditUser from '../add-edit/AddEditUser';
import Swal from 'sweetalert2';

const useStyles = makeStyles((theme) => ({
    editIcon: {
        marginRight: 5,
        color: '#3f51b5',
        cursor: 'pointer'
    },
    deleteIcon: {
        color: 'red',
        cursor: 'pointer'

    },
}));
const UserList = () => {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [operation, setOperation] = React.useState("add");
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        occupation: 'employed',
        dob: "",
        status: 1,
        bio: "",
        profilepic: "",
    });


    const loadUsers = () => {
        API.get("/user")
            .then(response => {
                setData(response.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        loadUsers();
    }, []);


    const handleEdit = (i) => {
        // alert(data[i].name);
        setUser(data[i]);
        setOperation("edit");
        setOpen(true);

    }//handleEdit

    const handleDelete = (i) => {

        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this record!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                API.delete(`/user/${data[i]._id}`)
                    .then(response => {
                        Swal.fire(
                            'Deleted!',
                            'The customer has been deleted.',
                            'success'
                        );
                        loadUsers();
                    })
                    .catch(err => {
                        Swal.fire(
                            'Not Deleted!',
                            'The customer has not been deleted.',
                            'error'
                        )
                    })
            }
        })


    };//handleDelete


    const resetUser = () => {
        setUser({
            firstname: '',
            lastname: '',
            occupation: 'employed',
            dob: '',
            status: 1,
            bio: '',
            profilepic: ''
        })
    }

    const handleAdd = () => {
        resetUser();
        setOperation("add");

        setOpen(true);
    };//handleAdd



    const columns = [
        {
            name: "firstname",
            label: "First Name",
            options: {
                filter: true,
                sort: true,
            }
        },

        {
            name: "lastname",
            label: "Last Name",
            options: {
                filter: true,
                sort: true,
            }
        },

        {
            name: "occupation",
            label: "Occupation",
            options: {
                filter: true,
                sort: true,
            }
        },

        {
            name: "status",
            label: "Status",
            options: {
                filter: true,
                sort: false,
                customBodyRenderLite: (dataIndex) => {

                    return data[dataIndex].status === 1 ? "Active" : "Inactive";
                }
            }
        },
        {
            name: "bio",
            label: "Bio",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "profilepic",
            label: "Profile Picture / Avatar",
            options: {
                filter: true,
                sort: true,
            }
        },

        {
            name: "action",
            label: "Action",
            options: {
                filter: true,
                sort: false,
                customBodyRenderLite: (dataIndex) => {

                    return <div>
                        <span className={classes.editIcon}
                            onClick={() => handleEdit(dataIndex)}>
                            <EditIcon />
                        </span>
                        <span className={classes.deleteIcon}
                            onClick={() => handleDelete(dataIndex)}>
                            <DeleteIcon />
                        </span>
                    </div>
                }
            }
        },
    ];

    // const data = [
    //     { name: "Joe James", company: "AM", city: "Yonkers", state: "NY" },
    //     { name: "John Walsh", company: "AM", city: "Hartford", state: "CT" },
    //     { name: "Bob Herm", company: "AM", city: "Tampa", state: "FL" },
    //     { name: "James Houston", company: "AM", city: "Dallas", state: "TX" },
    // ];

    const options = {
        filterType: 'checkbox',
    };


    return (<>

        <AddEditUser
            open={open}
            setOpen={setOpen}
            operation={operation}
            user={user}
            setUser={setUser}
            loadUsers={loadUsers}
        />

        <h1>Customers LIst </h1>
        <Button variant="contained" color="primary" onClick={handleAdd}>
            Add Customers
        </Button>


        <MUIDataTable
            title={"Customers List"}
            data={data}
            columns={columns}
            options={options}
        />

    </>);
}

export default UserList;