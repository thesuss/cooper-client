angular.module('starter.services', [])

.factory('performanceData', function ($resource, API_URL) {
  return $resource(API_URL + '/performance_data', {}, { 'query': { method: 'GET' }});
})

.factory('registrationData', function ($resource, API_URL) {
  return $resource(API_URL + '/api/v1/auth', {});
});
