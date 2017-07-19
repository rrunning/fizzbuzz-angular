import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import pickaclass from './pickaclass/pickaclass';

let componentModule = angular.module('app.components', [
  Home,
  About,
  pickaclass
])

.name;

export default componentModule;
