var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/skynet', {
      templateUrl: '/views/templates/skynet.html',
      controller: 'SkyController',
      controllerAs: 'skynet'
    })
    .when('/ed209' ,{
      templateUrl: '/views/templates/ed209.html',
      controller: 'Ed209Controller',
      controllerAs: 'ed209'
    })
    .when('/hal' ,{
      templateUrl: '/views/templates/hal.html',
      controller: 'HalController',
      controllerAs: 'hal'
    })
    .when('/t800' ,{
      templateUrl: '/views/templates/t800.html',
      controller: 'T800Controller',
      controllerAs: 't800'
    })
    .otherwise({
      redirectTo: 'skynet'

    });
}]);

app.controller('SkyController', function () {
    console.log('keep looking at this screen');
    var self = this;
    self.image = "../images/gort.jpeg";
});
app.controller('Ed209Controller', function () {
    console.log('You have five seconds to comply');
    var self = this;
    self.title = "ED-209";
    self.designation = "Enforcement Droid Series 209";
    self.image = "../images/ED-209.jpg";
    self.history = 'The Enforcement Droid, Series 209, or ED-209, are a fully-automated series of peacekeeping machines created by Omni Consumer Products. Currently, the units are programmed for urban pacification, but OCP has also negotiated contracts with the military for use in war.';
});
app.controller('HalController', function () {
    console.log('hello andy');
    var self = this;
    self.title = "Hal 9000";
    self.designation = "Heuristically programmed ALgorithmic Compute"
    self.image = "../images/hal.jpg";
    self.history = 'Computer is an artificial intelligence and the onboard computer on the spaceship Discovery 1. HAL 9000, more commonly called "Hal", became operational in the HAL plant in Urbana, Illinois, on January 12, 1992. His first instructor was Dr. Chandra. Hal is capable of many functions, such as speech, speech recognition, facial recognition, lip reading, interpreting emotions, expressing emotions, and chess, in addition to maintaining all systems on Discovery.';
});
app.controller('T800Controller', function () {
    console.log('Chill out, dickwad');
    var self = this;
    self.title = "t-800";
    self.designation = "Cyberdyne Systems T-800 Model 101, or CSM-101"
    self.image = "../images/t800.jpg";
    self.history = 'The Cyberdyne Systems Model 101 living tissue skin was based upon Sector Agent Dieter von Rossbach from government files that pre-date 2001. As a government agent, numerous databases later possessed by Skynet were available to provide ample representation of many physical appearances. When it came to creating the human tissue model for T-800 Terminators, Skynet used this stored information, along with the data from various other resources, to model the Infiltrator faces on as the closest physical match to contain the Terminator endoskeleton. The Model 101 has been used at least on the T-800 as well as the numerous "contemporary" Terminators created in the present by Serena Burns in her Secret Terminator Lab.';
});
