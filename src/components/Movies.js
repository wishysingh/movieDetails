import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

class Movies extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    return (
        <div>
            <h2>{this.props.movies.title}</h2>
            {this.props.movies.backdrop_path?<Link to={`/movies/${this.props.movies.title}?id=${this.props.movies.id}`}><img alt='movies' src={`https://image.tmdb.org/t/p/w500${this.props.movies.backdrop_path}`} /></Link>:<div/>}
        </div>
    );
  }

}

Movies.propTypes = {
  movies: PropTypes.object
};



export default Movies;

