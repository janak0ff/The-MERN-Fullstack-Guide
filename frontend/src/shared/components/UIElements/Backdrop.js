import React from "react";
import ReactDOM from "react-dom";

import "./Backdrop.css";

/**
 * The Backdrop component is a React function component that
 * renders a darkened background (backdrop) behind a modal or
 * a side drawer. It is used to block the background content
 * from being interacted with while the modal or side drawer
 * is visible.
 *
 * The component uses the React Portal feature to render the
 * backdrop element in the #backdrop-hook element in the DOM,
 * which is usually a div in the index.html file.
 *
 * The component receives an onClick prop, which is a callback
 * function that will be called when the backdrop is clicked.
 * This is used to close the modal or side drawer when the
 * backdrop is clicked.
 */
const Backdrop = (props) => {
  return ReactDOM.createPortal(
    // The backdrop element is a div with a class of "backdrop"
    // that is used to create the darkened background behind
    // the modal or side drawer.
    <div className="backdrop" onClick={props.onClick}></div>,
    // The backdrop element is rendered in the #backdrop-hook
    // element in the DOM, which is usually a div in the
    // index.html file.
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
