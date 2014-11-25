# dgeniNgdocExample

A sample application with ngDoc.

## How to build

1.
Clone this repository.

1. 

```
cd dgeni-ngdoc-example
npm install
bower install
cd docs
bower install
cd ..
gulp serve:docs:dist
```

## Gulp tasks

### `dgeni`
Run Dgeni to build ngdoc.

### `serve:docs`
Run ngdoc app in browserSync.

This task watches `dgeni` task's destination directory, so:

+ Run `serve:docs`.
+ Modify your component.
+ Run `dgeni` task (manually).
+ Ngdoc app changes Immediately by browserSync's reload. 

### `build:docs`
Pacaging ngdoc app to `dist_docs`.

### `serve:docs:dist`
Run browserSync, and serve `serve:docs` result.


And you can also use gulp tasks (https://github.com/Swiip/generator-gulp-angular).

