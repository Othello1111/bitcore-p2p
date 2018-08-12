'use strict';

var gulp = require('gulp');
var bcoreTasks = require('bcore-build');

bcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
