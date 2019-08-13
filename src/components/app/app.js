import React, { Component } from "react";

import Header from "../header";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import ItemDetails, { Record } from "../item-details";
import ItemList from "../item-list";

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

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );
    const starshipDetails = (
      <ItemDetails itemId={5} getData={getStarship}>
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />
          {/* <Row left={personDetails} right={starshipDetails} /> */}
          <ItemList getData={getAllPeople} onItemSelected={() => {}}>
            {({ name }) => <span>{name}</span>}
          </ItemList>

          <ItemList getData={getAllPlanets} onItemSelected={() => {}}>
            {({ name }) => <span>{name}</span>}
          </ItemList>

          {/* {planet}

          <div className="row mb2 button-row">
            <button
              className="toggle-planet btn btn-warning btn-lg"
              onClick={this.toggleRandomPlanet}
            >
              Toggle Random Planet
            </button>
            <ErrorButton />
          </div>

          <PeoplePage /> */}
        </div>
      </ErrorBoundry>
    );
  }
}
