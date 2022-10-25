export function PlacesShow(props) {
  return (
    <div>
      <img src={props.place.image_url} className="modal-image" />
      <h1>{props.place.name}</h1>
      <h3>{props.place.country}</h3>
      <h5>This is where the lat long will go. Figure out how to make lat on the right and long on the left</h5>
      <p>{props.place.description}</p>
    </div>
  );
}
