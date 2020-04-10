import React from "react";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

import "./people-page.css";
import SwapiService from "../../services/swapi-service";

export default class PeoplePage extends React.Component {
  state = {
    selectedPerson: 3,
  };
  swapiService = new SwapiService();
  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
      hasError: false,
    });
  };
  render() {
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            renderItem={(item) => `${item.name}(${item.gender})`}
            onClick={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}
          />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}
