import React, { Component } from "react";

import Header from "../header";
import ErrorBoundry from "../error-boundry";
import ItemDetails, { Record } from "../item-details";
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from "../sw-components";

import SwapiService from "../../services/swapi-service";

import "./app.css";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  render() {
    // const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    const {
      getPerson,
      getStarship,
      getAllPeople,
      getAllPlanets,
      getPlanet,
      getAllStarships
    } = this.swapiService;

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />
          <PersonDetails itemId={11} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={9} />

          <PersonList>{({ name }) => <span>{name}</span>}</PersonList>
          <StarshipList>{({ name }) => <span>{name}</span>}</StarshipList>
          <PlanetList>{({ name }) => <span>{name}</span>}</PlanetList>
        </div>
      </ErrorBoundry>
    );
  }
}
