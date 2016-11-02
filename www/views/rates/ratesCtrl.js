/**
 * Created by donghoon on 2016. 11. 2..
 */

app.controller("RatesCtrl", function ($scope, $http, Currencies) {

  $scope.currencies = Currencies;

  $scope.load = function () {

    $http.get("https://api.bitcoinaverage.com/ticker/all")
      .success(function (tickers) {
        angular.forEach($scope.currencies, function (currency) {
          currency.ticker = tickers[currency.code];
        });
      });

  };

  $scope.load();

});
