import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Blank from './layouts/blank/Blank';
import Full from './layouts/full/Full';
import PageNotFound from './ui/page-not-found/PageNotFound';
import AuthContext from './shared/context/AuthContext';
function App() {
  // const history = useHistory();

const [isAuthenticated, setAuthenticated]= useState(false);

const ProtectedRoute = ({children , ...props}) =>{
  return isAuthenticated ? (
    <Route {...props}>{children}</Route>
  ):(
    <Redirect to="/login" />
  );
}


  return (
    <Switch>
      <ProtectedRoute path="/secured">
         <Full/>
     </ProtectedRoute>
      <Route path="/" >
        <AuthContext.Provider value={setAuthenticated}>
          <Blank/>
        </AuthContext.Provider>
     </Route>
      <Route path="*" component={PageNotFound} />
    </Switch>

  );
}

export default App;