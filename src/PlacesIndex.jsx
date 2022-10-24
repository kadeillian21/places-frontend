export function PlacesIndex(props) {
  return (
    <div>
      <h1>All Places</h1>
      {props.places.map((place) => (
        <div key={place.id}>
          <h2>{place.name}</h2>
          <img src={place.image_url} />
          <h5>Latitude: {place.latitude}</h5>
          <h5>Longitude: {place.longitude}</h5>
          <p>{place.description}</p>
        </div>
      ))}
    </div>
  );
}
