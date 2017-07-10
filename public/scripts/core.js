var messages = angular.module('messages', ['ngRoute', 'ngStorage'])
var socket = io();

function mainController($scope, $http, $localStorage){

}

function homeController($scope, $http, $localStorage){
    var messages = []
    socket.on('message', function(data){
        $('#messages').append('<li>'+data+'</li>')
    })

    $scope.send = function(){
        socket.emit('message', $scope.message)
        $scope.message = null
    }
}

messages.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/templates/home.html",
        controller : homeController
    })
});

