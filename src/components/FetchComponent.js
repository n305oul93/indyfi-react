import React, { Component } from 'react';
import { baseUrl } from '../shared/baseUrl';
import request from '../shared/request';
import '../css/Watch.css';

class FetchMovies extends Component {
  constructor({ props }) {
    super(props);
    this.state = {
      sciFi: []
    };
  }

  componentDidMount() {
    // const url = baseUrl + request.fetchScienceFiction;
    fetch(this.props.fetchUrl)
      .then(res => res.json())
      // .then(movies => console.log(movies.results));
      .then(movies => {
        this.setState({
          sciFi: movies.results
        });
      });
  }

  render() {
    const poster_url = 'https://image.tmdb.org/t/p/original';
    return (
      <div className='row'>
        <h2>{this.props.title}</h2>
        <div className='row__posters'>
          {this.state.sciFi.map(movie => (
            <img
              key={movie.id}
              className='row__poster'
              src={`${poster_url}${
                movie.backdrop_path ? movie.backdrop_path : movie.poster_path
              }`}
              alt={movie.title}
            />
            // <li key={movie.id}>{movie.title}</li>
          ))}
        </div>
      </div>
    );
  }
}

export default FetchMovies;
