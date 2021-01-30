import { appState } from './globalState';

 function rootReducer(state = appState, action) {
  switch (action.type) {
    case 'SET_LOGGED_IN_TRUE': {
    console.log('SET_LOGGED_IN_TRUE triggered')
      return {
        ...state,
        is_logged_in: true,
      };
    }
    case 'SET_LOGGED_IN_FALSE': {
        console.log('SET_LOGGED_IN_FALSE triggered')
        return {
          ...state,
          is_logged_in: false,
        };
    }
    default:
      return state;
  }
}

export default (rootReducer)