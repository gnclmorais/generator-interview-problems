'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    var prompts = [{
        name: 'questionName',
        message: 'What is the name of the interview question (folder name)?'
    }];

    this.prompt(prompts, function (props) {
        this.appName = props.questionName;
        done();
    }.bind(this));
  },
  scaffoldFolders: function(){
    this.mkdir('test');
  },
  copyMainFiles: function(){
    this.copy('_readme.md', 'README.md');
    this.copy('_solution.js', 'solution.js');
    this.copy('_test.js', 'test/test.js');
  }
});
