export const API_ERROR = 'API_ERROR';

const createMiddleware = (store) => (next) => (action) => {
  if (action.error && action.payload && action.payload.status) {
    store.dispatch({
      type: API_ERROR,
      status: action.payload.status,
      error: action.error,
      message: action.payload.response
    });
  }
  return next(action);
};

export default createMiddleware;
