'use strict';
var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
   constructor: function () {
    generators.Base.apply(this, arguments);
    // This makes `spacename` a required argument.
    this.argument('spaceName', { type: String, required: true, defaults: 'Admin' });
    // And you can then access it later on this way; e.g. CamelCased
    this.spaceName = _.startCase(this.spaceName);
    this.appName = this.appname;

  },

  writing: function () {
    this.directory('space', 'app/' + this.spaceName),
    { spaceName: this.spaceName, appName: this.appName };

  },
});