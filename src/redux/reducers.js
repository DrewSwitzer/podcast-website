import { combineReducers } from 'redux';
import podcast from './ducks/podcast';
import style from './ducks/style';

const reducers = combineReducers({
  podcast,
  style
})

export default reducers;