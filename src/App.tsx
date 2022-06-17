import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ShowAnimal } from "./components/ShowAnimal";
import { ShowAnimals } from "./components/ShowAnimals";
import Store from "./redux/Store";
import "./styles/GlobalStyles";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <Provider store={Store}>
        <GlobalStyles />
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
