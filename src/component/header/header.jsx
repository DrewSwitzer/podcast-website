import React, { Component } from 'react';
import logo from '../../images/logo.png';
import PropTypes from 'prop-types';
import { Switch, Sizes } from 'react-foundation';
import styles from './header.module.css';

class Header extends Component {
  render() {
    const logoSrc = this.props.channel.hasOwnProperty('image')?this.props.channel.image.url._text:logo;
    const title = this.props.channel.hasOwnProperty('title')?this.props.channel.title._text:"Loading . . .";
    const description = this.props.channel.hasOwnProperty('description')
      ?this.props.channel.description._cdata:"Loading . . .";
    const mailTo = this.props.channel.hasOwnProperty('itunes:owner')?this.props.channel['itunes:owner']['itunes:email']._text:"Loading . . .";
    const author = this.props.channel.hasOwnProperty('itunes:author')?this.props.channel['itunes:author']._text:"Loading . . .";
    const tags = this.props.channel.hasOwnProperty('itunes:category')?this.props.channel['itunes:category']:[{_attributes:{text:'Loading . . .'}}];

    return (
        <header>
            <div className={styles.headerContainer}>
                <img className={styles.logo} src={logoSrc} alt="NBP logo"></img>
                <h1 className={styles.header}>{title}</h1>
                <div className={styles.card}>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.author}>
                        <a className={styles.link} href={mailTo}>
                            - {author}
                        </a>
                    </div>
                    <p className={styles.tags}>Tags: {tags.map(category => {
                        return (category._attributes.text + ', ');
                    })}</p>
                </div>
                <Switch className={styles.switch} onChange={this.props.onToggle} size={Sizes.SMALL} alt="Switch to Retro style"/>
            </div>
        </header>
    );
  }
}

Header.propTypes = {
  channel: PropTypes.object.isRequired,
  isRetro: PropTypes.bool.isRequired
}

export default Header;
