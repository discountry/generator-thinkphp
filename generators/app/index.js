'use strict';
var generators = require('yeoman-generator');
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;
var chalk = require('chalk');
var mkdirp = require('mkdirp');

module.exports = generators.Base.extend({
	initializing: function() {
		this.welcome();
	    this.log(chalk.red.bold('Please run these commands in the ROOT of your working folder!') + '\n');
	    this.log('Destination is: ' + chalk.bold(this.destinationRoot()));
	    this.log('Source is: ' + chalk.bold(this.sourceRoot()) + '\n');
	},

	prompting: function() {
		var done = this.async();
    	// Check if composer is installed globally
    	this.globalComposer = false;
	    exec('composer', ['-V'], function (error, stdout, stderr) {
	      if (error != null) {
	        var prompts = [{
	          type: 'confirm',
	          name: 'continue',
	          message: 'WARNING: No global composer installation found. We will install locally if you decide to continue. Continue?',
	          default: false
	        }];
	        this.prompt(prompts, function (answers) {
	          if (answers.continue) {
	            // Use the secondary installation method as we cannot assume curl is installed
	            this.spawnCommand('php -r "readfile(\'https://getcomposer.org/installer\');" | php');
	            console.log('Installing composer locally.');
	            console.log('See http://getcomposer.org for more details on composer.');
	            console.log('');
	            done();
	          }
	        }.bind(this));
	      } 
	      else {
	        this.globalComposer = true;
	        this.log(chalk.green('Composer installed ready!'+ '\n'));
	        var prompts = [{
			      type    : 'input',
			      name    : 'name',
			      message : 'Your project name',
			      store   : true,
			      default : this.appname // Default to current folder name
			    }, {
			      type    : 'confirm',
			      name    : 'run',
			      message : 'Run PHP test server now?',
			      default : false
			    }];

	       this.prompt(prompts, function (answers) {
		      this.appName = answers.name;
	      	  this.log('Your app name is: ' + chalk.bold(this.appName) + '\n');

		      this.runServer = answers.run;

		      done();
		    }.bind(this));
		  }
		}.bind(this));
	},

	  writing: function() {
	    this.copy('_.htaccess', '.htaccess');
	    this.copy('_.yo-rc.json', '.yo-rc.json');
	    this.template('_base.html', 'app/Home/View/base.html'),
	    {appName: this.appName};
	    this.copy('_index.php', 'index.php');
	    this.template('_composer.json', 'composer.json'),
	    {appName: this.appName};
	    mkdirp('public');
	    this.log(chalk.yellow('Scaffolding files installing!'));
	  },

	  install: function() {
	  	var done = this.async();
	    this.spawnCommand('composer', ['install']).on('close', function () {
	                done();
	            });
	  },

	  end: function() {
	  	if (this.runServer) {
	  		this.spawnCommand('php', ['-S', '127.0.0.1:3000']);
	  		return;
	  	};

	  	this.log(chalk.green.bold('All done have fun!'));
	  }






});