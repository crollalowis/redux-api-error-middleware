Simple middleware to inspect action payloads and dispatch a structured API_ERROR action

## Exports

`API_ERROR`: the action name

It dispatches API_ERROR when it encounters any action with an error flag set by inspecting the payload. The dispatched action will have the following properties set (not in payload).

```
  status: http status code
  error: bool
  message: error response text
```

## Usage

```
import apiErrorMiddleware from 'redux-api-error-middleware';

const rootReducer = <...>;

const store = createStore(
  rootReducers,
  applyMiddleware(
    <...>,
    apiErrorMiddleware
  )
);

```
