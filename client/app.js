angular.module('Instagram', ['ngRoute', 'ngMessages', 'satellizer'])
  .config(function($routeProvider, $authProvider) {
  	$routeProvider
  	  .when('/', {
  	  	templateUrl: 'views/home.html',
    	controller: 'HomeCtrl'
      })
      .when('/login', {
    	templateUrl: 'views/login.html',
    	controller: 'LoginCtrl'
      })
      .when('/signup', {
    	templateUrl: 'views/signup.html',
    	controller: 'SignupCtrl'
      })
      .when('/photo/:id', {
    	templateUrl: 'views/detail.html',
    	controller: 'DetailCtrl'
      })
      .otherwise('/');

    $authProvider.loginUrl = 'http://localhost:3000/auth/login';
	$authProvider.signupUrl = 'http://localhost:3000/auth/signup';
	$authProvider.oauth2({
		name: 'instagram',
		url: 'http://localhost:3000/auth/instagram',
		redirectUri: 'https://localhost:8000',
		clientId: '2b027aec8da74c6f884954730db217fa',
		requiredUrlParams: ['scope'],
		scope: ['likes'],
		scopeDelimiter: '+',
		authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
	});
  });