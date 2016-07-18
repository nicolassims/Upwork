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

	            window.history.pushState('page1', 'Title', '/');
	            document.getElementById('aboutTheSecondDirector').style.display = 'none';
	            document.getElementById('aboutTheThirdDirector').style.display = 'none';
	            document.getElementById('previousProperty').style.display = 'none';
	            document.getElementById('previousStreet').style.display = 'none';
	            document.getElementById('previousPropertyLabel').style.display = 'none';
	            document.getElementById('previousStreetLabel').style.display = 'none';
	            document.getElementById('previousPropertyOfSecondDirector').style.display = 'none';
	            document.getElementById('previousStreetOfSecondDirector').style.display = 'none';
	            document.getElementById('previousPropertyLabelOfSecondDirector').style.display = 'none';
	            document.getElementById('previousStreetLabelOfSecondDirector').style.display = 'none';
	            document.getElementById('previousPropertyOfThirdDirector').style.display = 'none';
	            document.getElementById('previousStreetOfThirdDirector').style.display = 'none';
	            document.getElementById('previousPropertyLabelOfThirdDirector').style.display = 'none';
	            document.getElementById('previousStreetLabelOfThirdDirector').style.display = 'none';
	            document.getElementById('thankYou').style.display = 'none';
	            var dtToday = new Date();
	            var month = dtToday.getMonth() + 1;
	            var day = dtToday.getDate();
	            var year = dtToday.getFullYear();
	            var birthYear = dtToday.getFullYear() - 18;
	            if (month < 10) {
	                month = '0' + month.toString();
	            }
	            if (day < 10) {
	                day = '0' + day.toString();
	            }
	            document.getElementById('dateEstablished').value = '≤ ' + year + '-' + month + '-' + day;
	            document.getElementById('dateOfBirth').value = '≤ ' + birthYear + '-' + month + '-' + day;
	            document.getElementById('dateOfBirthOfSecondDirector').value = '≤ ' + birthYear + '-' + month + '-' + day;
	            document.getElementById('dateOfBirthOfThirdDirector').value = '≤ ' + birthYear + '-' + month + '-' + day;
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
	                    document.getElementById('thankYou').style.display = 'block';
	                    document.getElementById('accordion').style.display = 'none';
	                    window.history.pushState('page2', 'Thank You', '/thank-you');
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
	            document.getElementById('timeAtAddress').addEventListener('keyup', function () {
	                if (document.getElementById('timeAtAddress').value < 5 && document.getElementById('timeAtAddress').value != '') {
	                    document.getElementById('previousProperty').style.display = 'block';
	                    document.getElementById('previousStreet').style.display = 'block';
	                    document.getElementById('previousPropertyLabel').style.display = 'block';
	                    document.getElementById('previousStreetLabel').style.display = 'block';
	                }
	                if (document.getElementById('timeAtAddress').value > 5 && document.getElementById('timeAtAddress').value != '') {
	                    document.getElementById('previousProperty').style.display = 'none';
	                    document.getElementById('previousStreet').style.display = 'none';
	                    document.getElementById('previousPropertyLabel').style.display = 'none';
	                    document.getElementById('previousStreetLabel').style.display = 'none';
	                }
	            }, false);
	            document.getElementById('timeAtAddressOfSecondDirector').addEventListener('keyup', function () {
	                if (document.getElementById('timeAtAddressOfSecondDirector').value < 5 && document.getElementById('timeAtAddressOfSecondDirector').value != '') {
	                    document.getElementById('previousPropertyOfSecondDirector').style.display = 'block';
	                    document.getElementById('previousStreetOfSecondDirector').style.display = 'block';
	                    document.getElementById('previousPropertyLabelOfSecondDirector').style.display = 'block';
	                    document.getElementById('previousStreetLabelOfSecondDirector').style.display = 'block';
	                }
	                if (document.getElementById('timeAtAddressOfSecondDirector').value > 5 && document.getElementById('timeAtAddressOfSecondDirector').value != '') {
	                    document.getElementById('previousPropertyOfSecondDirector').style.display = 'none';
	                    document.getElementById('previousStreetOfSecondDirector').style.display = 'none';
	                    document.getElementById('previousPropertyLabelOfSecondDirector').style.display = 'none';
	                    document.getElementById('previousStreetLabelOfSecondDirector').style.display = 'none';
	                }
	            }, false);
	            document.getElementById('timeAtAddressOfThirdDirector').addEventListener('keyup', function () {
	                if (document.getElementById('timeAtAddressOfThirdDirector').value < 5 && document.getElementById('timeAtAddressOfThirdDirector').value != '') {
	                    document.getElementById('previousPropertyOfThirdDirector').style.display = 'block';
	                    document.getElementById('previousStreetOfThirdDirector').style.display = 'block';
	                    document.getElementById('previousPropertyLabelOfThirdDirector').style.display = 'block';
	                    document.getElementById('previousStreetLabelOfThirdDirector').style.display = 'block';
	                }
	                if (document.getElementById('timeAtAddressOfThirdDirector').value > 5 && document.getElementById('timeAtAddressOfThirdDirector').value != '') {
	                    document.getElementById('previousPropertyOfThirdDirector').style.display = 'none';
	                    document.getElementById('previousStreetOfThirdDirector').style.display = 'none';
	                    document.getElementById('previousPropertyLabelOfThirdDirector').style.display = 'none';
	                    document.getElementById('previousStreetLabelOfThirdDirector').style.display = 'none';
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
	    }]);

	    return main;
	}();

	window.onload = function () {
	    new main();
	};

/***/ }
/******/ ]);