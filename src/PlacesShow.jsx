export function PlacesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePlace(props.place.id, params, () => event.target.rest);
  };

  const handleClick = () => {
    props.onDestroyPlace(props.place);
  };

  return (
    <div>
      <img src={props.place.image_url} className="modal-image" />
      <h1>{props.place.name}</h1>
      <h3>{props.place.country}</h3>
      <h5>This is where the lat long will go. Figure out how to make lat on the right and long on the left</h5>
      <p>{props.place.description}</p>
      <button onClick={handleClick}>Destroy Place</button>
      <form onSubmit={handleSubmit}>
        <div>
          Location Name: <input name="name" type="text" defaultValue={props.place.name} />
        </div>
        <div>
          Image URL: <input name="image_url" type="text" defaultValue={props.place.image_url} />
        </div>
        <div>
          Country: <input name="country" type="text" defaultValue={props.place.country} />
        </div>
        <div>
          Latitude: <input name="latitude" type="number" step={0.000001} defaultValue={props.place.latitude} />
        </div>
        <div>
          Longitude: <input name="longitude" type="number" step={0.000001} defaultValue={props.place.longitude} />
        </div>
        <div>
          Description: <input name="description" type="text" defaultValue={props.place.description} />
        </div>
        <button type="submit">Update Place</button>
      </form>
    </div>
  );
}
