angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('strykerLogin', {
    url: '/login',
    templateUrl: 'templates/strykerLogin.html',
    controller: 'strykerLoginCtrl'
    resolve: {
    // controller will not be loaded until $waitForAuth resolves
    // Auth refers to our $firebaseAuth wrapper in the example above
    "currentAuth": ["Auth",
      function (Auth) {
          // $waitForAuth returns a promise so the resolve waits for it to complete
          return Auth.$waitForAuth();
      }]
    }
  })

  .state('menu.profileSettings', {
    url: '/settings',
    views: {
      'side-menu21': {
        templateUrl: 'templates/profileSettings.html',
        controller: 'profileSettingsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
    resolve: {
      // controller will not be loaded until $requireAuth resolves
      // Auth refers to our $firebaseAuth wrapper in the example above
      "currentAuth": ["Auth",
          function (Auth) {
              // $requireAuth returns a promise so the resolve waits for it to complete
              // If the promise is rejected, it will throw a $stateChangeError (see above)
              return Auth.$requireAuth();
      }]
    }
  })

  .state('menu.surgicalBlueprint', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/surgicalBlueprint.html',
        controller: 'surgicalBlueprintCtrl'
      }
    }
  })

  .state('menu.appendectomy', {
    url: '/appendectomy-0730',
    views: {
      'side-menu21': {
        templateUrl: 'templates/appendectomy.html',
        controller: 'appendectomyCtrl'
      }
    }
  })

  .state('menu.gastrectomy', {
    url: '/gastrectomy-1730',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gastrectomy.html',
        controller: 'gastrectomyCtrl'
      }
    }
  })

  .state('menu.patientDetails', {
    url: '/johndoe',
    views: {
      'side-menu21': {
        templateUrl: 'templates/patientDetails.html',
        controller: 'patientDetailsCtrl'
      }
    }
  })

  .state('menu.patientDetails2', {
    url: '/janedoe',
    views: {
      'side-menu21': {
        templateUrl: 'templates/patientDetails2.html',
        controller: 'patientDetails2Ctrl'
      }
    }
  })

  .state('loggedOut', {
    url: '/logout',
    templateUrl: 'templates/loggedOut.html',
    controller: 'loggedOutCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});