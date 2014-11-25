(function(angular) {
  'use strict';
angular.module('messageExample', ['dgeniNgdocExample'])
.config(function (messageProvider) {
  messageProvider.put('msg01', 'Hello, world!');
})
.controller('ExampleController', function(message){
  var example = this;
  example.msg = message.get('msg01');
});
})(window.angular);