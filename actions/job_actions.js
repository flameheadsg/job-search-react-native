import axios from 'axios';
import reverseGeoCode from 'latlng-to-zip';

import {
  FETCH_JOBS,
  SAVE_JOB,
  CLEAR_JOBS
} from './types';

const URL = 'https://jobs.github.com/positions.json?';

export const fetchJobs = ({
    longitude,
    latitude
  },
  callback
  ) => async dispatch => {
  try {
    const url = `${URL}lat=${latitude}&long=${longitude}`;
    let { data } = await axios.get(url);
    dispatch({
      type: FETCH_JOBS,
      payload: data
    });
    callback();
  } catch (e) {
    console.log(e);
  }
};

export const saveJob = (job) => {
  return {
    type: SAVE_JOB,
    payload: job
  };
};

export const clearJobs = () => {
  return { type: CLEAR_JOBS };
};
