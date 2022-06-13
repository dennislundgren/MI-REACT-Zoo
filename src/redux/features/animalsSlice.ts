import { createSlice } from "@reduxjs/toolkit";
import { IAnimal } from "../../models/Interfaces";

export const animalsSlice = createSlice({
  name: "animals",
  initialState: {
    value: [] as IAnimal[],
  },
  reducers: {
    setAnimals: (state, value) => {
      localStorage.setItem("animals", JSON.stringify(value.payload));
      state.value = value.payload as unknown as IAnimal[];
    },
  },
});

export const { setAnimals } = animalsSlice.actions;
export default animalsSlice.reducer;
