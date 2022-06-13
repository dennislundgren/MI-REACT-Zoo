import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { IAnimal, IState } from "../models/Interfaces";
import { setAnimals } from "../redux/features/animalsSlice";

export const ShowAnimal = () => {
  const { id } = useParams();
  const animals = useSelector(
    (state: IState) => state.animals.value
  ) as IAnimal[];
  let animal: IAnimal | undefined;
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

  const setLocalStorage = () => {
    let x = JSON.parse(JSON.stringify([...animals])) as IAnimal[];
    x.map((result) => {
      if (result.id === animal?.id) {
        x[result.id - 1].isFed = !x[result.id - 1].isFed;
        x[result.id - 1].lastFed = new Date().toISOString();
      }
      return "";
    });
    dispatch(setAnimals(x));
  };

  if (id) animal = animals.find((result) => result.id === parseInt(id));

  let html = (
    <div>
      {animal?.name}
      <p>Senast matad: {animal?.lastFed}</p>
      {animal?.isFed ? (
        <button disabled>Mata djur</button>
      ) : (
        <button
          onClick={() => {
            setLocalStorage();
          }}
        >
          Mata djur
        </button>
      )}
      <p>{animal?.longDescription}</p>
    </div>
  );
  return (
    <>
      <Link to="/">
        <p>Hem</p>
      </Link>
      {html}
    </>
  );
};
