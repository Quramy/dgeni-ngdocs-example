"use strict";var DOCS_OVERWRITELINK=!0;angular.module("docApp",["ui.bootstrap"]).constant("DOCS_OVERWRITELINK","undefined"==typeof DOCS_OVERWRITELINK?!1:DOCS_OVERWRITELINK).provider("DOCS_OVERWRITELINK",["DOCS_OVERWRITELINK",function(e){return{$get:function(){return e}}}]).config(["$locationProvider","DOCS_OVERWRITELINK",function(e,a){a||(e.hashPrefix("!"),e.html5Mode({enabled:!0,requireBase:!0,rewriteLinks:!0}))}]),angular.module("docApp").directive("pre",function(){return{restrict:"E",link:function(e,a){var t=prettyPrintOne(a.find(">code").html());a.addClass("prettyprint"),a.find(">code").html(t)}}}),angular.module("docApp").directive("a",["DOCS_OVERWRITELINK","DOCS_AREA_DATA",function(e,a){var t={},i=function(e){var t=-1===e.indexOf("#/");return t?(t=!1,angular.forEach(a,function(a){t=t||0===e.indexOf(a)}),t):!1};return{restrict:"E",link:function(a,r){e&&a.$evalAsync(function(){var e,a=r.attr("href");e=t[a],e||i(a)&&(e="#/"+a,t[a]=e),r.attr("href",e)})}}}]),angular.module("docApp").controller("DocsCtrl",["$scope","$location","DOCS_NAVIGATION",function(e,a,t){var i=this,r="/";i.currentArea=null,i.navState=function(e){var a=[];return"section"===e.type&&a.push("nav-index-section"),"/"+e.href===i.currentPath&&a.push("current"),a},i.changeCurrent=function(e,a){var n;i.currentPath=e,e=e.replace(new RegExp("^"+r),""),n=e.split("/")[0],i.currentArea=t[n],(""===e||"index.html"===e)&&(e="index"),e.match(/\.html$/)||(e+=".html"),e="partials/"+e,i.currentHash=a,i.partialPath=e},e.$on("$locationChangeStart",function(){i.changeCurrent(a.path(),a.hash())})}]),angular.module("docApp").controller("NavbarCtrl",["$scope","DOCS_NAVIGATION",function(e,a){var t=this;t.areas=[],angular.forEach(a,function(e,a){t.areas.push({id:a,name:e.name,href:a})}),e.date=new Date}]),function(e){e(["guide","api"])}("undefined"==typeof angular?function(e){module.exports=e}:function(e){angular.module("docApp").value("DOCS_AREA_DATA",e)}),angular.module("docApp").value("DOCS_NAVIGATION",{guide:{id:"guide",name:"Guide",navGroups:[{name:"Guide",type:"groups",href:"guide",navItems:[{name:"howToUse",type:"",href:"guide/howToUse"}]}]},api:{id:"api",name:"API",navGroups:[{name:"dgeniNgdocExample",type:"groups",href:"api/dgeniNgdocExample",navItems:[{name:"directive",type:"section",href:"api/dgeniNgdocExample/directive"},{name:"awesome",type:"directive",href:"api/dgeniNgdocExample/directive/awesome"},{name:"provider",type:"section",href:"api/dgeniNgdocExample/provider"},{name:"messageProvider",type:"provider",href:"api/dgeniNgdocExample/provider/messageProvider"},{name:"service",type:"section",href:"api/dgeniNgdocExample/service"},{name:"message",type:"service",href:"api/dgeniNgdocExample/service/message"}]}]}}),function(e){try{e=angular.module("docApp")}catch(a){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/api.html",'<h1 id="api">API</h1><p>Select a link in side menu.</p>')}])}(),function(e){try{e=angular.module("docApp")}catch(a){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/guide.html",'<h1 id="guide">Guide</h1><p>Select a guidance from side menu.</p>')}])}(),function(e){try{e=angular.module("docApp")}catch(a){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/index.html",'<div class="jumbotron"><h1>Hello Docs!</h1></div><h2 id="contents">Contents</h2><h3 id="api">API</h3><p><a href="api">here</a>.</p><h3 id="guide">Guide</h3><p><a href="guide">here</a>.</p>')}])}(),function(e){try{e=angular.module("docApp")}catch(a){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("src/main.html",'<div><div ng-include="\'src/navbar.html\'"></div><div class="row"><div class="col-md-12" ng-if="!docs.currentArea" ng-include="docs.partialPath"></div><div class="col-md-3" ng-if="docs.currentArea"><ul class="nav-list naked-list"><li ng-repeat="navGroup in docs.currentArea.navGroups" class="nav-index-group"><a class="nav-index-group-heading" ng-href="{{navGroup.href}}"><span>{{navGroup.name}}</span></a><ul><li ng-repeat="navItem in navGroup.navItems" ng-class="docs.navState(navItem)" class="nav-index-listing"><a ng-href="{{navItem.href}}"><span>{{navItem.name}}</span></a></li></ul></li></ul></div><div class="col-md-9" ng-if="docs.currentArea" ng-include="docs.partialPath" autoscroll="true"></div></div><hr><div class="footer"><p>With ♥ from <a href="https://twitter.com/Quramy">@Quramy</a></p></div></div>')}])}(),function(e){try{e=angular.module("docApp")}catch(a){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("src/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarCtrl as navbar"><div class="navbar-header"><a class="navbar-brand" href="#/index"><span class="glyphicon glyphicon-home"></span> dgeniNgdocExample Docs</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li ng-repeat="area in navbar.areas" ng-class="{active:docs.currentArea.id === area.id}"><a ng-href="{{area.href}}">{{area.name}}</a></li></ul><ul class="nav navbar-nav navbar-right"><li>Current date: {{ date | date:\'yyyy-MM-dd\' }}</li></ul></div></nav>')}])}(),function(e){try{e=angular.module("docApp")}catch(a){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/api/dgeniNgdocExample.html",'<h1><code>dgeniNgdocExample</code></h1><p>This is a ngdoc example application module.</p><h2>Installation</h2><p>First include <code>dgeni-ngdoc-example</code> javascript file in your HTML:</p><p>You can download this file from the following places:</p><ul><li><a href="http://bower.io">Bower</a><br>e.g.<pre><code>bower install angular dgeni-ngdoc-example</code></pre></li></ul><p>Then load the module in your application by adding it as a dependent module:</p><pre><code>angular.module(&#39;app&#39;, [&#39;dgeniNgdocExample&#39;]);</code></pre><p>With that you&apos;re ready to get started!</p><div class="component-breakdown"><h2>Module Components</h2><div><h3 class="component-heading" id="directive">Directive</h3><table class="definition-table"><tr><th>Name</th><th>Description</th></tr><tr><td><a href="api/dgeniNgdocExample/directive/awesome">awesome</a></td><td><p>It is an awesome directive.</p></td></tr></table></div><div><h3 class="component-heading" id="provider">Provider</h3><table class="definition-table"><tr><th>Name</th><th>Description</th></tr><tr><td><a href="api/dgeniNgdocExample/provider/messageProvider">messageProvider</a></td><td><p>Condigure messages.</p></td></tr></table></div><div><h3 class="component-heading" id="service">Service</h3><table class="definition-table"><tr><th>Name</th><th>Description</th></tr><tr><td><a href="api/dgeniNgdocExample/service/message">message</a></td><td><p>This service provides messages to your app.</p></td></tr></table></div></div>')}])}(),function(e){try{e=angular.module("docApp")}catch(a){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/guide/howToUse.html",'<h1 id="how-to-use-this-module">How To Use this module</h1><ol><li><p>aaaaaa</p></li><li><p>bbbbbb</p></li></ol>')}])}(),function(e){try{e=angular.module("docApp")}catch(a){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/api/dgeniNgdocExample/directive.html",'<h1>Directive components in <code>dgeniNgdocExample</code></h1><div class="component-breakdown"><div><table class="definition-table"><tr><th>Name</th><th>Description</th></tr><tr><td><a href="api/dgeniNgdocExample/directive/awesome">awesome</a></td><td><p>It is an awesome directive.</p></td></tr></table></div></div>')}])}(),function(e){try{e=angular.module("docApp")}catch(a){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/api/dgeniNgdocExample/provider.html",'<h1>Provider components in <code>dgeniNgdocExample</code></h1><div class="component-breakdown"><div><table class="definition-table"><tr><th>Name</th><th>Description</th></tr><tr><td><a href="api/dgeniNgdocExample/provider/messageProvider">messageProvider</a></td><td><p>Condigure messages.</p></td></tr></table></div></div>')}])}(),function(e){try{e=angular.module("docApp")}catch(a){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/api/dgeniNgdocExample/service.html",'<h1>Service components in <code>dgeniNgdocExample</code></h1><div class="component-breakdown"><div><table class="definition-table"><tr><th>Name</th><th>Description</th></tr><tr><td><a href="api/dgeniNgdocExample/service/message">message</a></td><td><p>This service provides messages to your app.</p></td></tr></table></div></div>')}])}(),function(e){try{e=angular.module("docApp")}catch(a){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/api/dgeniNgdocExample/directive/awesome.html",'<a href="https://github.com/Quramy/dgeni-ngdocs-example/tree/master/src/components/awesome/awesome.directive.js#L3" class="view-source pull-right btn btn-primary"><i class="glyphicon glyphicon-zoom-in">&nbsp;</i>View Source</a><header class="api-profile-header"><h1 class="api-profile-header-heading">awesome</h1><ol class="api-profile-header-structure naked-list step-list"><li>- directive in module <a href="api/dgeniNgdocExample">dgeniNgdocExample</a></li></ol></header><div class="api-profile-description"><p>It is an awesome directive.</p></div><div><h2>Directive Info</h2><ul><li>This directive executes at priority level 0.</li></ul><h2 id="usage">Usage</h2><div class="usage"><ul><li>as element:<pre><code>&lt;awesome&gt;&#10;...&#10;&lt;/awesome&gt;</code></pre></li></ul></div><h2 id="example">Example</h2><p><div class="runnable-example" path="examples/example-example" module="awsomeExample" ""="" animate="false"><tabset><tab heading="index.html"><div class="runnable-example-file" $="" attrname="" $}="index.html"><pre><code>&lt;div ng-controller=&quot;ExampleController as example&quot;&gt;&#10;  &lt;awesome&gt;&lt;/awesome&gt;&#10;&lt;/div&gt;</code></pre></div></tab><tab heading="script.js"><div class="runnable-example-file" $="" attrname="" $}="script.js"><pre><code>angular.module(&#39;awsomeExample&#39;, [&#39;dgeniNgdocExample&#39;]).controller(&#39;ExampleController&#39;, function(){&#10;  var example = this;&#10;});</code></pre></div></tab></tabset><iframe class="runnable-example-frame" src="examples/example-example/index-prod.html" name="example-example"></iframe></div></p></div>')}])}(),function(e){try{e=angular.module("docApp")}catch(a){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/api/dgeniNgdocExample/provider/messageProvider.html",'<a href="https://github.com/Quramy/dgeni-ngdocs-example/tree/master/src/components/messages/message.provider.js#L3" class="view-source pull-right btn btn-primary"><i class="glyphicon glyphicon-zoom-in">&nbsp;</i>View Source</a><header class="api-profile-header"><h1 class="api-profile-header-heading">messageProvider</h1><ol class="api-profile-header-structure naked-list step-list"><li><a href="api/dgeniNgdocExample/service/message">- message</a></li><li>- provider in module <a href="api/dgeniNgdocExample">dgeniNgdocExample</a></li></ol></header><div class="api-profile-description"><p>Condigure messages.</p><p>See also <a href="api/dgeniNgdocExample/service/message">message service</a> .</p></div><div><h2>Methods</h2><ul class="methods"><li id="put"><h3><p><code>put(id, message);</code></p></h3><div><p>Put a message to repository. See also <code><a href="api/dgeniNgdocExample/service/message#get">message#get</a></code>.</p></div><h4>Parameters</h4><table class="variables-matrix input-arguments"><thead><tr><th>Param</th><th>Type</th><th>Details</th></tr></thead><tbody><tr><td>id</td><td><a href="" class="label type-hint type-hint-string">string</a></td><td><p>The message&#39;s ID.</p></td></tr><tr><td>message</td><td><a href="" class="label type-hint type-hint-string">string</a></td><td><p>Content of this message.</p></td></tr></tbody></table></li></ul></div>')}])}(),function(e){try{e=angular.module("docApp")}catch(a){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/api/dgeniNgdocExample/service/message.html",'<a href="https://github.com/Quramy/dgeni-ngdocs-example/tree/master/src/components/messages/message.provider.js#L36" class="view-source pull-right btn btn-primary"><i class="glyphicon glyphicon-zoom-in">&nbsp;</i>View Source</a><header class="api-profile-header"><h1 class="api-profile-header-heading">message</h1><ol class="api-profile-header-structure naked-list step-list"><li><a href="api/dgeniNgdocExample/provider/messageProvider">- messageProvider</a></li><li>- service in module <a href="api/dgeniNgdocExample">dgeniNgdocExample</a></li></ol></header><div class="api-profile-description"><p>This service provides messages to your app.</p></div><div><h2>Methods</h2><ul class="methods"><li id="get"><h3><p><code>get(id);</code></p></h3><div><p>Get a messages by ID.</p></div><h4>Parameters</h4><table class="variables-matrix input-arguments"><thead><tr><th>Param</th><th>Type</th><th>Details</th></tr></thead><tbody><tr><td>id</td><td><a href="" class="label type-hint type-hint-string">string</a></td><td><p>A message ID.</p></td></tr></tbody></table><h4>Returns</h4><table class="variables-matrix return-arguments"><tr><td><a href="" class="label type-hint type-hint-string">string</a></td><td><p>message</p></td></tr></table></li></ul><h2 id="example">Example</h2><p><div class="runnable-example" path="examples/example-example1" module="messageExample" ""="" animate="false"><tabset><tab heading="index.html"><div class="runnable-example-file" $="" attrname="" $}="index.html"><pre><code>&lt;div ng-controller=&quot;ExampleController as example&quot;&gt;&#10;  messages: {{example.msg}}&#10;&lt;/div&gt;</code></pre></div></tab><tab heading="script.js"><div class="runnable-example-file" $="" attrname="" $}="script.js"><pre><code>angular.module(&#39;messageExample&#39;, [&#39;dgeniNgdocExample&#39;])&#10;.config(function (messageProvider) {&#10;  messageProvider.put(&#39;msg01&#39;, &#39;Hello, world!&#39;);&#10;})&#10;.controller(&#39;ExampleController&#39;, function(message){&#10;  var example = this;&#10;  example.msg = message.get(&#39;msg01&#39;);&#10;});</code></pre></div></tab></tabset><iframe class="runnable-example-frame" src="examples/example-example1/index-prod.html" name="example-example1"></iframe></div></p></div>')}])}();