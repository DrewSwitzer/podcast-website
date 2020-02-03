import React from 'react';
import App from './app';

export default {
  title: 'App',
};

const podcast = {
    isLoading: false,
    rss: {
        channel: {
            title: {
                _text: "Test"
            }
        }
    }
}

const loadingPodcast = {
    isLoading: true
}

export const withTitle = () => <App podcast={podcast} />;

export const whileLoading = () => <App podcast={loadingPodcast} />;