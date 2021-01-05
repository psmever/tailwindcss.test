import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { DefaultPage, MainPage, TestPage } from 'components/pages';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={process.env.PUBLIC_URL + '/default'} exact={true} component={DefaultPage} />
                <Route path={process.env.PUBLIC_URL + '/main'} exact={true} component={MainPage} />
                <Route path={process.env.PUBLIC_URL + '/test'} exact={true} component={TestPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
