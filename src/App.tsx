import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ShowAnimal } from "./components/ShowAnimal";
import { ShowAnimals } from "./components/ShowAnimals";
import Store from "./redux/Store";

function App() {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ShowAnimals />} />
            <Route path="/:id" element={<ShowAnimal />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
