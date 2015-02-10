# Angular Bootstrap grid / list toggle directive

A lightweight grid / list button toggle directive that has to be used with NgInclude. The style used is based on Boostrap and its glyphicons.

## Settings

Settings can be provided as attributes in the `<sl-grid-list-toggle>` :

 * `ng-model` (mandatory) : Curent active template. You'll want to use it in your NgInclude source.

 * `template-prefix` (mandatory) : prefix of the two view files.

## Usage

### Controller

```javascript
angular.module('myApp', ['seblucas.slGridListToggle'])
.controller('demoCtrl', ['$scope', function($scope) {
    $scope.currentTemplate = 'partials/category.list.html';
  }]);
```

### Main view

```html
<sl-grid-list-toggle ng-model="currentTemplate" 
                     template-prefix="'partials/category.'">
</sl-grid-list-toggle>
<h1>Title</h1>
<br />
<div ng-include src="currentTemplate" ></div>
```

### Other views

You'll just have to handle the two files :

 * `partials/category.list.html` : for the list view.
 * `partials/category.th.html` : for the grid / card view.

## License

Licensed under MIT.