'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bcore-build');

bitcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
