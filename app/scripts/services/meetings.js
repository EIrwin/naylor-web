'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .factory('Meetings', function() {

    var self = this;

    // this.createMeeting = function(){
    //   var d = $q.defer();
    //   var requestUrl = APIHelper.meetings;
    //   $http
    //     .post(requestUrl)
    //     .success(function(data,status,headers,config){
    //       $log.info(data);
    //     })
    //     .error(function(data,status,headers,config){
    //       $log.error(data);
    //     });
    //   return d.promise;
    // }

    return self;


  });
