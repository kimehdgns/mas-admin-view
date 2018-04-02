import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import AppHeader from 'components/appHeader/appHeader';
import {Home, LoginForm, ManageChurchForm, ManageMemberForm} from 'pages';

const App = () => {
    return (
        <div>
            <Switch>
                <Route path="/loginForm" component={LoginForm}/>
                <Route path="/" component={TopHeaderApp}/>
            </Switch>
        </div>
    )
};

const logged = true;

const TopHeaderApp = () => {
    return (
        <div>
            {!logged && <Redirect to="/loginForm"/>}
            <AppHeader/>
            <Route exact path="/" component={Home}/>
            <Route path="/manageChurchForm" component={ManageChurchForm}/>
            <Route path="/manageMemberForm" component={ManageMemberForm}/>
        </div>
    )
}

export default App;