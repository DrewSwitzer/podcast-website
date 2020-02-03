import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button, Colors} from 'react-foundation';
import playIcon from '../../images/play-icon.svg';
import styles from './audio.module.css';

class Audio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false
        };
    }

    handlePlay() {
        this.setState({
            isOpened: true
        })
    }

    render() {
    return (
      <div className={styles.content}>
        { this.state.isOpened
          ?<audio className={styles.audio} controls controlsList="nodownload" autoPlay>
              <source src={this.props.enclosure._attributes.url} type={this.props.enclosure._attributes.type}></source>
          </audio>
          :<Button color={Colors.SUCCESS} className={styles.roundButton} onClick={() => this.handlePlay()}>
            <img src={playIcon} alt="play"/>Play
          </Button>
        }
        <a href={this.props.enclosure._attributes.url} download={"NBP_S" + this.props.season + "Ep" + this.props.episode + ".mp3"}>
            <Button color={Colors.SECONDARY} className={styles.download} isHollow>Download</Button>
        </a>
      </div>
    );
  }
}

Audio.propTypes = {
  enclosure: PropTypes.object.isRequired,
  season: PropTypes.string.isRequired,
  episode: PropTypes.string.isRequired
}

export default Audio;
