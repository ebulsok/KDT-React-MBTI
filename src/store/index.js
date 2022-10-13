import { combineReducers } from 'redux';
import mbti from './modules/mbti';

// reducer 들을 combine 해서 export
export default combineReducers({
  mbti,
});
