import _ from 'lodash';

import {
  SAVE_JOB,
  CLEAR_JOBS
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_JOB:
      return _.uniqBy([
        action.payload, ...state
      ], 'id');
    case CLEAR_JOBS:
      return [];
    default:
      return state;
  }
}
