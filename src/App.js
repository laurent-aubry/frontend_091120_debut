import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Header from "./header/header";

import Films from "./pages/films";
import Musiques from "./pages/musiques";
// import TableFilm from "./pages/tableFilms";

function App() {
  return (
    <div className="App">
      <h1>Bienvenue au GRETA</h1>
      <Router>
        <Header />
        <Route path="/" exact>
          <Films />
          {/* <TableFilm /> */}
        </Route>
        <Route path="/musiques" exact>
          <Musiques />
        </Route>
        
      </Router>
    </div>
  );
}

export default App;
