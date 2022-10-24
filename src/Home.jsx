import axios from "axios";
import { useEffect } from "react";
import { useState, UseEffect } from "react";
import { PlacesIndex } from "./PlacesIndex";

export function Home() {
  const [places, setPlaces] = useState([]);

  const handleIndexPlaces = () => {
    console.log("handleIndexPlaces");
    axios.get("http://localhost:3000/places.json").then((response) => {
      console.log(response.data);
      setPlaces(response.data);
    });
  };

  useEffect(handleIndexPlaces, []);

  return (
    <div>
      <PlacesIndex places={places} />
    </div>
  );
}
