'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .factory('Users', function($http,$q,$log,APIHelper) {

    var self = this;

    this.createUser = function(salary,hourlyRate){
      var d = $q.defer();
      var requestUrl = APIHelper.endpoints.users;
      var data = {
        hourlyRate:hourlyRate,
        salary:salary
      }
      $http({
           url:requestUrl,
           dataType: 'json',
           method: 'POST',
           data:data,
           headers: {
               "Content-Type": "application/json"
           }
       })
        .success(function(data,status,headers,config){
          d.resolve(data);
        })
        .error(function(data,status,headers,config){
          d.reject(data);
        });
      return d.promise;
    };

    return self;


  });
