`reactive-local-store` syncs key-value pairs in HTML5 localStorage for long term persistence and exposes them in a ReactiveVar in order to get reactivity for modifications.

# Usage
````
// Add the package
meteor add marvin:reactive-local-store

// Import RLS into your client code
import { RLS } from 'meteor/marvin:reactive-local-store';

// Define the list of keys you will be saving at startup
RLS.setRegisteredKeys(["KEY1", "KEY2"]);

// Load values from localStorage into a reactiveVar at startup
RLS.init();

// In your client code, listen for changes
Tracker.autorun(() =-> {
  if(RLS.get("KEY1")) {
    // do something
  }
});

// Set a new value
RLS.set("key", "value");
````
