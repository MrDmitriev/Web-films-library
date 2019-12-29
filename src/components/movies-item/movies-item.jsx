/* eslint-disable camelcase */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export class MoviesItem extends PureComponent {
  render() {
    const {item} = this.props;
    return (
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src={item.preview_image} alt={item.name} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{item.name}</a>
        </h3>
      </article>
    );
  }
}

MoviesItem.propTypes = {
  item: PropTypes.shape({
    preview_image: PropTypes.string,
    name: PropTypes.string,
  })
};

