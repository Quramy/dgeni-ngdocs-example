"use strict";var DOCS_OVERWRITELINK=!0;angular.module("dgeniNgdocExampleDocs",[]).config(["$locationProvider",function(e){e.hashPrefix("!"),e.html5Mode({enabled:!0,requireBase:!0,rewriteLinks:!0})}]).factory("DOCS_OVERWRITELINK",function(){return"undefined"==typeof DOCS_OVERWRITELINK?!1:DOCS_OVERWRITELINK}),angular.module("dgeniNgdocExampleDocs").directive("pre",function(){return{restrict:"E",link:function(e,a){a.addClass("prettyprint"),setTimeout(function(){prettyPrint()},0)}}}),angular.module("dgeniNgdocExampleDocs").directive("a",["DOCS_OVERWRITELINK","DOCS_AREA_DATA",function(e,a){var i={},t=function(e){var i=-1===e.indexOf("#+");return i?(i=!1,angular.forEach(a,function(a){i=i||0===e.indexOf(a)}),i):!1};return{restrict:"E",priprity:100,link:function(a,s){e&&setTimeout(function(){var e,a=s.attr("href");e=i[a],e||t(a)&&(e="#+"+a,i[a]=e),s.attr("href",e)},0)}}}]),angular.module("dgeniNgdocExampleDocs").controller("DocsCtrl",["$scope","$rootScope","$location","$anchorScroll","DOCS_NAVIGATION","DOCS_OVERWRITELINK",function(e,a,i,t,s,r){var o=this,n="/";o.currentArea=null,o.navState=function(e){var a=[];return"section"===e.type&&a.push("nav-index-section"),"/"+e.href===o.currentPath&&a.push("current"),a},o.changeCurrent=function(e,a){var i;o.currentPath=e,e=e.replace(new RegExp("^"+n),""),i=e.split("/")[0],o.currentArea=s[i],""===e||"index.html"===e?o.partialPath="index.html":e.match(/\.html$/)||(e+=".html"),e="partials/"+e,o.currentHash=a,o.partialPath=e},e.$on("changePath",function(e,a,i){o.changeCurrent(a,i)}),a.$on("$locationChangeStart",function(){var e;r?(e=""!==i.hash()?i.hash().replace(/^\+/,"").split("#"):["index"],a.$broadcast("changePath",e[0],e[1])):a.$broadcast("changePath",i.path(),i.hash())})}]),angular.module("dgeniNgdocExampleDocs").controller("NavbarCtrl",["$scope","DOCS_NAVIGATION",function(e,a){var i=this;i.areas=[],angular.forEach(a,function(e,a){i.areas.push({id:a,name:e.name,href:a})}),e.date=new Date}]),function(e){e(["guide","api"])}("undefined"==typeof angular?function(e){module.exports=e}:function(e){angular.module("dgeniNgdocExampleDocs").value("DOCS_AREA_DATA",e)}),angular.module("dgeniNgdocExampleDocs").value("DOCS_NAVIGATION",{guide:{id:"guide",name:"Guide",navGroups:[{name:"Guide",type:"groups",href:"guide",navItems:[{name:"howToUse",type:"",href:"guide/howToUse"}]}]},api:{id:"api",name:"API",navGroups:[{name:"dgeniNgdocExample",type:"groups",href:"api/dgeniNgdocExample",navItems:[{name:"directive",type:"section",href:"api/dgeniNgdocExample/directive"},{name:"awesome",type:"directive",href:"api/dgeniNgdocExample/directive/awesome"},{name:"provider",type:"section",href:"api/dgeniNgdocExample/provider"},{name:"messageProvider",type:"provider",href:"api/dgeniNgdocExample/provider/messageProvider"},{name:"service",type:"section",href:"api/dgeniNgdocExample/service"},{name:"message",type:"service",href:"api/dgeniNgdocExample/service/message"}]}]}}),function(e){try{e=angular.module("dgeniNgdocExampleDocs")}catch(a){e=angular.module("dgeniNgdocExampleDocs",[])}e.run(["$templateCache",function(e){e.put("partials/api.html",'<a href="https://github.com/angular/angular.js/edit//docs/content/api.ngdoc?message=docs(api.ngdoc%2FAPI Top)%3A%20describe%20your%20change..." class="improve-docs btn btn-primary"><i class="glyphicon glyphicon-edit">&nbsp;</i>Improve this Doc</a><h1 id="api">API</h1><h2 id="-link-dgeningdocexample-dgeningdocexample-my-module-"><a href="api/dgeniNgdocExample">dgeniNgdocExample (my module)</a></h2><p>This is a main module.</p>')}])}(),function(e){try{e=angular.module("dgeniNgdocExampleDocs")}catch(a){e=angular.module("dgeniNgdocExampleDocs",[])}e.run(["$templateCache",function(e){e.put("partials/guide.html",'<a href="https://github.com/angular/angular.js/edit//docs/content/guide.ngdoc?message=docs(guide.ngdoc%2FGuide)%3A%20describe%20your%20change..." class="improve-docs btn btn-primary"><i class="glyphicon glyphicon-edit">&nbsp;</i>Improve this Doc</a><h1 id="guide">Guide</h1><p>Select a guidance from side menu.</p>')}])}(),function(e){try{e=angular.module("dgeniNgdocExampleDocs")}catch(a){e=angular.module("dgeniNgdocExampleDocs",[])}e.run(["$templateCache",function(e){e.put("partials/index.html",'<a href="https://github.com/angular/angular.js/edit//docs/content/index.ngdoc?message=docs(index.ngdoc%2FDocs Top)%3A%20describe%20your%20change..." class="improve-docs btn btn-primary"><i class="glyphicon glyphicon-edit">&nbsp;</i>Improve this Doc</a><div class="jumbotron"><h1>Hello Docs!</h1></div><h2 id="contents">Contents</h2><h3 id="api">API</h3><p><a href="api">here</a>.</p><h3 id="guide">Guide</h3><p><a href="guide">here</a>.</p>')}])}(),function(e){try{e=angular.module("dgeniNgdocExampleDocs")}catch(a){e=angular.module("dgeniNgdocExampleDocs",[])}e.run(["$templateCache",function(e){e.put("src/main.html",'<div><div ng-include="\'src/navbar.html\'"></div><div class="row"><div class="col-md-12" ng-show="!docs.currentArea" ng-include="docs.partialPath"></div><div class="col-md-3" ng-show="docs.currentArea"><ul class="nav-list naked-list"><li ng-repeat="navGroup in docs.currentArea.navGroups" class="nav-index-group"><a class="nav-index-group-heading" ng-href="{{navGroup.href}}"><span>{{navGroup.name}}</span></a><ul><li ng-repeat="navItem in navGroup.navItems" ng-class="docs.navState(navItem)" class="nav-index-listing"><a ng-href="{{navItem.href}}"><span>{{navItem.name}}</span></a></li></ul></li></ul></div><div class="col-md-9" ng-show="docs.currentArea" ng-include="docs.partialPath" autoscroll="true"></div></div><hr><div class="footer"><p>With ♥ from <a href="https://twitter.com/Quramy">@Quramy</a></p></div></div>')}])}(),function(e){try{e=angular.module("dgeniNgdocExampleDocs")}catch(a){e=angular.module("dgeniNgdocExampleDocs",[])}e.run(["$templateCache",function(e){e.put("src/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarCtrl as navbar"><div class="navbar-header"><a class="navbar-brand" href="index.html"><span class="glyphicon glyphicon-home"></span> dgeniNgdocExample Docs</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li ng-repeat="area in navbar.areas" ng-class="{active:docs.currentArea.id === area.id}"><a ng-href="{{area.href}}">{{area.name}}</a></li></ul><ul class="nav navbar-nav navbar-right"><li>Current date: {{ date | date:\'yyyy-MM-dd\' }}</li></ul></div></nav>')}])}(),function(e){try{e=angular.module("dgeniNgdocExampleDocs")}catch(a){e=angular.module("dgeniNgdocExampleDocs",[])}e.run(["$templateCache",function(e){e.put("partials/api/dgeniNgdocExample.html",'<a href="https://github.com/angular/angular.js/edit//src/app/index.js?message=docs(dgeniNgdocExample)%3A%20describe%20your%20change...#L3" class="improve-docs btn btn-primary"><i class="glyphicon glyphicon-edit">&nbsp;</i>Improve this Doc</a><h1><code>dgeniNgdocExample</code></h1><p>This is a ngdoc example application module.</p><h2>Installation</h2><p>First include <code>undefined</code> in your HTML:</p><pre><code>&lt;script src=&quot;angular.js&quot;&gt;&#10;&lt;script src=&quot;&quot;&gt;</code></pre><p>You can download this file from the following places:</p><ul><li><a href="https://developers.google.com/speed/libraries/devguide#angularjs">Google CDN</a><br>e.g. <code>//ajax.googleapis.com/ajax/libs/angularjs/X.Y.Z/undefined</code></li><li><a href="http://bower.io">Bower</a><br>e.g.<pre><code>bower install @X.Y.Z</code></pre></li><li><a href="http://code.angularjs.org/">code.angularjs.org</a><br>e.g.<pre><code>&quot;//code.angularjs.org/X.Y.Z/&quot;</code></pre></li></ul><p>where X.Y.Z is the AngularJS version you are running.</p><p>Then load the module in your application by adding it as a dependent module:</p><pre><code>angular.module(&#39;app&#39;, [&#39;dgeniNgdocExample&#39;]);</code></pre><p>With that you&apos;re ready to get started!</p><div class="component-breakdown"><h2>Module Components</h2><div><h3 class="component-heading" id="directive">Directive</h3><table class="definition-table"><tr><th>Name</th><th>Description</th></tr><tr><td><a href="api/dgeniNgdocExample/directive/awesome">awesome</a></td><td><p>It is an awesome directive.</p></td></tr></table></div><div><h3 class="component-heading" id="provider">Provider</h3><table class="definition-table"><tr><th>Name</th><th>Description</th></tr><tr><td><a href="api/dgeniNgdocExample/provider/messageProvider">messageProvider</a></td><td><p>Condigure messages.</p></td></tr></table></div><div><h3 class="component-heading" id="service">Service</h3><table class="definition-table"><tr><th>Name</th><th>Description</th></tr><tr><td><a href="api/dgeniNgdocExample/service/message">message</a></td><td><p>This service provides messages to your app.</p></td></tr></table></div></div>')}])}(),function(e){try{e=angular.module("dgeniNgdocExampleDocs")}catch(a){e=angular.module("dgeniNgdocExampleDocs",[])}e.run(["$templateCache",function(e){e.put("partials/guide/howToUse.html",'<a href="https://github.com/angular/angular.js/edit//docs/content/guide/howToUse.ngdoc?message=docs(guide%2FhowToUse)%3A%20describe%20your%20change..." class="improve-docs btn btn-primary"><i class="glyphicon glyphicon-edit">&nbsp;</i>Improve this Doc</a><h1 id="how-to-use-this-module">How To Use this module</h1><ol><li><p>aaaaaa</p></li><li><p>bbbbbb</p></li></ol>')}])}(),function(e){try{e=angular.module("dgeniNgdocExampleDocs")}catch(a){e=angular.module("dgeniNgdocExampleDocs",[])}e.run(["$templateCache",function(e){e.put("partials/api/dgeniNgdocExample/directive.html",'<h1>Directive components in <code>dgeniNgdocExample</code></h1><div class="component-breakdown"><div><table class="definition-table"><tr><th>Name</th><th>Description</th></tr><tr><td><a href="api/dgeniNgdocExample/directive/awesome">awesome</a></td><td><p>It is an awesome directive.</p></td></tr></table></div></div>')}])}(),function(e){try{e=angular.module("dgeniNgdocExampleDocs")}catch(a){e=angular.module("dgeniNgdocExampleDocs",[])}e.run(["$templateCache",function(e){e.put("partials/api/dgeniNgdocExample/provider.html",'<h1>Provider components in <code>dgeniNgdocExample</code></h1><div class="component-breakdown"><div><table class="definition-table"><tr><th>Name</th><th>Description</th></tr><tr><td><a href="api/dgeniNgdocExample/provider/messageProvider">messageProvider</a></td><td><p>Condigure messages.</p></td></tr></table></div></div>')}])}(),function(e){try{e=angular.module("dgeniNgdocExampleDocs")}catch(a){e=angular.module("dgeniNgdocExampleDocs",[])}e.run(["$templateCache",function(e){e.put("partials/api/dgeniNgdocExample/service.html",'<h1>Service components in <code>dgeniNgdocExample</code></h1><div class="component-breakdown"><div><table class="definition-table"><tr><th>Name</th><th>Description</th></tr><tr><td><a href="api/dgeniNgdocExample/service/message">message</a></td><td><p>This service provides messages to your app.</p></td></tr></table></div></div>')}])}(),function(e){try{e=angular.module("dgeniNgdocExampleDocs")}catch(a){e=angular.module("dgeniNgdocExampleDocs",[])}e.run(["$templateCache",function(e){e.put("partials/api/dgeniNgdocExample/directive/awesome.html",'<a href="https://github.com/angular/angular.js/edit//src/components/awesome/awesome.directive.js?message=docs(awesome)%3A%20describe%20your%20change...#L3" class="improve-docs btn btn-primary"><i class="glyphicon glyphicon-edit">&nbsp;</i>Improve this Doc</a> <a href="https://github.com///tree//src/components/awesome/awesome.directive.js#L3" class="view-source pull-right btn btn-primary"><i class="glyphicon glyphicon-zoom-in">&nbsp;</i>View Source</a><header class="api-profile-header"><h1 class="api-profile-header-heading">awesome</h1><ol class="api-profile-header-structure naked-list step-list"><li>- directive in module <a href="api/dgeniNgdocExample">dgeniNgdocExample</a></li></ol></header><div class="api-profile-description"><p>It is an awesome directive.</p></div><div><h2>Directive Info</h2><ul><li>This directive executes at priority level 0.</li></ul><h2 id="usage">Usage</h2><div class="usage"><ul><li>as element:<pre><code>&lt;awesome&gt;&#10;...&#10;&lt;/awesome&gt;</code></pre></li></ul></div><h2 id="example">Example</h2><p><div class="runnable-example" path="examples/example-example" module="awsomeExample" ""="" animate="false"><div class="runnable-example-file" name="index.html" language="html" type="html"><pre><code>&lt;div ng-controller=&quot;ExampleController as example&quot;&gt;&#10;  &lt;awesome&gt;&lt;/awesome&gt;&#10;&lt;/div&gt;</code></pre></div><div class="runnable-example-file" name="script.js" language="js" type="js"><pre><code>angular.module(&#39;awsomeExample&#39;, [&#39;dgeniNgdocExample&#39;]).controller(&#39;ExampleController&#39;, function(){&#10;  var example = this;&#10;});</code></pre></div><iframe class="runnable-example-frame" src="examples/example-example/index.html" name="example-example"></iframe></div></p></div>')}])}(),function(e){try{e=angular.module("dgeniNgdocExampleDocs")}catch(a){e=angular.module("dgeniNgdocExampleDocs",[])}e.run(["$templateCache",function(e){e.put("partials/api/dgeniNgdocExample/provider/messageProvider.html",'<a href="https://github.com/angular/angular.js/edit//src/components/messages/message.provider.js?message=docs(messageProvider)%3A%20describe%20your%20change...#L3" class="improve-docs btn btn-primary"><i class="glyphicon glyphicon-edit">&nbsp;</i>Improve this Doc</a> <a href="https://github.com///tree//src/components/messages/message.provider.js#L3" class="view-source pull-right btn btn-primary"><i class="glyphicon glyphicon-zoom-in">&nbsp;</i>View Source</a><header class="api-profile-header"><h1 class="api-profile-header-heading">messageProvider</h1><ol class="api-profile-header-structure naked-list step-list"><li><a href="api/dgeniNgdocExample/service/message">- message</a></li><li>- provider in module <a href="api/dgeniNgdocExample">dgeniNgdocExample</a></li></ol></header><div class="api-profile-description"><p>Condigure messages.</p><p>See also <a href="api/dgeniNgdocExample/service/message">message service</a> .</p></div><div><h2>Methods</h2><ul class="methods"><li id="put"><h3><p><code>put(id, message);</code></p></h3><div><p>Put a message to repository. See also <code><a href="api/dgeniNgdocExample/service/message#get">message#get</a></code>.</p></div><h4>Parameters</h4><table class="variables-matrix input-arguments"><thead><tr><th>Param</th><th>Type</th><th>Details</th></tr></thead><tbody><tr><td>id</td><td><a href="" class="label type-hint type-hint-string">string</a></td><td><p>The message&#39;s ID.</p></td></tr><tr><td>message</td><td><a href="" class="label type-hint type-hint-string">string</a></td><td><p>Content of this message.</p></td></tr></tbody></table></li></ul></div>')}])}(),function(e){try{e=angular.module("dgeniNgdocExampleDocs")}catch(a){e=angular.module("dgeniNgdocExampleDocs",[])}e.run(["$templateCache",function(e){e.put("partials/api/dgeniNgdocExample/service/message.html",'<a href="https://github.com/angular/angular.js/edit//src/components/messages/message.provider.js?message=docs(message)%3A%20describe%20your%20change...#L36" class="improve-docs btn btn-primary"><i class="glyphicon glyphicon-edit">&nbsp;</i>Improve this Doc</a> <a href="https://github.com///tree//src/components/messages/message.provider.js#L36" class="view-source pull-right btn btn-primary"><i class="glyphicon glyphicon-zoom-in">&nbsp;</i>View Source</a><header class="api-profile-header"><h1 class="api-profile-header-heading">message</h1><ol class="api-profile-header-structure naked-list step-list"><li><a href="api/dgeniNgdocExample/provider/messageProvider">- messageProvider</a></li><li>- service in module <a href="api/dgeniNgdocExample">dgeniNgdocExample</a></li></ol></header><div class="api-profile-description"><p>This service provides messages to your app.</p></div><div><h2>Methods</h2><ul class="methods"><li id="get"><h3><p><code>get(id);</code></p></h3><div><p>Get a messages by ID.</p></div><h4>Parameters</h4><table class="variables-matrix input-arguments"><thead><tr><th>Param</th><th>Type</th><th>Details</th></tr></thead><tbody><tr><td>id</td><td><a href="" class="label type-hint type-hint-string">string</a></td><td><p>A message ID.</p></td></tr></tbody></table><h4>Returns</h4><table class="variables-matrix return-arguments"><tr><td><a href="" class="label type-hint type-hint-string">string</a></td><td><p>message</p></td></tr></table></li></ul><h2 id="example">Example</h2><p><div class="runnable-example" path="examples/example-example1" module="messageExample" ""="" animate="false"><div class="runnable-example-file" name="index.html" language="html" type="html"><pre><code>&lt;div ng-controller=&quot;ExampleController as example&quot;&gt;&#10;  messages: &lt;span&gt;{{example.msg}}&lt;/span&gt;&#10;&lt;/div&gt;</code></pre></div><div class="runnable-example-file" name="script.js" language="js" type="js"><pre><code>angular.module(&#39;messageExample&#39;, [&#39;dgeniNgdocExample&#39;])&#10;.config(function (messageProvider) {&#10;  messageProvider.put(&#39;msg01&#39;, &#39;Hello, world!&#39;);&#10;})&#10;.controller(&#39;ExampleController&#39;, function(message){&#10;  var example = this;&#10;  example.msg = message.get(&#39;msg01&#39;);&#10;});</code></pre></div><iframe class="runnable-example-frame" src="examples/example-example1/index.html" name="example-example1"></iframe></div></p></div>')}])}();