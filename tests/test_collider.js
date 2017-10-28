const assert = require('assert');
const Victor = require('victor');
/**
 * @type {{GameObject, Rigidbody, Collider}}
 */
const DJ = require('../build/js/donjon');


describe('Collider', function () {

  let obj1 = new DJ.GameObject("object with R&C");
  obj1.addComponent(DJ.Rigidbody);
  obj1.addComponent(DJ.Collider);

  let obj2 = new DJ.GameObject("object with R&C");
  obj1.addComponent(DJ.Collider);

  //====================================================================
  describe('#constructor()', function () {
    it('obj1 should create with attachedRigidbody', function () {
      const collider = obj1.getComponent(DJ.Collider);
      if (collider.attachedRigidbody) {
        assert.ok(true);
      } else {
        assert.fail(collider.attachedRigidbody, 'Rigidbody', 'No rigidbody' +
          ' attached during constructor.');
      }
    });
    it('obj2 should fail', function () {
      try {
        const collider = obj2.getComponent(DJ.Collider);
      } catch (e) {
        assert.ok(true);
      }
    });
  });
  //====================================================================


});


