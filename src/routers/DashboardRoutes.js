import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Homepage } from '../views/Homepage';
import { Results } from '../views/Results';
import { Complaint } from '../views/Complaint';
import { AboutUs } from '../views/AboutUs';
import { Detail } from '../views/Detail';

export const DashboardRoutes = () => {

    return (
        <>
            <Navbar />

            <div>
                <Switch>
                    <Route exact path="/home" component={ Homepage } />
                    <Route exact path="/results" component={ Results } />
                    <Route exact path="/complaint" component={ Complaint } />
                    <Route exact path="/aboutus" component={ AboutUs } />
                    <Route exact path="/detail:prisionid" component={ Detail } />

                    <Redirect to="/home" />
                </Switch>
            </div>
            <Footer />

        </>
    )
}