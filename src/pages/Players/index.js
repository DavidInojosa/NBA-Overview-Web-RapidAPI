import React, { Component } from "react";
import api from "../../services/api";
export default class Players extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get(`/players`);

    const result = response.data;

    this.setState({
      products: result[0],
    });
    console.log(result);
  }

  render() {
    return <div className="product-list">{this.state.products.id}</div>;
  }
}
