import types from '../../types';
import initialState from '../../initialState';

function style(state = initialState.style, action) {
  switch (action.type) {
    case types.TOGGLE_RETRO:
      return {
        ...state,
        isRetro: !state.isRetro
      }
    default:
      return state
  }
}

export default style;