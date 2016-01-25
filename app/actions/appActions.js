/*
 * AppActions
 */

'use strict';

import AppDispatcher from '../dispatcher/appDispatcher';
import AppConstants from '../constants/appConstants';

let AppActions = {

  setWelcomeMessage(message) {


    // do some async stuff here and dispatch to stores

    AppDispatcher.dispatch({
      actionType: AppConstants.SET_MESSAGE,
      message: message
    });
  }

};

export default AppActions;