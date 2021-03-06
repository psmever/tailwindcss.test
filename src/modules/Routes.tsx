import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { DefaultPage, MainPage, TestPage, Navbar, StackedLayouts, Login, Chatting } from 'pages';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={process.env.PUBLIC_URL + '/default'} exact={true} component={DefaultPage} />
                <Route path={process.env.PUBLIC_URL + '/main'} exact={true} component={MainPage} />
                <Route path={process.env.PUBLIC_URL + '/test'} exact={true} component={TestPage} />
                <Route path={process.env.PUBLIC_URL + '/navbar'} exact={true} component={Navbar} />
                <Route path={process.env.PUBLIC_URL + '/stackedlayouts'} exact={true} component={StackedLayouts} />
                <Route path={process.env.PUBLIC_URL + '/chatting'} exact={true} component={Chatting} />
                <Route path={process.env.PUBLIC_URL + '/Login'} exact={true} component={Login} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
