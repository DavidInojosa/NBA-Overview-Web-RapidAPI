import React, { Component } from "react";
import api from "../../services/api";

import "./styles.css";

export default class Main extends Component {
  state = {
    players: [],
    playersInfo: {},
    games: [],
    gamesInfo: {},
    teams: [],
    teamsInfo: {},
    flagPlayers: true,
    flagGames: false,
    flagTeams: false,
  };

  async componentDidMount() {
    this.loadPlayers();
    this.loadGames();
    this.loadTeams();
  }

  loadPlayers = async (page = 1) => {
    const response = await api.get(`/players?page=${page}&per_page=25`);

    const result = await response.data;

    const { ...playersInfo } = result.meta;

    this.setState({
      players: result.data,
      playersInfo,
    });
    console.log(result.data);
  };

  loadGames = async (page = 1) => {
    const response = await api.get(`/games?page=${page}&per_page=25`);

    const result = await response.data;

    const { ...gamesInfo } = result.meta;

    this.setState({
      games: result.data,
      gamesInfo,
    });
    console.log(result.data);
  };

  loadTeams = async () => {
    const response = await api.get(`/teams?page=0`);

    const result = await response.data;

    const { ...teamsInfo } = result.meta;

    this.setState({
      teams: result.data,
      teamsInfo,
    });
    console.log(result.data);
  };

  prevPage = () => {
    const {
      playersInfo,
      gamesInfo,
      teamsInfo,
      flagPlayers,
      flagGames,
      flagTeams,
    } = this.state;

    if (flagPlayers) {
      if (playersInfo.current_page === playersInfo.total_pages) return;

      const pageNumber = playersInfo.current_page - 1;

      this.loadPlayers(pageNumber);
    }

    if (flagGames) {
      if (gamesInfo.current_page === gamesInfo.total_pages) return;

      const pageNumber = gamesInfo.current_page - 1;

      this.loadGames(pageNumber);
    }

    if (flagTeams) {
      if (teamsInfo.current_page === teamsInfo.total_pages) return;

      const pageNumber = teamsInfo.current_page - 1;

      this.loadTeams(pageNumber);
    }
  };

  nextPage = () => {
    const {
      playersInfo,
      gamesInfo,
      teamsInfo,
      flagPlayers,
      flagGames,
      flagTeams,
    } = this.state;
    if (flagPlayers) {
      if (playersInfo.current_page === playersInfo.total_pages) return;

      const pageNumber = playersInfo.next_page;

      this.loadPlayers(pageNumber);
    }
    if (flagGames) {
      if (gamesInfo.current_page === gamesInfo.total_pages) return;

      const pageNumber = gamesInfo.next_page;

      this.loadGames(pageNumber);
    }
    if (flagTeams) {
      if (teamsInfo.current_page === teamsInfo.total_pages) return;

      const pageNumber = 0;

      this.loadGames(pageNumber);
    }
  };

