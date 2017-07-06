class GameConsole {

  constructor(systemName){
    this.systemName = systemName;
  }

  play(game){
    return this.systemName + ' plays ' + game.title;
  }

}

module.exports = GameConsole;