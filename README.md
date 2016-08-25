Simple middleware to inspect action payloads and dispatch a structured API_ERROR action

## Exports

`API_ERROR`: the action name

It dispatches API_ERROR when it encounters any action with an error flag set by inspecting the payload. The dispatched action will have the following properties set (not in payload).

```
  status: http status code
  error: bool
  message: error response text
```

## Use case

You use redux and have a lot of actions for api calls that dispatch different _ERROR or _FAILURE actions, but you don`t want to create reducers for all of them. We use this to generalize the API_ERROR and watch for it with a long running saga that decides by the error code what logic to execute.

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

## Usage with saga

```

export function* apiErrorWorker(action) {
  switch (action.status) {
    case 401: {
      yield call(SomeAction.showLogin);
      break;
    }
    default: {
      console.warn('caught api error', action);
      break;
    }
  }
}

export function* apiErrorWatcher() {
  yield* takeEvery('API_ERROR', apiErrorWorker);
}

```
