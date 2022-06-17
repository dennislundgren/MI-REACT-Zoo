import { Link } from "react-router-dom";
import { IAnimal } from "../models/Interfaces";

export const AnimalCard = (animal: IAnimal) => {
  return (
    <>
      <p>
        <Link to={animal.id.toString()}>
          <strong>{animal.name}</strong>
        </Link>
      </p>
      <p>{animal.shortDescription}</p>
    </>
  );
};
