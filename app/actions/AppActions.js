/*
 * AppActions
 */

'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
var AppConstants = require('../constants/AppConstants');

var AppActions = {

  setTypeCd(typeCd) {
    AppDispatcher.dispatch({
      actionType: 'SET_TYPE_CD',
      typeCd: typeCd
    });
  }
};

module.exports = AppActions;