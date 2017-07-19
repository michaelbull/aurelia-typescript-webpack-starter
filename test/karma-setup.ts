import { initialize } from 'aurelia-pal-browser';
import 'aurelia-polyfills';
import { install as installJasmineAsync } from 'jest-jasmine2/build/jasmine-async.js';

initialize();
installJasmineAsync(global);

Error.stackTraceLimit = Infinity;
