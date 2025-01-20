import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import components
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

// Import styles
import "./MainNavigation.css";

// Define the MainNavigation component
const MainNavigation = (props) => {
  // Initialize the state with a boolean variable to track whether the drawer is open
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  // Define a function to open the drawer
  const openDrawerHandler = () => {
    // Update the state to open the drawer
    setDrawerIsOpen(true);
  };

  // Define a function to close the drawer
  const closeDrawerHandler = () => {
    // Update the state to close the drawer
    setDrawerIsOpen(false);
  };

  // Render the main navigation component
  return (
    <React.Fragment>
      {/* // If the drawer is open, render the backdrop */}
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      {/* // Render the side drawer */}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        {/* // Render the navigation links inside the drawer */}
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      {/* // Render the main header */}
      <MainHeader>
        {/* // Render the menu button */}
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          {/* // The menu button has three spans which form the hamburger menu icon */}
          <span />
          <span />
          <span />
        </button>
        {/* // Render the title */}
        <h1 className="main-navigation__title">
          {/* // The title is a link to the root route */}
          <Link to="/">YourPlaces</Link>
        </h1>
        {/* // Render the navigation links inside the header */}
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

// Export the MainNavigation component
export default MainNavigation;
