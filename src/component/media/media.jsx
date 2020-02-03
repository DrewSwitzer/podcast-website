import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {MediaObject, MediaObjectSection, Thumbnail} from 'react-foundation';
import Audio from '../audio';
import DOMPurify from 'dompurify';
import * as logos from '../../images/logos';
import styles from './media.module.css';

class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isOpened: false
    };
  }

  handleToggleDescription() {
    this.setState({
      isOpened: !this.state.isOpened
    });
  }

  render() {
    const date = new Date(this.props.item.pubDate._text);
    const dateString = (date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear();
    const season = this.props.item.hasOwnProperty('itunes:season')?this.props.item['itunes:season']._text:'1';
    const episode = this.props.item.hasOwnProperty('itunes:episode')?this.props.item['itunes:episode']._text:'0';
    const description = {__html:DOMPurify.sanitize(this.props.item.description._cdata)};

    return (
      <div>
            <MediaObject className={styles.card} onClick={() => this.handleToggleDescription()}>
                <MediaObjectSection>
                    <Thumbnail className={styles.thumbnail} src={this.props.item['itunes:image']._attributes.href} alt="podcast thumbnail"/>
                </MediaObjectSection>
                <MediaObjectSection>
                    <h4 className={styles.title}>{this.props.item.title._text}</h4>
                    <p className={styles.date}>{dateString}</p>
                    <div className={this.state.isOpened?styles.description:[styles.description, styles.hidden].join(' ')} dangerouslySetInnerHTML={description}></div>
                    <Audio season={season} episode={episode} enclosure={this.props.item.enclosure}/>
                    <img className={styles.dropdown} src={this.state.isOpened?logos.collapse:logos.dropdown} alt="dropdown/collapse"/>
                </MediaObjectSection>
            </MediaObject>
        </div>
    );
  }
}

Media.propTypes = {
  item: PropTypes.object.isRequired
}

export default Media;
