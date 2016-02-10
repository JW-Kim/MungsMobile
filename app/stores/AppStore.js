'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter }  from 'events';
import AppConstants  from '../constants/AppConstants';

let _state = {
  menu: 'false'
};

let AppStore = _.assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  }
});

AppDispatcher.register(function(action) {

  switch(action.actionType) {

    case AppConstants.SET_MENU:
      _setStateMenu(action.menu);
      AppStore.emitChange();
    break;

    default:

  }

});

let _setStateMenu = (menu) => {
  _state.menu = menu;
};

export default AppStore;