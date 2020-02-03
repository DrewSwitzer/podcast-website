import types from '../../types';
import initialState from '../../initialState';

function podcast(state = initialState.podcast, action) {
  switch (action.type) {
    case types.REQUEST_RSS:
      return {
        ...state,
        isLoading: true
      }
    case types.RECEIVE_RSS:
      console.log(action);
      return {
        ...state,
        isLoading: false,
        ...action.response
      }
    case types.INCREMENT_MEDIA_COUNT:
      console.log(state.mediaCount);
      return {
        ...state,
        mediaCount: state.mediaCount+4
      }
    default:
      return state
  }
}

export default podcast;