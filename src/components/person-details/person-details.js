import React from "react";
import Spinner from "../spinner";

import "./person-details.css";
import SwapiService from "../../services/swapi-service";

export default class PersonDetails extends React.Component {
  swapiService = new SwapiService();
  state = {
    person: null,
    loading: false,
  };
  componentDidMount() {
    this.updatePerson();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
    if (this.state.loading !== prevState.loading) {
      this.setState({
        loading: false,
      });
    }
  }
  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }
    this.swapiService.getPerson(personId).then((person) => {
      this.setState({
        person,
        loading: true,
      });
    });
  }
  render() {
    if (!this.state.person) {
      return <span>Select a person from the list</span>;
    }

    const spinner = this.state.loading ? <Spinner /> : null;
    const content = !this.state.loading ? (
      <PersonDetailRender person={this.state.person} />
    ) : null;
    return (
      <div className="person-details card">
        {spinner}
        {content}
      </div>
    );
  }
}

const PersonDetailRender = ({ person }) => {
  const { name, gender, origin, image, species, id } = person;
  return (
    <React.Fragment>
      <img className="person-image" src={image} alt="person here" />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender: </span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Origin: </span>
            <span>{origin}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Species:</span>
            <span>{species}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
