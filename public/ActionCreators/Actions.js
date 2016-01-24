import I from 'immutable';

export function receiveInformation (results, img) {
  return {
    type: 'RECEIVE_INFORMATION',
    results,
    img
  }
}

export function pollInformation (results, img) {
  return {
    type: 'POLL_INFORMATION',
    results,
    img
  }
}

//Async Action Creators

export function fetchInformation () {
  return function (dispatch) {
    return fetch('http://localhost:3000/imgs/gopro')
      .then(function (res) {
        return res.json()
      })
      .then(function (responseBody) {
        var result = I.fromJS(responseBody.result);
        console.log('results async: ', result.toJS())
        var imgUrls = I.fromJS(responseBody.imgUrls);
        console.log('imgUrls async: ', imgUrls.toJS())
        return dispatch(receiveInformation(result, imgUrls));
      });
  }
}

export function fetchPollInformation () {
  return function (dispatch) {
    fetch('http://localhost:3000/imgs/gopro')
      .then(function (res) {
        return res.json()
      })
      .then(function (responseBody) {
        var responseBody = I.fromJS(responseBody);
        console.log('async: ', responseBody);
        return dispatch(pollInformation(responseBody));
      });
  }
}
