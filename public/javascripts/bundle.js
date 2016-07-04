/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/**
	 * Created by Administrator on 3/14/2016.
	 */

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var main = function () {
	    function main() {
	        _classCallCheck(this, main);

	        main.getReady();
	        main.watchDirectors();
	    }

	    _createClass(main, null, [{
	        key: 'getReady',
	        value: function getReady() {
	            var _this = this;

	            document.getElementById('aboutTheSecondDirector').style.display = 'none';
	            document.getElementById('aboutTheThirdDirector').style.display = 'none';
	            var inputs = document.getElementsByClassName('form-control');

	            var _loop = function _loop(i) {
	                inputs[i].addEventListener('blur', function () {
	                    var parent = inputs[i].parentNode;
	                    var input = inputs[i];
	                    var message = document.createElement('div');
	                    message.innerHTML = 'Please fill this out correctly';
	                    message.className = 'message';
	                    if (!input.checkValidity()) {
	                        if (parent.innerHTML.indexOf('class="message"') >= 0) {
	                            parent.removeChild(parent.getElementsByClassName('message')[0]);
	                        }
	                        parent.insertBefore(message, input);
	                        input.focus();
	                    } else {
	                        if (parent.innerHTML.indexOf('class="message"') >= 0) {
	                            parent.removeChild(parent.getElementsByClassName('message')[0]);
	                        }
	                    }
	                });
	            };

	            for (var i = 0; i < inputs.length; i++) {
	                _loop(i);
	            }
	            var nexts = document.getElementsByClassName('next');

	            var _loop2 = function _loop2(_i) {
	                var next = nexts[_i];
	                var parentForm = next.parentNode;
	                next.addEventListener('click', function () {
	                    var formData = new FormData(parentForm);
	                    _this.sendFormData(formData);
	                });
	            };

	            for (var _i = 0; _i < nexts.length; _i++) {
	                _loop2(_i);
	            }
	            document.getElementById('submit').addEventListener('click', function () {
	                if (!document.getElementById('accept').checked) {
	                    document.getElementById('please-accept').innerHTML = 'Please accept the terms & conditions';
	                } else {
	                    _this.getThankYouPage();
	                }
	            });
	        }
	    }, {
	        key: 'watchDirectors',
	        value: function watchDirectors() {
	            document.getElementById('numberOfDirectors').addEventListener('change', function () {
	                if (document.getElementById('numberOfDirectors').value == 1) {
	                    document.getElementById('aboutTheSecondDirector').style.display = 'none';
	                    document.getElementById('aboutTheThirdDirector').style.display = 'none';
	                } else if (document.getElementById('numberOfDirectors').value == 2) {
	                    document.getElementById('aboutTheSecondDirector').style.display = 'block';
	                    document.getElementById('aboutTheThirdDirector').style.display = 'none';
	                } else {
	                    document.getElementById('aboutTheSecondDirector').style.display = 'block';
	                    document.getElementById('aboutTheThirdDirector').style.display = 'block';
	                }
	            }, false);
	        }
	    }, {
	        key: 'sendFormData',
	        value: function sendFormData(data) {
	            var form = document.querySelector('form');
	            var bustCache = '?' + new Date().getTime();
	            var request = new XMLHttpRequest();
	            request.open('POST', event.target.dataset.url + bustCache, true);
	            request.setRequestHeader('X-Requested-With', 'formWriteRequest');
	            request.send(data);
	        }
	    }, {
	        key: 'getThankYouPage',
	        value: function getThankYouPage() {
	            var bustCache = '?' + new Date().getTime();
	            var request = new XMLHttpRequest();
	            request.onload = function () {
	                if (request.readyState == 4 && request.status == 200) {
	                    document.getElementsByClassName('container')[0].innerHTML = request.responseText;
	                    window.history.pushState('', 'Thank You', '/thank-you');
	                }
	            };
	            request.open('POST', event.target.dataset.url + bustCache, true);
	            request.setRequestHeader('X-Requested-With', 'getThankYouPageRequest');
	            request.send();
	        }
	    }]);

	    return main;
	}();

	window.onload = function () {
	    new main();
	};

/***/ }
/******/ ]);