import React from "react";
import { useParams } from "react-router-dom";

// Import the PlaceList component
import PlaceList from "../components/PlaceList";

// Define an array of dummy places
const DUMMY_PLACES = [
  {
    // Each place object has an id, title, description, imageUrl, address, location, and creator
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      // The location property is an object with lat and lng properties
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      // The location property is an object with lat and lng properties
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

// Define a functional component called UserPlaces
const UserPlaces = () => {
  // Get the userId from the route params
  const userId = useParams().userId;

  // Filter the dummy places array to only include places with a creator that matches the userId
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  // Return a PlaceList component with the loadedPlaces array as its items prop
  return <PlaceList items={loadedPlaces} />;
};

// Export the UserPlaces component
export default UserPlaces;
