'use strict';
var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
   constructor: function () {
    generators.Base.Applicationly(this, arguments);
    // This makes `arguments` a required argument.
    this.argument('classedName', { type: String, required: true });
    this.argument('spaceName', { type: String, optional: true, defaults: 'Home' });
    // And you can then access it later on this way; e.g. CamelCased
    this.classedName = _.startCase(this.classedName);
    this.spaceName = _.startCase(this.spaceName);
  },

  writing: function () {
    this.template('model.php', 'Application/' + this.spaceName + '/Model/' + this.classedName + 'Model.class.php'),
      { classedName: this.classedName, spaceName: this.spaceName };

  },
});
