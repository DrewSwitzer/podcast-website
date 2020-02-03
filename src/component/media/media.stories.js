import React from 'react';
import Media from './media';

export default {
  title: 'Media',
};

const item = {
    title: {
        _text: "NBP Ep 16: It's a Snow Day!!"
    },
    "itunes:title": {
        _text: "It's a Snow Day!!"
    },
    pubDate: {
        _text: "Wed, 11 Dec 2019 11:00:00 +0000"
    },
    guid: {
        _attributes: {
            isPermaLink: "false"
        },
        _cdata: "50806d17-f298-4d2c-8716-c7dbd19e5bd7"
    },
    link: {
        _cdata: "http://nostalgiablastpocast.libsyn.com/nbp-ep-16-snow-day"
    },
    "itunes:image": {
        _attributes: {
            href: "https://ssl-static.libsyn.com/p/assets/2/b/4/f/2b4f45e65033650f/podcastlogo_itunesedit.png"
        }
    },
    description: {
        _cdata: "There was nothing quite like waking up on a school day to a heavy blanket of snow and then rushing to the TV to see if your school would crawl across the bottom of the screen. Those times that it did were almost as exciting as Christmas morning. An unexpected day off from school was one of the true joys of childhood. Join Drew and Brian as they discuss snow days and faking sick to get out of school in the 90s!"
    },
    "content:encoded": {
        _cdata: "There was nothing quite like waking up on a school day to a heavy blanket of snow and then rushing to the TV to see if your school would crawl across the bottom of the screen. Those times that it did were almost as exciting as Christmas morning. An unexpected day off from school was one of the true joys of childhood. Join Drew and Brian as they discuss snow days and faking sick to get out of school in the 90s!"
    },
    enclosure: {
        _attributes: {
            length: "66450830",
            type: "audio/mpeg",
            url: "https://traffic.libsyn.com/secure/nostalgiablastpocast/NBP_S_2_Ep_9_Snow_Days_-_121119_12.02_AM.mp3?dest-id=1418015"
        }
    },
    "itunes:duration": {
        _text: "46:09"
    },
    "itunes:explicit": {
        _text: "clean"
    },
    "itunes:keywords": {
        _text: "school,snow,disney,movies,nostalgia,review,days,90s,retro,1990s,infomercials"
    },
    "itunes:subtitle": {
        _cdata: "There was nothing quite like waking up on a school day to a heavy blanket of snow and then rushing to the TV to see if your school would crawl across the bottom of the screen. Those times that it did were almost as exciting as Christmas morning. An..."
    },
    "itunes:summary": {
        _text: "There was nothing quite like waking up on a school day to a heavy blanket of snow and then rushing to the TV to see if your school would crawl across the bottom of the screen. Those times that it did were almost as exciting as Christmas morning.\r\n\r\nAn unexpected day off from school was one of the true joys of childhood. Join Drew and Brian as they discuss snow days and faking sick to get out of school in the 90s!"
    },
    "itunes:season": {
        _text: "2"
    },
    "itunes:episode": {
        _text: "9"
    },
    "itunes:episodeType": {
        _text: "full"
    },
    "itunes:author": {
        _text: "Drew & Brian"
    }
}

export const withMediaItem = () => <Media item={item} />;