'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('holy-grail'));

  beforeEach(inject(function($rootScope) {
  	scope = $rootScope.$new();
  }));

});
