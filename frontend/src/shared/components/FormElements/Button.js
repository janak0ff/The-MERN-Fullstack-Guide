import React from "react";
import { Link } from "react-router-dom";

// Importing CSS styles from Button.css
import "./Button.css";

// Defining a functional component named Button
const Button = (props) => {
  // If the href property is provided, render an <a> element
  if (props.href) {
    return (
      // Adding class names based on props
      <a
        className={`button button--${props.size || "default"} ${
          props.inverse && "button--inverse"
        } ${props.danger && "button--danger"}`}
        // Using the href property from props
        href={props.href}
      >
        // Rendering the children prop
        {props.children}
      </a>
    );
  }
  // If the to property is provided, render a <Link> element from react-router-dom
  if (props.to) {
    return (
      <Link
        // Using the to property from props
        to={props.to}
        // Using the exact property from props, if provided
        exact={props.exact}
        // Adding class names based on props
        className={`button button--${props.size || "default"} ${
          props.inverse && "button--inverse"
        } ${props.danger && "button--danger"}`}
      >
        // Rendering the children prop
        {props.children}
      </Link>
    );
  }
  // If neither href nor to is provided, render a <button> element
  return (
    <button
      // Adding class names based on props
      className={`button button--${props.size || "default"} ${
        props.inverse && "button--inverse"
      } ${props.danger && "button--danger"}`}
      // Using the type property from props, if provided
      type={props.type}
      // Using the onClick property from props, if provided
      onClick={props.onClick}
      // Using the disabled property from props, if provided
      disabled={props.disabled}
    >
      {/* // Rendering the children prop */}
      {props.children}
    </button>
  );
};

// Exporting the Button component as the default export
export default Button;
