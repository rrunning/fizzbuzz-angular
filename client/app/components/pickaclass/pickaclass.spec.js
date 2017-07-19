import PickaclassModule from './pickaclass';
import PickaclassController from './pickaclass.controller';
import PickaclassComponent from './pickaclass.component';
import PickaclassTemplate from './pickaclass.html';

describe('Pickaclass', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PickaclassModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PickaclassController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(PickaclassTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = PickaclassComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(PickaclassTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(PickaclassController);
    });
  });
});
