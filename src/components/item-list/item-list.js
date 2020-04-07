import React from "react";
import SwapiService from "../../services/swapi-service.js";
import Spinner from "../spinner";

import "./item-list.css";

export default class ItemList extends React.Component {
  state = {
    peopleList: null,
  };
  swapiService = new SwapiService();
  componentDidMount() {
    this.swapiService.getAllPeople().then((peopleList) => {
      this.setState({
        peopleList,
      });
    });
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }
    return (
      <ul className="item-list list-group">
        {peopleList.map((item) => (
          <li
            className="list-group-item"
            key={item.id}
            onClick={() => this.props.onClick(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    );
  }
}
