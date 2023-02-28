import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../../ui/header/Header';

const Home = lazy(() => import('../../features/frontend/home/Home'));
const Login = lazy(() => import('../../features/frontend/login/Login'));
const ResetPassword = lazy(() => import('../../features/frontend/resetpassword/ResetPassword'));
const ChangePassword = lazy(() => import('../../features/frontend/changepassword/ChangePassword'));
const Forms = lazy(()=> import('../../features/frontend/forms/Forms'))

const Blank = () => {
    return <>
        <Header />
        <Switch>
            <Suspense fallback={<div>Loading...</div>}>

                <Route path="/" component={Home} exact />
                <Route path="/login" component={Login} />
                <Route path="/resetpassword" component={ResetPassword} />
                <Route path="/changepassword" component={ChangePassword} />
                <Route path="/forms" component={Forms} />

            </Suspense>

        </Switch>

    </>
}

export default Blank;

