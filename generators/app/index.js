'use strict';
var generators = require('yeoman-generator');
var welcome = require('yeoman-welcome');
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;
var chalk = require('chalk');
var mkdirp = require('mkdirp');

module.exports = generators.Base.extend({
	initializing: function() {
		this.log(welcome);
		this.log(chalk.blue('You are using Yeoman ThinkPHP generator by @discounty. \n'))
	    this.log(chalk.red.bold('Please run these commands in the ROOT of your working folder! \n'));
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
	            exec('php -r "readfile(\'https://getcomposer.org/installer\');" | php');
	            console.log(chakl.green('Installing composer locally.'));
	            console.log('See http://getcomposer.org for more details on composer.');
	            console.log('Please run: \n' + chalk.bold('mv composer.phar /usr/local/bin/composer') + '\nafter install...');
	            return false;
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
			      message : 'Your project name: ',
			      store   : true,
			      default : this.appname // Default to current folder name
			    }];

	       this.prompt(prompts, function (answers) {
		      this.appName = answers.name;
	      	  this.log('Your app name is: ' + chalk.blue.bold(this.appName) + '\n');

		      done();
		    }.bind(this));
		  }
		}.bind(this));
	},

	configureing: function() {
		this.config.set('appName', this.appName);
		this.config.save();
		this.log(chalk.yellow('Configure saved!'));
	},

	  writing: function() {

	    this.log(chalk.magenta('Please wait for the installing...'));
	  },

	  install: function() {
	  	var done = this.async();
	    this.spawnCommand('composer', ['create-project', 'topthink/thinkphp', this.appName]).on('close', function () {
	                done();
	            });
	  },

	  end: function() {
		this.copy('_index.php', this.appName + '/index.php');

	  	this.log(chalk.blue('Then', chalk.green.bold('cd') +' into ' + chalk.green.bold(this.appName) + ' and start coding!'));
	  }






});
