import React, { Component } from "react";

import "./item-details.css";
import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button/error-button";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId).then(item => {
      this.setState({ item });
    });
  }

  render() {
    const { item } = this.state;
    if (!item) {
      return <span>Select a item from a list</span>;
    }

    const { image, name } = item;

    return (
      <div className="item-details card">
        <img className="item-image" src={image} alt="character" />

        <div className="card-body">
          <h5>{name}</h5>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, (child, idx) => {
              return React.cloneElement(child, { item });
            })}
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
  }
}
