$(function() {
	var Chirp = angular.module('Chirp', []);
	var socket = io();

	$('.view').hide();       // \____ jQuery should be working but just isn't.
	$('#start').fadeIn(600); // /



	Chirp.controller('start', function($scope) {

	});

	Chirp.controller('create', function($scope) {

	});

	Chirp.controller('join', function($scope) {
		$scope.login = function() {
			socket.emit('join', {user: $scope.user, room: $scope.room});
		}
	});

	Chirp.controller('chat', function($scope) {
		socket.on('message', function(data) {
			$('#messages').append('<li>'+ data + '</li>');
		});
 
		$scope.send = function() {
			socket.emit('message', $scope.message);
		}
	});
});




// function mainController($scope, $http, $localStorage){

// }

// function homeController($scope, $http, $localStorage){
//     socket.on('message', function(data){
//         $('#messages').append('<li>'+data+'</li>')
//     })

//     $scope.send = function(){
//         socket.emit('message', $scope.message)
//         $scope.message = null
//     }
// }

// messages.config(function($routeProvider) {
//     $routeProvider
//     .when("/", {
//         templateUrl : "/templates/index.html",
//         controller : homeController
//     })
// });

