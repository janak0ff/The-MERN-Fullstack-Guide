/*************  ✨ Codeium Command 🌟  *************/
import React from "react";

// Import the Card component from the shared component library
import Card from "../../shared/components/UIElements/Card";

// Import the CSS styles for the PlaceItem component
import "./PlaceItem.css";

// Define the PlaceItem component
const PlaceItem = (props) => {
  // Return a list item element with a Card component inside
  // The Card component is used to style the place item
  return (
    <li className="place-item">
      <Card className="place-item__content">
        {/* Display the image of the place */}
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
          <button>VIEW ON MAP</button>
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;

/******  ef5e7779-8b28-4d08-a4ba-1670f3d87ba7  *******/
