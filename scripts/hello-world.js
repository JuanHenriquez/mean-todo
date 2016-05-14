angular.module('todoListApp')

// This is how to create a custom directive.
// The first parameter is for the name of the directive
// (should be in cammel case) and the second parameter
// is a function that returns a literal object.
.directive('helloWordl', function(){
  
  // the restrict key is to allow if the directive 
  // is used as an element(E) or attribute(A).
  return {
    template: '<h1>This my hello wordl</h1>',
    restrict: 'E'
  };
  
});