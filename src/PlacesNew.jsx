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
          Image URL: <input name="image-url" type="text" />
        </div>{" "}
        <div>
          Country: <input name="country" type="text" />
        </div>{" "}
        <div>
          Latitude: <input name="latitude" type="number" />
        </div>{" "}
        <div>
          Longitude: <input name="longitude" type="number" />
        </div>{" "}
        <div>
          Description: <input name="description" type="text" />
        </div>
        <button type="submit">Create Place</button>
      </form>
    </div>
  );
}
