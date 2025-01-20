import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./SideDrawer.css";

// The SideDrawer component renders a drawer that slides in from the left side of the screen.
// It takes two props: show (a boolean that determines whether the drawer is visible)
// and onClick (a function that is called when the drawer is clicked).
const SideDrawer = (props) => {
  // The content variable contains the JSX elements that will be rendered inside the drawer.
  // It uses the CSSTransition component from react-transition-group to animate the drawer
  // when it is shown or hidden. The CSSTransition component takes several props:
  // - in: a boolean that determines whether the component is visible
  // - timeout: the duration of the animation in milliseconds
  // - classNames: the CSS class names to apply to the component during the animation
  // - mountOnEnter: whether to mount the component when it is first shown
  // - unmountOnExit: whether to unmount the component when it is hidden
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      {/* // The drawer is rendered as an aside element with the class "side-drawer".
      // When the drawer is clicked, the onClick function is called. */}
      <aside className="side-drawer" onClick={props.onClick}>
        {/* // The children of the SideDrawer component are rendered inside the drawer. */}
        {props.children}
      </aside>
    </CSSTransition>
  );

  // The SideDrawer component uses the ReactDOM.createPortal method to render the drawer
  // inside an element with the id "drawer-hook" in the DOM.
  // This allows the drawer to be rendered outside of the component hierarchy of the app.
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
