var mvcApp = angular.module('testApp',[]);

mvcApp.controller('SimpleController',function($scope){
   
   $scope.customers = [
   		{name:'Ahmad',City:'Kabul',Age:23},
   		{name:'Ali',City:'Mazar',Age:45},
   		{name:'Aliya',City:'Bazarak',Age:34}
   ];

});