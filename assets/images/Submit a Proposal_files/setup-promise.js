(function(){'use strict';// Script to setup promises to wait for loading dash api scripts
// Promise needs to be resolved in setup-iife by calling window.dashApiScript.setupResolve();

/**
 * The dashApiScript object to be accessed globally with window
 * @property setupReolve  - To resolve the promise after dash-api setup. To be invoked from setup-iife.js
 * @property setupReject  - On dash-api script error. To be invoked from setup-iife.js
 * @property setup        - Setup function to initialize TL connection. To be defined in setup-iife.js
 * @property promise      - The global promise to wait for loading dash-api.
 */
const dashApiScript = {
  setupResolve: null,
  setupReject: null,
  setup: null,
  promise: null
};
dashApiScript.promise = new Promise((resolve, reject) => {
  dashApiScript.setupResolve = resolve;
  dashApiScript.setupReject = reject;
});
window.dashApiScript = dashApiScript;}());