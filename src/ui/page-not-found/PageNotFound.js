import React from 'react';
import {Link} from 'react-router-dom';

const PageNotFound = () => {
    return ( <>
    <h1>you took wrong turn</h1>
    <p> The page you are looking for is not available</p>
    <Link to="/">Home page</Link>
    </> );
}
 
export default PageNotFound;