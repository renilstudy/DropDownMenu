angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('PaginationDemoCtrl', ['$scope','$http',function ($scope,$http) {
  $scope.currentPage = 0;
  $scope.pageSize = 5;
/*  console.$log(currentPage);

*/

$http({
	method: 'GET',
	url: 'data.json'
}).then(function (response) {
	/*console.$log(response);*/
	console.log(response);
	$scope.cities = response.data.values;
});
}]);
angular.module('ui.bootstrap.demo').filter('startFrom',function () {
	return function (data,start) {
		return data.slice(start);
		
	};

});
