export default store => next => (action) => {
  const { dispatch } = store;
  const {
    types,
    callAPI,
    payload = {},
  } = action;

  if (!types) {
    return next(action);
  }

  // 'requestTypes' and 'successTypes' are required'; 'failureTypes' is optional.
  const { requestTypes, successTypes, failureTypes } = types;
  if (!requestTypes) {
    throw new Error('Expected "requestType" in "types".');
  }
  if (!successTypes) {
    throw new Error('Expected "successType" in "types".');
  }
  if (typeof callAPI !== 'function') {
    throw new Error('Expected "callAPI" to be a function.');
  }

  dispatchRequestTypes();

  return callAPI().then(
    response => dispatchSuccessTypes(response),
    error => dispatchFailureTypes(error)
  );

  function dispatchRequestTypes() {
    if (Array.isArray(requestTypes)) {
      requestTypes.forEach(type => dispatch({ ...payload, type }));
    }
    else {
      dispatch({ ...payload, type: requestTypes });
    }
  }

  function dispatchSuccessTypes(response) {
    if (Array.isArray(successTypes)) {
      successTypes.forEach(type => dispatch({ ...payload, type, response }));
    }
    else {
      dispatch({ ...payload, type: successTypes, response });
    }
  }

  function dispatchFailureTypes(error) {
    if (Array.isArray(failureTypes)) {
      failureTypes.forEach(type => dispatch({ ...payload, type, error }));
    }
    else if (failureTypes) {
      dispatch({ ...payload, type: failureTypes, error });
    }
    else {
      console.error(error);
    }
  }
};
