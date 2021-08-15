import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import {Movie} from "./components/Movie"
import { MovieDetail } from "./components/MovieDetail";
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();


export function App() {
  return (
    <main>
      <BrowserRouter>
      <Switch>
        <Route path="/" component={Movie} exact />
        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
      </BrowserRouter>
    </main>
  );}

export default App;