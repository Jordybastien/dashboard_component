import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loading from './loading';
import error from './error';
import link from './callBackLink';
import { reducer as toastrReducer } from 'react-redux-toastr';

export default combineReducers({
  form: formReducer,
  toastr: toastrReducer,
  loading,
  error,
  link,
});
