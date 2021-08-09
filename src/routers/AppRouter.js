  
import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch
  } from 'react-router-dom';

import { AuthContext } from '../auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { Register } from '../views/Register';
import { LoginForm } from '../components/LoginForm';
import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch> 
                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ LoginForm } 
                        isAuthenticated={ user.logged }
                    />

                    <PublicRoute 
                        exact 
                        path="/register" 
                        component={ Register } 
                        isAuthenticated={ user.logged }
                    />
                    
                    <PrivateRoute 
                        path="/" 
                        component={ DashboardRoutes } 
                        isAuthenticated={ user.logged }
                    />
                </Switch>
            </div>
        </Router>
    )
}