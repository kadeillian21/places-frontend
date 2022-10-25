import axios from "axios";
import { useEffect } from "react";
import { useState, UseEffect } from "react";
import { PlacesIndex } from "./PlacesIndex";
import { PlacesShow } from "./PlacesShow";
import { Modal } from "./Modal";

export function Home() {
  const [places, setPlaces] = useState([]);
  const [isPlacesShowVisible, setIsPlacesShowVisible] = useState(false);
  const [currentPlace, setCurrentPlace] = useState({});

  const handleIndexPlaces = () => {
    console.log("handleIndexPlaces");
    axios.get("http://localhost:3000/places.json").then((response) => {
      console.log(response.data);
      setPlaces(response.data);
    });
  };

  const handleShowPlace = (place) => {
    console.log("handleShowPlace", place);
    setIsPlacesShowVisible(true);
    setCurrentPlace(place);
  };

  const handleHidePlace = () => {
    console.log("handleHidePlace");
    setIsPlacesShowVisible(false);
  };

  useEffect(handleIndexPlaces, []);

  return (
    <div>
      <PlacesIndex places={places} onSelectPlace={handleShowPlace} />
      <Modal show={isPlacesShowVisible} onClose={handleHidePlace}>
        <PlacesShow place={currentPlace} />
      </Modal>
    </div>
  );
}
