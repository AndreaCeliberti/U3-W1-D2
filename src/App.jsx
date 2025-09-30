import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MyNav from "./components/Mynav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BooksCard from "./components/AllTheBooks";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />

      <BooksCard bookTitle="Nome Libro" bookPrice="prezzoLibro" bookGendre="genere" />

      <MyFooter />
    </>
  );
}

export default App;
