import I from 'immutable';
import {handleReceiveInformation, handlePollInformation} from './../core/feedCore.js';
const initState = I.Map({
  info: I.Map({
    result: I.Map({}),
    imgUrls: I.List()
  })
});
export function rootReducer (state = initState, action) {
  switch (action.type) {

    case 'RECEIVE_INFORMATION':
      return handleReceiveInformation(state, action.results, action.img);

    case 'POLL_INFORMATION':
      return handlePollInformation(state, action.results, action.img);

    default:
      return state;
  }
}
