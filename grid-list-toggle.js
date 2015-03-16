'use strict';

/*!
 * angular-bootstrap-grid-list-toggle
 * https://github.com/seblucas/angular-bootstrap-grid-list-toggle
 * Copyright (c) 2015 ; Licensed MIT
 */
angular.module('seblucas.slGridListToggle', [])
  .directive('slGridListToggle', function() {
    return {
      restrict: 'E',
      require: '^ngModel',
      scope: {
        templatePrefix: '=',
        defaultTemplate: '=',
        toggleChangeEvent: '='
      },
      template:
'<div class="btn-group btn-group-lg pull-right"> \
  <button ng-repeat="item in toggles" type="button" class="btn btn-default" ng-class="{active: isTemplateActive(item)}" ng-click="toggleTemplate(item)"> \
    <span class="glyphicon glyphicon-{{item}}"></span> \
  </button> \
</div>',
      link: function(scope, element, attrs, ngModel) {
        scope.toggles = ['th', 'list'];
        ngModel.$render = function() {
            scope.currentTemplate = ngModel.$modelValue;
        };

        scope.$watch('defaultTemplate', function(newValue, oldValue, scope) {
          // If the value change call the event
          if (oldValue !== newValue) {
            if (attrs.toggleChangeEvent) {
              scope.toggleChangeEvent(newValue);
            }
          }
          // If the activetemplate is not the right one, change it
          if (!scope.isTemplateActive(newValue)) {
            scope.toggleTemplate(newValue);
          }
        });

        scope.toggleTemplate = function(value) {
          scope.currentTemplate = scope.templatePrefix + value +'.html';
          ngModel.$setViewValue(scope.currentTemplate);
          scope.defaultTemplate = value;
        };

        scope.isTemplateActive = function(value) {
          return scope.currentTemplate.indexOf ('.' + value + '.html') > 0;
        };

        if (attrs.defaultTemplate) {
          scope.toggleTemplate(scope.defaultTemplate);
        }
      }
    };
  });
