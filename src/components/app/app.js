import React from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";
import ItemList from "../item-list";
import "./app.css";
import ErrorIndicator from "../error-indicator";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-service";

export default class App extends React.Component {
  swapiService = new SwapiService();

  state = {
    hasError: false,
  };
  componentDidCatch() {
    console.log("componentDidCatch");
    this.setState({
      hasError: true,
    });
  }
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <PeoplePage />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              renderItem={(item) => item.name}
              onClick={this.onPersonSelected}
              getData={this.swapiService.getAllEpisodes}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              renderItem={(item) => item.name}
              onClick={this.onPersonSelected}
              getData={this.swapiService.getAllLocations}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}
