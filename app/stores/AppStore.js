'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
import { EventEmitter }  from 'events';
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var AppStore = assign({}, EventEmitter.prototype, {
  typeCd: '1',

  getTypeCd: function(){
    return this.typeCd;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  setTypeCd: function(typeCd){
    this.typeCd = typeCd;
  }
});

AppDispatcher.register(function(action) {

  switch(action.actionType) {

    case 'SET_TYPE_CD':
      AppStore.setTypeCd(action.typeCd);
      AppStore.emitChange();

    break;

    default:

  }

});

module.exports = AppStore;