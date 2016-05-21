Package.describe({
  name: 'marvin:reactive-local-store',
  version: '0.0.1',
  summary: 'syncs key-value pairs in HTML5 localStorage for long term persistence and exposes them in a ReactiveDict',
  git: 'https://github.com/marvinmarnold/meteor-reactive-local-store',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use(['ecmascript', 'reactive-dict', 'underscore']);
  api.mainModule('reactive-local-store.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('reactive-local-store', 'client');
  api.mainModule('reactive-local-store-tests.js', 'client');
});
