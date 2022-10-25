import axios from "axios";
import { useEffect } from "react";
import { useState, UseEffect } from "react";
import { PlacesIndex } from "./PlacesIndex";
import { PlacesShow } from "./PlacesShow";
import { Modal } from "./Modal";
import { PlacesNew } from "./PlacesNew";

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

  const handleCreatePlace = (params, sucessCallback) => {
    console.log("handleCreatePlace", params);
    axios.post("http://localhost:3000/places.json", params).then((response) => {
      setPlaces([...places, response.data]);
      sucessCallback();
    });
  };

  const handleUpdatePlace = (id, params, sucessCallback) => {
    console.log("handleUpdatePlace", params);
    axios.patch(`http://localhost:3000/places/${id}.json`, params).then((response) => {
      setPlaces(
        places.map((place) => {
          if (place.id === response.data.id) {
            return response.data;
          } else {
            return place;
          }
        })
      );
      sucessCallback();
      handleHidePlace();
    });
  };

  const handleDestroyPlace = (place) => {
    console.log("handleDestroyPlace", place);
    axios.delete(`http://localhost:3000/places/${place.id}.json`).then((response) => {
      setPlaces(places.filter((p) => p.id !== place.id));
      handleHidePlace();
    });
  };

  useEffect(handleIndexPlaces, []);

  return (
    <div>
      <PlacesIndex places={places} onSelectPlace={handleShowPlace} />
      <Modal show={isPlacesShowVisible} onClose={handleHidePlace}>
        <PlacesShow place={currentPlace} onUpdatePlace={handleUpdatePlace} onDestroyPlace={handleDestroyPlace} />
      </Modal>
      <PlacesNew onCreatePlace={handleCreatePlace} />
    </div>
  );
}
