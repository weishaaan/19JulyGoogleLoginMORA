var requestToken = "";
var accessToken = "";
var clientId = "376024187070-vavkck83ntqqeqg9iautaviork7vklnp.apps.googleusercontent.com";//"651037261825-c3gopfoudd8blcq7nbb2htrptm04trv0.apps.googleusercontent.com";
var clientSecret = "eQjh3JzYjGNbxv04Y5g7Ewhx";



angular.module('starter', ['ionic','ngCordova','ngCordovaOauth'])
    .controller('LoginwithGoogle',function($scope,$cordovaOauth){
      $scope.LoginwithGoogle = function(){
        console.log("clicked");
        $cordovaOauth.google(clientId, ["email"]).then(function(result) {
                alert("Auth Success..!!"+result);
            }, function(error) {
                alert("Auth Failed..!!"+error);
            });
      };
    });