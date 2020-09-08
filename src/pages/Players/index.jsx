import React, { Component } from "react";
import api from "../../services/api";

import "./styles.css";

export default class Players extends Component {
  state = {
    products: [],
    productInfo: {},
  };

  async componentDidMount() {
    this.loadPlayers();
  }

  loadPlayers = async (page = 1) => {
    const response = await api.get(`/players?page=${page}&per_page=25`);

    const result = await response.data;

    const { ...productInfo } = result.meta;

    this.setState({
      products: result.data,
      productInfo,
    });
    console.log(result.data);
  };

  loadGames = async (page = 1) => {
    const response = await api.get(`/games?page=${page}&per_page=25`);

    const result = await response.data;

    const { ...productInfo } = result.meta;

    this.setState({
      products: result.data,
      productInfo,
    });
    console.log(result.data);
  };

  loadTeams = async (page = 1) => {
    const response = await api.get(`/teams?page=0`);

    const result = await response.data;

    const { ...productInfo } = result.meta;

    this.setState({
      products: result.data,
      productInfo,
    });
    console.log(result.data);
  };

  prevPage = () => {
    const { productInfo } = this.state;

    if (productInfo.current_page === productInfo.total_pages) return;

    const pageNumber = productInfo.current_page - 1;

    this.loadPlayers(pageNumber);
  };

  nextPage = () => {
    const { productInfo } = this.state;

    if (productInfo.current_page === productInfo.total_pages) return;

    const pageNumber = productInfo.next_page;

    this.loadPlayers(pageNumber);
  };

  players = () => {};

  render() {
    const { products, productInfo } = this.state;
    return (
      <div className="product-list">
        <div className="tags">
          <h1 className="players">Players</h1>
          <h1 className="games">Games</h1>
          <h1 className="teams">Teams</h1>
        </div>
        {products.map((product) => (
          <article>
            <p key={product.id}>
              {product.first_name} {product.last_name}
            </p>
          </article>
        ))}

        <div className="actions">
          <button
            disabled={productInfo.current_page === 1}
            onClick={this.prevPage}
          >
            Anterior
          </button>
          <h2>Current Page: {productInfo.current_page}</h2>
          <br></br>
          <h1>Total: {productInfo.total_pages}</h1>

          <button
            disabled={productInfo.current_page === productInfo.total_pages}
            onClick={this.nextPage}
          >
            Próxima
          </button>
        </div>
      </div>
    );
  }
}
