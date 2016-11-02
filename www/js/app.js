// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

app
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state("tabs", {
        url: "/tabs",
        abstract: true,
        templateUrl: "views/tabs/tabs.html"
      })

      .state("tabs.rates", {
        url: "/rates",
        views: {
          "rates-tab": {
            templateUrl: "views/rates/rates.html",
            controller: "RatesCtrl"
          }
        }
      });

    $urlRouterProvider.otherwise("/tabs/rates");

  })

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .factory("Currencies", function () {

    return [
      {"code": "AUD", "text": "Austrian Dollar", "selected": true},
      {"code": "BRL", "text": "Brazilian Real", "selected": false},
      {"code": "CAD", "text": "Canadian Dollar", "selected": true},
      {"code": "CHF", "text": "Swiss Franc", "selected": false},
      {"code": "CHY", "text": "Chinese Yuan", "selected": true},
      {"code": "EUR", "text": "Euro", "selected": true},
      {"code": "GBP", "text": "British Pound Sterling", "selected": true},
      {"code": "IDR", "text": "Indonesian Rupiah", "selected": false},
      {"code": "ILS", "text": "Israeli New Sheqel", "selected": false},
      {"code": "MXN", "text": "Mexican Peso", "selected": true},
      {"code": "NOK", "text": "Norwegian Krone", "selected": false},
      {"code": "NZD", "text": "New Zealand Dollar", "selected": false},
      {"code": "PLN", "text": "Polish Zolty", "selected": false},
      {"code": "RON", "text": "Romanian Leu", "selected": false},
      {"code": "RUB", "text": "Russian Ruble", "selected": true},
      {"code": "SEK", "text": "Swedish Krona", "selected": false},
      {"code": "SGD", "text": "Singapore Dollar", "selected": false},
      {"code": "USD", "text": "United States Dollar", "selected": true},
      {"code": "ZAR", "text": "South African Rand", "selected": false}
    ];

  });
