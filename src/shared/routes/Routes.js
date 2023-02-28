import React, { lazy } from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';

const Dashboared = lazy(() => import('../../features/app/dashboared/Dashboared'))
const UserList = lazy(() => import('../../features/app/users/user-list/UserList'))

const ChangePassword = lazy(() => import('../../features/frontend/changepassword/ChangePassword'));


const routes = [
    {
        title: "Dashboared",
        icon: <DashboardIcon />,
        component: Dashboared,
        path: "/",
        showInMenu: true,
        visibleTo: 'all'
    },
    {
        title: "Users",
        icon: <GroupIcon />,
        component: UserList,
        path: "/user-list",
        showInMenu: true,
    },

    {
        title: "Change Password",
        component: ChangePassword,
        path: "/changepassword",
        showInMenu: false

    },
]

export default routes;