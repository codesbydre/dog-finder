import { Link } from "react-router-dom";

function DogList(props) {
  return (
    <div className="row mt-5">
      {props.dogs.map((d) => (
        <div key={d.name} className="col-lg-4 col-md-6 mb-4">
          <Link to={`/dogs/${d.name.toLowerCase()}`}>
            <img
              className="img-fluid rounded mb-2"
              src={d.src}
              alt={d.name}
              width="200"
            />
            <p className="text-center">{d.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default DogList;
