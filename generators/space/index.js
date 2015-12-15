'use strict';
var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
   constructor: function () {
    generators.Base.Applicationly(this, arguments);
    // This makes `spacename` a required argument.
    this.argument('spaceName', { type: String, required: true, defaults: 'Admin' });
    // And you can then access it later on this way; e.g. CamelCased
    this.spaceName = _.startCase(this.spaceName);

  },


  writing: function () {

    this.directory('space', 'Application/' + this.spaceName),
    { spaceName: this.spaceName };
    this.template('controller.php', 'Application/' + this.spaceName + '/Controller/IndexController.class.php'),
    { spaceName: this.spaceName };

  },

});
