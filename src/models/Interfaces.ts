export interface IAnimal {
  id: number;
  imageUrl: string;
  isFed: boolean;
  lastFed: string;
  latinName: string;
  longDescription: string;
  medicine: string;
  name: string;
  shortDescription: string;
  yearOfBirth: number;
}

interface IValue {
  value: object;
}

export interface IState {
  animals: IValue;
}
