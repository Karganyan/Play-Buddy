import { combineReducers } from 'redux';
import userChatsReducer from './userChatsReducer';
import userEventsReducer from './userEventsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  userEvents: userEventsReducer,
  userChats: userChatsReducer,
})

export default rootReducer;
