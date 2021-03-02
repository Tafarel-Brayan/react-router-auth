import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { isAuthenticated } from './Auth';
import { PrivateRoute } from './PrivateRoute';

export function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={()=> <h1> Hello World </h1> } />
                <PrivateRoute path="/app" isAuthenticated={isAuthenticated()} component={ () => <h1>Logado</h1> } />
            </Switch>
        </BrowserRouter>
    )
}