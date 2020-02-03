import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button, Colors} from 'react-foundation';
import Media from '../media';
import styles from './media-browser.module.css';

class MediaBrowser extends Component {
    render() {
    return (
      <div className={styles.container}>
          {
              this.props.items.slice(0,this.props.mediaCount).map( (item, index) => {
                  return (
                    <Media key={index} item={item} />
                  );
              })
          }
          {
            this.props.mediaCount < this.props.items.length &&
            <Button className={styles.button} color={Colors.PRIMARY} onClick={this.props.onSeeMoreClick}>See More</Button>
          }
      </div>
    );
  }
}

MediaBrowser.propTypes = {
  items: PropTypes.array.isRequired,
  mediaCount: PropTypes.number.isRequired
}

export default MediaBrowser;
