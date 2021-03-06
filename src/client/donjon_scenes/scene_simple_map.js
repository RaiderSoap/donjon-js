/** @namespace $game*/

/** @namespace Donjon*/

/**
 * @extends SceneBase
 */
class SceneMap extends SceneMapBase {

  /**
   * @override
   * @constructor
   */
  constructor() {
    super();

    /* update listeners */
    let self = this;
    Donjon.EventEmitter.addListener('onUnitSpawn', obj => {
      self.onUnitSpawn(obj)
    });
  }


  /**
   * @return {boolean}
   * @private
   */
  isSceneChangeOk() {
    return this.isActive();
  }

  updateScene() {

  }

  /*----------------------------------------------------------------*/


  /* --------------------Messages--------------------------- */

  /**
   * @protected
   * @override
   */
  onMapLoaded() {
    $game.getMap().setup(1, $dataMap); //update map data before construct

    $game.database.setMapInfos($dataMapInfos);
    $game.database.setSystem($dataSystem);
    $game.database.setTilesets($dataTilesets);
    $game.database.setMap($dataMap);

    super.onMapLoaded();
  }

  onUnitSpawn(object) {
    console.log('SceneMapBase::onUnitSpawn');
    if (this._spriteset) {
      this._spriteset.addCharacter(object);
    }
  }

  /* --------------------Client Game Flow--------------------------- */

  /**
   * @override
   */
  create() {
    super.create();
    $game.create($dataObjects);
    console.log('SceneMap::create');
    //Donjon.EventEmitter.emit('onDataFileLoaded', $dataObjects);
  }

  start() {
    super.start();
    $game.start();
    console.log('SceneMap::start');
  }

  /**
   * called constantly
   */
  update() {
    $game.fixedUpdate();
    super.update();
  }

  stop() {
    super.stop();
    $game.stop();
    console.log('SceneMap::stop');
  }

  terminate() {
    super.terminate();
    $game.terminate();
    console.log('SceneMap::terminate');
  }
}