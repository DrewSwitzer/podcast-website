import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button, Colors} from 'react-foundation';
import properties from '../../properties';
import * as logos from '../../images/logos';
import baby from '../../images/dancing-baby.gif';
import styles from './footer.module.css';

class Footer extends Component {

  render() {
    const copyright = this.props.channel.hasOwnProperty('copyright')?this.props.channel.copyright._cdata:'Loading . . .';
    return (
        <div className={this.props.isRetro?[styles.footerRetro, styles.footer].join(' '):styles.footer}>
            { this.props.isRetro && false &&
              <div>
                <img src={baby} alt="left dancing-baby.gif" className={styles.babyLeft}/>
                <img src={baby} alt="right dancing-baby.gif" className={styles.babyRight}/>
              </div>
            }
            <div className={styles.header}>Follow Us</div>
            <Button className={styles.logo} color={Colors.SUCCESS}>
                <a href={properties.footer.itunes}>
                    <img src={logos.itunesLogo} alt="itunes"/>
                </a>
            </Button>
            <Button className={styles.logo} color={Colors.SUCCESS}>
                <a href={properties.footer.spotify}>
                    <img src={logos.spotifyLogo} alt="spotify"/>
                </a>
            </Button>
            <Button className={styles.logo} color={Colors.SUCCESS}>
                <a href={properties.footer.instagram}>
                    <img src={logos.instagramLogo} alt="instagram"/>
                </a>
            </Button>
            <Button className={styles.logo} color={Colors.SUCCESS}>
                <a href={properties.footer.twitter}>
                    <img src={logos.twitterLogo} alt="twitter"/>
                </a>
            </Button>
            <Button className={styles.logo} color={Colors.SUCCESS}>
                <a href={properties.footer.youtube}>
                    <img src={logos.youtubeLogo} alt="youtube"/>
                </a>
            </Button>
            <Button className={styles.logo} color={Colors.SUCCESS}>
                <a href={properties.footer.gmail}>
                    <img src={logos.gmailLogo} alt="gmail"/>
                </a>
            </Button>
            <div className={styles.copyright}>{copyright}</div>
        </div>
    );
  }
}

Footer.propTypes = {
  channel: PropTypes.object.isRequired
}

export default Footer;
