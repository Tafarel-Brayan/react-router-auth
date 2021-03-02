import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

export function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={()=> <h1> Hello World </h1> } />
                <PrivateRoute path="/app" component={ () => <h1>Logado</h1> } />
            </Switch>
        </BrowserRouter>
    )
}