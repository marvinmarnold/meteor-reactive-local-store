import { ReactiveDict } from 'meteor/reactive-dict';
import Meteor from 'meteor/meteor';

const sanitizedValue = function(v) {
  if(v === "true") {
    return true;
  } else if(v === "false") {
    return false;
  } else if(v === "null") {
    return null;
  } else {
    return v;
  }
}

let _registeredKeys = [];
var _reactiveDict = new ReactiveDict('reactive-local-store');

export const RLS = {
  get(key) {
    return sanitizedValue(_reactiveDict.get(key));
  },

  set(key, value) {
    window.localStorage.setItem(key, value);
    _reactiveDict.set(key, value);
  },

  remove(key) {
    window.localStorage.removeItem(key);
    _reactiveDict.set(key, undefined);
  },

  init() {
    _.each(_registeredKeys, key => {
      const value = sanitizedValue(window.localStorage.getItem(key));
      RLS.set(key, value);
    })
  },

  setRegisteredKeys(registeredKeys) {
    _registeredKeys = registeredKeys;
  }
};
