var myApp = angular.module( 'myApp', [] );
var verbose = false;

myApp.controller( 'BlocksController', function(){
  var vm = this;
  vm.events = [];
  // actual content now
  var tempEvent = {
    yellowhearts: [],
  }; // end temp event
  vm.events.push( tempEvent );

  var tempEvent = {
    bluehearts: [],
  }; // end temp event
  vm.events.push( tempEvent );

  var tempEvent = {
    redhearts: [],
  }; // end temp event
  vm.events.push( tempEvent );

  var tempEvent = {
    greenhearts: [],
  }; // end temp event
  console.log(tempEvent);
  vm.events.push( tempEvent );

  // end content //
  // add a heart to an event
  vm.heartThisYellowEvent = function( eventIndex ){
    if( verbose ) console.log( 'in controller heartThisEvent:', eventIndex );
    // gimme a heart
    vm.events[ eventIndex ].yellowhearts.push( 'yay' + vm.events[ eventIndex ].yellowhearts.length );
    if( verbose ) console.log( 'hearts', vm.events[ eventIndex ] );
  }; //end heartThisEvent

  vm.heartThisBlueEvent = function( eventIndex ){
    if( verbose ) console.log( 'in controller heartThisEvent:', eventIndex );
    // gimme a heart
    vm.events[ eventIndex ].bluehearts.push( 'yay' + vm.events[ eventIndex ].bluehearts.length );
    if( verbose ) console.log( 'bluehearts', vm.events[ eventIndex ] );
  }; //end heartThisEvent

  vm.heartThisRedEvent = function( eventIndex ){
    if( verbose ) console.log( 'in controller heartThisEvent:', eventIndex );
    // gimme a heart
    vm.events[ eventIndex ].redhearts.push( 'yay' + vm.events[ eventIndex ].redhearts.length );
    if( verbose ) console.log( 'redhearts', vm.events[ eventIndex ] );
  }; //end heartThisEvent


    vm.heartThisGreenEvent = function( eventIndex ){
      if( verbose ) console.log( 'in controller heartThisEvent:', eventIndex );
      // gimme a heart
      vm.events[ eventIndex ].greenhearts.push( 'yay' + vm.events[ eventIndex ].greenhearts.length );
      if( verbose ) console.log( 'greenhearts', vm.events[ eventIndex ] );
    }; //end heartThisEvent


}); // end controller
