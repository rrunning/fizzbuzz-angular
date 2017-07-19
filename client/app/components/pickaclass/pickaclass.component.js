import template from './pickaclass.html';
import controller from './pickaclass.controller';
import './pickaclass.scss';

let pickaclassComponent = {
  bindings: {fizzNum: '<'},
  template,
  controller
};

export default pickaclassComponent;
