import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAnimal, IState } from "../models/Interfaces";
import { setAnimals } from "../redux/features/animalsSlice";
import { AnimalCard } from "./AnimalCard";

export const ShowAnimals = () => {
  const animals = useSelector(
    (state: IState) => state.animals.value
  ) as IAnimal[];
  const dispatch = useDispatch();
  useEffect(() => {
    const api = localStorage.getItem("animals");

    api
      ? dispatch(setAnimals(JSON.parse(api)))
      : axios
          .get("https://animals.azurewebsites.net/api/animals")
          .then((response) => {
            dispatch(setAnimals(response.data));
          });
  }, [dispatch]);

  let html = animals.map((animal) => {
    return (
      <div key={animal.id} data-key-id={animal.id}>
        <AnimalCard {...animal} />
      </div>
    );
  });

  return <>{html}</>;
};
