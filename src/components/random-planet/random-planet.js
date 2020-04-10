import React from "react";
import "./random-planet.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

export default class RandomPlanet extends React.Component {
  state = {
    episode: {},
    loading: true,
    error: false,
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };
  componentDidMount() {
    this.updateEpisode();
    this.interval = setInterval(this.updateEpisode, 5000);
  }
  onEpisodeLoaded = (episode) => {
    this.setState({
      episode,
      loading: false,
    });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  swapiServie = new SwapiService();
  updateEpisode = () => {
    const id = Math.floor(Math.random() * 18) + 2;
    this.swapiServie
      .getEpisode(id)
      .then(this.onEpisodeLoaded)
      .catch(this.onError);
  };

  render() {
    const { episode, loading, error } = this.state;
    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? (
      <PlanetView episode={episode} />
    ) : null;
    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ episode }) => {
  const { name, airDate, number, id } = episode;
  return (
    <React.Fragment>
      <img
        className="planet-image"
        alt={name + " photo"}
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Air Date:</span>
            <span>{airDate}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Episode number:</span>
            <span>{number}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
