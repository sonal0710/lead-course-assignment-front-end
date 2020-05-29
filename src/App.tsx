import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LeadCourseListComponent from './containers/LeadCourseListContainer';

export const App: React.FC<{}> = () => {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route
              exact path="/"
              component={LeadCourseListComponent}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
};
