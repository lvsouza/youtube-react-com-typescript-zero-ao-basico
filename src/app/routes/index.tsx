import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Dashboard } from "../pages";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/pagina-inicial" component={Dashboard} />

        <Route path="*" component={() => <Redirect to="/pagina-inicial" />} />
      </Switch>
    </BrowserRouter>
  );
}
