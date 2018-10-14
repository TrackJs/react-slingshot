import {TrackJS} from 'trackjs';

export default store => next => action => {
  try {
    TrackJS.console.log(action);
    return next(action);
  }
  catch (err) {
    TrackJS.warn(store.getState());
    TrackJS.track(err);
    throw err;
  }
};
