import { useParams } from "react-router-dom";

function DogDetails(props) {
  let { name } = useParams();
  let dog = props.dogs.find((d) => d.name.toLowerCase() === name.toLowerCase());

  if (!dog) return <h2>No dog found!</h2>;

  return (
    <div className="mt-5">
      <h2 className="text-center">{dog.name}</h2>
      <img
        className="img-fluid rounded mx-auto d-block"
        src={dog.src}
        alt={dog.name}
      />
      <ul className="list-group mt-4">
        {dog.facts.map((fact, index) => (
          <li className="list-group-item" key={index}>
            {fact}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
