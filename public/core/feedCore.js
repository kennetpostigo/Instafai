import I from 'immutable';

export function handleReceiveInformation (state, results, img) {
  var info = I.Map({data: results, imgUrls: img})
  return state.setIn(['info'], info);
}

export function handlePollInformation (state, results, img) {

}
