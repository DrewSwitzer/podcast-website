import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MediaBrowser from '../media-browser';
import Header from '../header';
import Footer from '../footer';
import loading from '../../images/loading.svg';
import styles from './app.module.css';

class App extends Component {
  render() {
    return (
      <div className={this.props.isRetro?[styles.app, styles.appRetro].join(' '):styles.app}>
        <div>
          <Header channel={this.props.podcast.rss.channel}/>
          {this.props.podcast.isLoading
            ?<div><h1 class={styles.loading}>Loading . . .</h1><img className={styles.loadingIcon} src={loading} alt="Loading"></img></div>
            :<MediaBrowser/>
          }
          <Footer channel={this.props.podcast.rss.channel}/>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  podcast: PropTypes.object.isRequired
}

export default App;
