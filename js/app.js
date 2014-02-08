document.addEventListener('deviceready', function(){
	navigator.splashscreen.hide();
}, false);


var app = angular.module('app', []);

app.factory("GeolocationService", function($window, $q, $rootScope){
	var geolocation = $window.navigator.geolocation;
	return {
		getCurrentPosition: function(onSuccess, onError){
			geolocation.getCurrentPosition(function(position){
				$rootScope.$apply(function(){
					onSuccess(position)
				})
			}, function(){
				$rootScope.$apply(function(){
					onError();
				})
			})
			return true;
		}
	}
});


app.config(function($routeProvider){
	$routeProvider
		.when('/home', {templateUrl: 'partials/home.html'})
		.when('/about', {templateUrl: 'partials/about.html'})
		.when('/contact', {templateUrl: 'partials/contact.html'})
		.otherwise({redirectTo: '/home'})
});


// var app = {
//     // Application Constructor
//     initialize: function() {
//         this.bindEvents();
//     },
//     // Bind Event Listeners
//     //
//     // Bind any events that are required on startup. Common events are:
//     // 'load', 'deviceready', 'offline', and 'online'.
//     bindEvents: function() {
//     },
//     // deviceready Event Handler
//     //
//     // The scope of 'this' is the event. In order to call the 'receivedEvent'
//     // function, we must explicity call 'app.receivedEvent(...);'
//     onDeviceReady: function() {
//         app.receivedEvent('deviceready');
//     },
//     // Update DOM on a Received Event
//     receivedEvent: function(id) {
//         var parentElement = document.getElementById(id);
//         var listeningElement = parentElement.querySelector('.listening');
//         var receivedElement = parentElement.querySelector('.received');

//         listeningElement.setAttribute('style', 'display:none;');
//         receivedElement.setAttribute('style', 'display:block;');

//         console.log('Received Event: ' + id);
//     }
// };
