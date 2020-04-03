import React from "react";
import SwapiServie from "../../services/swapi-service";
import "./random-planet.css";
import SwapiService from "../../services/swapi-service";

export default class RandomPlanet extends React.Component {
  state = {
    planet: {}
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = planet => {
    this.setState({
      planet
    });
  };
  swapiServie = new SwapiService();
  updatePlanet() {
    const id = Math.floor(Math.random() * 25 + 1);
    this.swapiServie.getPlanet(id).then(this.onPlanetLoaded);
  }

  render() {
    const {
      planet: { population, rotationPeriod, diameter, name, id }
    } = this.state;
    return (
      <div className="random-planet jumbotron rounded">
        <img
          className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population:</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period:</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter:</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
