import React from 'react'
import { Redirect } from 'react-router-dom'
// import { ProtectedNavbar } from './ProtectedNavbar';

class ProtectedRoute extends React.Component {

    render() {
        const Component = this.props.component;

        const isAuthenticated = localStorage.getItem('token');
      
        return isAuthenticated ? (
            <div>
                {/* <ProtectedNavbar /> */}
            <Component />
            </div>

        ) : (
            <Redirect to={{ pathname: '/login' }} />
        );
    }
}

export default ProtectedRoute;

