/* eslint-disable camelcase */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export class MoviesItem extends PureComponent {
  render() {
    const {item} = this.props;
    return (
      <article className="small-movie-card catalog__movies-card">
        <Link to={`/films/${item.id}`}>

          <div className="small-movie-card__image">
            <img src={item.preview_image} alt={item.name} width="280" height="175" />
          </div>
        </Link>

        <h3 className="small-movie-card__title">
          <Link to={`/films/${item.id}`} className="small-movie-card__link" href="movie-page.html">{item.name}</Link>
        </h3>
      </article>
    );
  }
}

MoviesItem.propTypes = {
  item: PropTypes.shape({
    preview_image: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
  })
};

