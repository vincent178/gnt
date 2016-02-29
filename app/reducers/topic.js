'use strict';

import * as types from '../constants/action-types';

const initialState = {
  isFetching: false,
  items: []
};

export default function topicReducer(state = initialState, action) {
  switch(action.type) {
    case types.REQUEST_TOPICS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.RECEIVE_TOPICS:
      return Object.assign({}, state, {
        isFetching: false,
        items: Array.from(new Set([...state.items, ...action.topics]))
      });
    default:
      return state;
  }
}