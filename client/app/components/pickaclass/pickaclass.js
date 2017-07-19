import angular from 'angular';
import uiRouter from 'angular-ui-router';
import pickaclassComponent from './pickaclass.component';

let pickaclassModule = angular.module('pickaclass', [
  uiRouter
])

.component('pickaclass', pickaclassComponent)

.name;

export default pickaclassModule;
