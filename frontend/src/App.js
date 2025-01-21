import React from "react";
import {
  BrowserRouter as Router, // Import BrowserRouter to enable routing in the application.
  Route, // Import Route to define specific routes within the application.
  Redirect, // Import Redirect to redirect users when no matching route is found.
  Switch, // Import Switch to ensure only one route is rendered at a time.
} from "react-router-dom"; // Importing from react-router-dom for handling routing in React.

import Users from "./user/pages/Users"; // Import the Users component for the root route.
import NewPlace from "./places/pages/NewPlace"; // Import the NewPlace component for the new place route.
import UserPlaces from "./places/pages/UserPlaces"; // Import the UserPlaces component for user-specific places.
import MainNavigation from "./shared/components/Navigation/MainNavigation"; // Import the MainNavigation component for the navigation bar.

const App = () => {
  return (
    <Router>
      {/* Wrapping the application inside Router to enable routing */}
      <MainNavigation />
      {/* Render the MainNavigation component for navigating between different routes */}
      <main>
        <Switch>
          {/* Use Switch to ensure only one route is active at a time */}
          <Route path="/" exact>
            {/* Define a route for the root path */}
            <Users />
            {/* Render the Users component when the root path is accessed */}
          </Route>
          <Route path="/:userId/places" exact>
            {/* Define a route for user-specific places */}
            <UserPlaces />
            {/* Render the UserPlaces component for the specified user ID */}
          </Route>
          <Route path="/places/new" exact>
            {/* Define a route for adding a new place */}
            <NewPlace />
            {/* Render the NewPlace component when the new place path is accessed */}
          </Route>
          <Redirect to="/" />
          {/* Redirect to the root route if no matching route is found */}
        </Switch>
      </main>
    </Router>
  );
};

// Export the App component as the default export of the module.
export default App;
