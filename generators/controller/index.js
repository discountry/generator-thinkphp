'use strict';
var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
   constructor: function () {
    generators.Base.apply(this, arguments);
    // This makes `arguments` a required argument.
    this.argument('classedName', { type: String, required: true });
    this.argument('spaceName', { type: String, optional: true, defaults: 'Home' });
    // And you can then access it later on this way; e.g. CamelCased
    this.classedName = _.startCase(this.classedName);
    this.spaceName = _.startCase(this.spaceName);
  },

  writing: function () {
    this.template('controller.php', 'app/' + this.spaceName + '/Controller/' + this.classedName + 'Controller.class.php'),
      { classedName: this.classedName, spaceName: this.spaceName };
    this.template('view.html', 'app/' + spaceName + '/View/' + 'index.html'),
      { classedName: this.classedName };
  },
});