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
		redirectUri: 'http://localhost:8000',
		clientId: '7206f93476654d8dac9b86933ad69c0f',
		requiredUrlParams: ['scope'],
		scope: ['likes'],
		scopeDelimiter: '+',
		authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
	});
  });