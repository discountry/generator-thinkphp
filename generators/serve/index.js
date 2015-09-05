'use strict';
var generators = require('yeoman-generator');
var chalk = require('chalk');

module.exports = generators.Base.extend({


  initializing: function () {
    this.log(chalk.green.bold('PHP test Server is running!'));

  },

  end: function () {
    this.spawnCommand('php', ['-S', '127.0.0.1:3000']);
  
  }

});