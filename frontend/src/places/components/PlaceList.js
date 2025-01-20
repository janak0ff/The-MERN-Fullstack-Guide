/**
 * The PlaceList component renders a list of places.
 * It takes an array of place objects as a prop.
 * If the array is empty, it renders a message with a button to share a place.
 * Otherwise, it renders a list of PlaceItem components.
 */
import React from "react";

import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import "./PlaceList.css";

// Define the PlaceList component and pass props to it
const PlaceList = (props) => {
  // If the array of places is empty
  if (props.items.length === 0) {
    // Render a message with a button to share a place
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }

  // Otherwise, render a list of PlaceItem components
  return (
    <ul className="place-list">
      {props.items.map((place) => (
        // For each place in the array, render a PlaceItem component
        // Pass the place's id, image, title, description, address, creatorId, and coordinates as props
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

// Export the PlaceList component
export default PlaceList;
