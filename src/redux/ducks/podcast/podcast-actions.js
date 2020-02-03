import axios from 'axios';
import {xml2js} from 'xml-js';
import types from '../../types';

export const requestRss = (podcast) => {
  return {
    type: types.REQUEST_RSS,
    isLoading: true
  }
}

export const getRss = (podcast) => {
  return dispatch => {
    dispatch(requestRss(podcast));
    return axios.get(podcast).then(response => {
      dispatch(receiveRss(xml2js(response.data, {compact: true})));
    });
  }
}

export const receiveRss = (podcast) => {
  console.log('Receive RSS: ' + podcast);
  return {
    type: types.RECEIVE_RSS,
    response: podcast
  }
}

export const incrementMediaCount = () => {
  console.log('increment media count called');
  return {
    type: types.INCREMENT_MEDIA_COUNT
  }
}