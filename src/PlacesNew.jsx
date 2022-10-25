export function PlacesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePlace(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Add a Place</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Location Name: <input name="name" type="text" />
        </div>
        <div>
          Image URL: <input name="image_url" type="text" />
        </div>
        <div>
          Country: <input name="country" type="text" />
        </div>
        <div>
          Latitude: <input name="latitude" type="number" step={0.000001} />
        </div>
        <div>
          Longitude: <input name="longitude" type="number" step={0.000001} />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <button type="submit">Create Place</button>
      </form>
    </div>
  );
}