  render() {
    const {
      players,
      playersInfo,
      games,
      gamesInfo,
      teams,
      teamsInfo,
      flagGames,
      flagPlayers,
      flagTeams,
    } = this.state;
    if (flagPlayers) {
      return (
        <div className="main-list">
          <div className="header">
            <h1
              className="players"
              onClick={() =>
                this.setState({
                  flagPlayers: true,
                  flagGames: false,
                  flagTeams: false,
                })
              }
            >
              Players
            </h1>
            <h1
              className="games"
              onClick={() =>
                this.setState({
                  flagPlayers: false,
                  flagGames: true,
                  flagTeams: false,
                })
              }
            >
              Games
            </h1>
            <h1
              className="teams"
              onClick={() =>
                this.setState({
                  flagPlayers: false,
                  flagGames: false,
                  flagTeams: true,
                })
              }
            >
              Teams
            </h1>
          </div>
          <div className="table">
            <table
              id="dtBasicExample"
              className="tableTest"
              cellSpacing="0"
              width="100%"
            >
              <thead>
                <tr>
                  <th className="first-name">Name</th>
                  <th className="position-title">Position</th>
                  <th className="team-title-playing">Team Playing</th>
                  <th className="city-title-playing">City</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player) => (
                  <tr key={player.id}>
                    <td>
                      {player.first_name} {player.last_name}
                    </td>
                    <td>{player.position}</td>
                    <td>{player.team.full_name}</td>
                    <td>{player.team.city}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Team Playing</th>
                  <th>City</th>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="actions">
            <button
              disabled={playersInfo.current_page === 1}
              onClick={this.prevPage}
            >
              Anterior
            </button>
            <h2>Current Page: {playersInfo.current_page}</h2>
            <br></br>
            <h2>Total: {playersInfo.total_pages}</h2>

            <button
              disabled={playersInfo.current_page === playersInfo.total_pages}
              onClick={this.nextPage}
            >
              Próxima
            </button>
          </div>
        </div>
      );
    }
    if (flagGames) {
      console.log(games);
      return (
        <div className="main-list">
          <div className="header">
            <h1
              className="players"
              onClick={() =>
                this.setState({
                  flagPlayers: true,
                  flagGames: false,
                  flagTeams: false,
                })
              }
            >
              Players
            </h1>
            <h1
              className="games"
              onClick={() =>
                this.setState({
                  flagPlayers: false,
                  flagGames: true,
                  flagTeams: false,
                })
              }
            >
              Games
            </h1>
            <h1
              className="teams"
              onClick={() =>
                this.setState({
                  flagPlayers: false,
                  flagGames: false,
                  flagTeams: true,
                })
              }
            >
              Teams
            </h1>
          </div>

          <div className="table">
            <table
              id="dtBasicExample"
              className="tableTest"
              cellSpacing="0"
              width="100%"
            >
              <thead>
                <tr>
                  <th className="date-title">Date</th>
                  <th className="home-title">Home Team Score</th>
                  <th className="home-title-score">Home Team</th>
                  <th className="x">x</th>
                  <th className="visitors-title">Visitors Team</th>
                  <th className="visitors-title-score">Visitors Team Score</th>
                  <th className="status-title">Status</th>
                  <th className="season-title">Season</th>
                </tr>
              </thead>
              <tbody>
                {games.map((game) => (
                  <tr key={game.id}>
                    <td>
                      {game.date
                        .replace(/T/, " ")
                        .replace(/\..+/, "")
                        .slice(0, 10)}
                    </td>
                    <td>{game.home_team_score}</td>
                    <td>{game.home_team.abbreviation}</td>
                    <td>X</td>
                    <td>{game.visitor_team.abbreviation}</td>
                    <td>{game.visitor_team_score}</td>
                    <td>{game.status}</td>
                    <td>{game.season}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>Date</th>
                  <th>Home Team Score</th>
                  <th>Home Team</th>
                  <th>x</th>
                  <th>Visitors Team</th>
                  <th>Visitors Team Score</th>
                  <th>Status</th>
                  <th>Season</th>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="actions">
            <button
              disabled={gamesInfo.current_page === 1}
              onClick={this.prevPage}
            >
              Anterior
            </button>
            <h2>Current Page: {gamesInfo.current_page}</h2>
            <br></br>
            <h2>Total: {gamesInfo.total_pages}</h2>

            <button
              disabled={gamesInfo.current_page === gamesInfo.total_pages}
              onClick={this.nextPage}
            >
              Próxima
            </button>
          </div>
        </div>
      );
    }
    if (flagTeams) {
      console.log(teams);
      return (
        <div className="main-list">
          <div className="header">
            <h1
              className="players"
              onClick={() =>
                this.setState({
                  flagPlayers: true,
                  flagGames: false,
                  flagTeams: false,
                })
              }
            >
              Players
            </h1>
            <h1
              className="games"
              onClick={() =>
                this.setState({
                  flagPlayers: false,
                  flagGames: true,
                  flagTeams: false,
                })
              }
            >
              Games
            </h1>
            <h1
              className="teams"
              onClick={() =>
                this.setState({
                  flagPlayers: false,
                  flagGames: false,
                  flagTeams: true,
                })
              }
            >
              Teams
            </h1>
          </div>
          <div classsName="table">
            <table
              id="dtBasicExample"
              className="tableTest"
              cellSpacing="0"
              width="100%"
            >
              <thead>
                <tr>
                  <th className="Abbreviation">NBA</th>
                  <th className="City">City</th>
                  <th className="Conference">Conference</th>
                  <th className="Division">Division</th>
                  <th className="FullName">Name</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((team) => (
                  <tr key={team.id}>
                    <td>{team.abbreviation}</td>
                    <td>{team.city}</td>
                    <td>{team.conference}</td>
                    <td>{team.division}</td>
                    <td>{team.full_name}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>NBA</th>
                  <th>City</th>
                  <th>Conference</th>
                  <th>Division</th>
                  <th>Name</th>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="actions">
            <button
              disabled={teamsInfo.current_page === 1}
              onClick={this.prevPage}
            >
              Anterior
            </button>
            <h2>Current Page: {teamsInfo.current_page}</h2>
            <br></br>
            <h2>Total: {teamsInfo.total_pages}</h2>

            <button
              disabled={teamsInfo.current_page === teamsInfo.total_pages}
              onClick={this.nextPage}
            >
              Próxima
            </button>
          </div>
        </div>
      );
    }
  }
}
