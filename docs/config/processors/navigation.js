'use strict';

var _ = require('lodash');

module.exports = function generateNavigationProcessor(log) {

	// TODO
	var debug = log.info;

	var mappers = {
		api: function (pages, key) {
			var res = [];

			debug('start process area:', key);

			_(pages)
			.filter('module').groupBy('module').forEach(function (components, moduleName) {
				debug(moduleName);
				var navGroup = {
					name: moduleName,
					type: 'groups',
					href: 'api/' + moduleName,
					navItems: []
				};

				_(components)
				.filter(function (it) {
					return it.docType !== 'module';
				})
				.groupBy('docType')
				.forEach(function (categories, typeName) {
					navGroup.navItems.push({
						name: typeName,
						type: 'section',
						href: 'api/' + moduleName + '/' + typeName
					});
					_(categories).forEach(function (it) {
						if (it.docType !== 'module') {
							navGroup.navItems.push({
								name: it.name,
								type: it.docType,
								href: it.path
							});
						}
					});
				});

				res.push(navGroup);
			});
			debug(res);
			return res;
		}
	};

	return {
		$runAfter: ['paths-computed'],
		$runBefore: ['rendering-docs'],
		$process: function (docs) {

			var areas = {};
			var pages = _(docs)
			.filter(function (it) {
				return it.area;
			});
			/*
				 .filter(function(it){
				 return it.docType !== 'componentGroup';
				 });

			_(pages).forEach(function (it) {
				debug(it.name, it.area, it.docType, it.module);
			});
		 */

			_(pages).groupBy('area').forEach(function (pages, key) {
				if (mappers[key]) {
					areas[key] = {
						id: key,
						name: key,
						navGroups: mappers[key](pages, key)
					};
				}
			});

			docs.push({
				docType: 'nav-data',
				id: 'nav-data',
				template: 'nav-data.template.js',
				outputPath: 'js/nav-data.js',
				areas: areas
			});

		}
	};
};
