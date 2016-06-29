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
	    function main(validCombos) {
	        _classCallCheck(this, main);

	        var pin = 0;
	        var cardNumber = 0;
	        var cardNumberCharacters = 0;
	        main.hideAndRevealDivs();
	        main.cardNumberHandler(cardNumber, pin, validCombos, cardNumberCharacters);
	    }

	    _createClass(main, null, [{
	        key: "cardNumberHandler",
	        value: function cardNumberHandler(cardNumber, pin, validCombos, cardNumberCharacters) {
	            document.getElementById("one").addEventListener("click", function () {
	                if (cardNumberCharacters < 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "1";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardNumberCharacters++;
	                }
	            }, false);
	            document.getElementById("two").addEventListener("click", function () {
	                if (cardNumberCharacters < 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "2";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardNumberCharacters++;
	                }
	            }, false);
	            document.getElementById("three").addEventListener("click", function () {
	                if (cardNumberCharacters < 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "3";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardNumberCharacters++;
	                }
	            }, false);
	            document.getElementById("four").addEventListener("click", function () {
	                if (cardNumberCharacters < 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "4";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardNumberCharacters++;
	                }
	            }, false);
	            document.getElementById("five").addEventListener("click", function () {
	                if (cardNumberCharacters < 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "5";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardNumberCharacters++;
	                }
	            }, false);
	            document.getElementById("six").addEventListener("click", function () {
	                if (cardNumberCharacters < 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "6";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardNumberCharacters++;
	                }
	            }, false);
	            document.getElementById("seven").addEventListener("click", function () {
	                if (cardNumberCharacters < 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "7";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardNumberCharacters++;
	                }
	            }, false);
	            document.getElementById("eight").addEventListener("click", function () {
	                if (cardNumberCharacters < 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "8";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardNumberCharacters++;
	                }
	            }, false);
	            document.getElementById("nine").addEventListener("click", function () {
	                if (cardNumberCharacters < 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "9";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardNumberCharacters++;
	                }
	            }, false);
	            document.getElementById("zero").addEventListener("click", function () {
	                if (cardNumberCharacters < 3) {
	                    document.getElementById('cardNumber').innerHTML = document.getElementById('cardNumber').innerHTML + "0";
	                    cardNumberCharacters++;
	                }
	                if (cardNumberCharacters == 3) {
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardNumberCharacters++;
	                }
	            }, false);
	            document.getElementById("buttonSix").addEventListener("click", function () {
	                if (cardNumberCharacters == 4) {
	                    cardNumber = document.getElementById('cardNumber').innerHTML;
	                    document.getElementById('buttonSix').innerHTML = "VI";
	                    document.getElementById('promptCustomer').innerHTML = "Please insert the one-digit PIN associated with this card into the keypad.";
	                    console.log(cardNumber.slice(4, cardNumber.length));
	                    cardNumberCharacters++;
	                    main.hideAndRevealDivs(cardNumberCharacters);
	                    return main.PINHandler(cardNumber, pin, validCombos, cardNumberCharacters);
	                }
	            }, false);
	        }
	    }, {
	        key: "hideAndRevealDivs",
	        value: function hideAndRevealDivs(cardNumberCharacters) {
	            document.getElementById("displayArea").style.display = "none";
	            document.getElementById("PIN").style.display = "none";
	            if (cardNumberCharacters == 5) {
	                document.getElementById("PIN").style.display = "block";
	            }
	        }
	    }, {
	        key: "PINHandler",
	        value: function PINHandler(cardNumber, pin, validCombos, cardNumberCharacters) {
	            console.log(cardNumberCharacters);
	            document.getElementById("one").addEventListener("click", function () {
	                if (cardNumberCharacters == 5) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "1";
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardNumberCharacters++;
	                }
	            }, false);
	            document.getElementById("two").addEventListener("click", function () {
	                if (cardNumberCharacters == 5) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "2";
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardNumberCharacters++;
	                }
	            }, false);
	            document.getElementById("three").addEventListener("click", function () {
	                if (cardNumberCharacters == 5) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "3";
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardNumberCharacters++;
	                }
	            }, false);
	            document.getElementById("four").addEventListener("click", function () {
	                if (cardNumberCharacters == 5) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "4";
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardNumberCharacters++;
	                }
	            }, false);
	            document.getElementById("five").addEventListener("click", function () {
	                if (cardNumberCharacters == 5) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "5";
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardNumberCharacters++;
	                }
	            }, false);
	            document.getElementById("six").addEventListener("click", function () {
	                if (cardNumberCharacters == 5) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "6";
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardNumberCharacters++;
	                }
	            }, false);
	            document.getElementById("seven").addEventListener("click", function () {
	                if (cardNumberCharacters == 5) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "7";
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardNumberCharacters++;
	                }
	            }, false);
	            document.getElementById("eight").addEventListener("click", function () {
	                if (cardNumberCharacters == 5) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "8";
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardNumberCharacters++;
	                }
	            }, false);
	            document.getElementById("nine").addEventListener("click", function () {
	                if (cardNumberCharacters == 5) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "9";
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardNumberCharacters++;
	                }
	            }, false);
	            document.getElementById("zero").addEventListener("click", function () {
	                if (cardNumberCharacters == 5) {
	                    document.getElementById('PIN').innerHTML = document.getElementById('PIN').innerHTML + "0";
	                    document.getElementById('buttonSix').innerHTML = "SUBMIT";
	                    cardNumberCharacters++;
	                }
	            }, false);
	            document.getElementById("buttonSix").addEventListener("click", function () {
	                if (cardNumberCharacters == 6) {
	                    pin = document.getElementById('PIN').innerHTML;
	                    document.getElementById('buttonSix').innerHTML = "VI";
	                    console.log(pin.slice(4, pin.length));
	                    cardNumberCharacters++;
	                    return main.validateNumbers(cardNumber, pin, validCombos);
	                }
	            }, false);
	        }
	    }, {
	        key: "validateNumbers",
	        value: function validateNumbers(cardNumber, pin, validCombos) {
	            var validCombo = void 0;
	            cardNumber = cardNumber.slice(4, cardNumber.length);
	            pin = pin.slice(4, pin.length);
	            for (var i = 0; i < validCombos.length; i++) {
	                if (validCombos[i] == cardNumber) {
	                    var j = i + 2;
	                    if (validCombos[j] == pin) {
	                        validCombo = true;
	                        console.log("TRUE");
	                    }
	                }
	            }
	            if (validCombo != true) {
	                document.getElementById('promptCustomer').innerHTML = "Incorrect Input. Please try again.";
	                document.getElementById('buttonSix').innerHTML = "RESTART";
	                document.getElementById("buttonSix").addEventListener("click", function () {
	                    location.reload();
	                }, false);
	            } else {
	                return main.generateMoney();
	            }
	        }
	    }, {
	        key: "generateMoney",
	        value: function generateMoney() {
	            var checkingAccountBalance = Math.floor(Math.random() * 100 + 1);
	            var savingsAccountBalance = Math.floor(Math.random() * 1000 + 1);
	            return main.selectAccount(checkingAccountBalance, savingsAccountBalance);
	        }
	    }, {
	        key: "selectAccount",
	        value: function selectAccount(checkingAccountBalance, savingsAccountBalance) {
	            var accountType = 0;
	            var isBusy = false;
	            document.getElementById('promptCustomer').innerHTML = "Which account would you like to access at this time?";
	            document.getElementById('buttonSix').innerHTML = "SAVINGS";
	            document.getElementById('buttonThree').innerHTML = "CHECKING";
	            document.getElementById("buttonSix").addEventListener("click", function () {
	                if (accountType == 0 && isBusy == false) {
	                    accountType = "savings";
	                    document.getElementById('buttonSix').innerHTML = "VI";
	                    document.getElementById('buttonThree').innerHTML = "III";
	                    document.getElementById('promptCustomer').innerHTML = "You have selected your " + accountType + " account, which has a balance of $" + savingsAccountBalance + ". Which action would you like to perform?";
	                    return main.performAction(accountType, checkingAccountBalance, savingsAccountBalance);
	                }
	            }, false);
	            document.getElementById("buttonThree").addEventListener("click", function () {
	                if (accountType == 0 && isBusy == false) {
	                    accountType = "checking";
	                    document.getElementById('buttonSix').innerHTML = "VI";
	                    document.getElementById('buttonThree').innerHTML = "III";
	                    document.getElementById('promptCustomer').innerHTML = "You have selected your " + accountType + " account, which has a balance of $" + checkingAccountBalance + ". Which action would you like to perform?";
	                    return main.performAction(accountType, checkingAccountBalance, savingsAccountBalance, isBusy);
	                }
	            }, false);
	        }
	    }, {
	        key: "performAction",
	        value: function performAction(accountType, checkingAccountBalance, savingsAccountBalance, isBusy) {
	            document.getElementById('buttonSix').innerHTML = "WITHDRAW";
	            document.getElementById('buttonThree').innerHTML = "DEPOSIT";
	            document.getElementById('buttonTwo').innerHTML = "TRANSFER";
	            document.getElementById('buttonFour').innerHTML = "SWITCH ACC.";
	            document.getElementById("buttonFour").addEventListener("click", function () {
	                if (accountType == "checking") {
	                    accountType = "savings";
	                    document.getElementById('promptCustomer').innerHTML = "You have selected your " + accountType + " account, which has a balance of $" + savingsAccountBalance + ". Which action would you like to perform?";
	                } else {
	                    accountType = "checking";
	                    document.getElementById('promptCustomer').innerHTML = "You have selected your " + accountType + " account, which has a balance of $" + checkingAccountBalance + ". Which action would you like to perform?";
	                }
	            }, false);
	            document.getElementById("buttonThree").addEventListener("click", function () {
	                isBusy = true;
	                document.getElementById('buttonTwo').innerHTML = "II";
	                document.getElementById('buttonSix').innerHTML = "VI";
	                document.getElementById('buttonThree').innerHTML = "III";
	                document.getElementById('buttonFour').innerHTML = "III";
	                return main.performDeposit(accountType, checkingAccountBalance, savingsAccountBalance);
	            }, false);
	            document.getElementById("buttonSix").addEventListener("click", function () {
	                isBusy = true;
	                document.getElementById('buttonTwo').innerHTML = "II";
	                document.getElementById('buttonSix').innerHTML = "VI";
	                document.getElementById('buttonThree').innerHTML = "III";
	                document.getElementById('buttonFour').innerHTML = "III";
	                return main.performWithdrawal(accountType, checkingAccountBalance, savingsAccountBalance);
	            }, false);
	            document.getElementById("buttonTwo").addEventListener("click", function () {
	                isBusy = true;
	                document.getElementById('buttonTwo').innerHTML = "II";
	                document.getElementById('buttonSix').innerHTML = "VI";
	                document.getElementById('buttonThree').innerHTML = "III";
	                document.getElementById('buttonFour').innerHTML = "III";
	                return main.performTransfer(accountType, checkingAccountBalance, savingsAccountBalance);
	            }, false);
	        }
	    }, {
	        key: "performDeposit",
	        value: function performDeposit(accountType, checkingAccountBalance, savingsAccountBalance) {
	            document.getElementById('promptCustomer').innerHTML = "How much money would you like to deposit into your " + accountType + " account?";
	            document.getElementById("displayArea").style.display = "block";
	            document.getElementById("one").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "1";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("two").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "2";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("three").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "3";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("four").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "4";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("five").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "5";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("six").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "6";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("seven").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "7";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("eight").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "8";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("nine").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "9";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("zero").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "0";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("buttonSix").addEventListener("click", function () {
	                var moneyDeposited = document.getElementById("displayArea").innerHTML;
	                moneyDeposited = Number(moneyDeposited.slice(4, moneyDeposited.length));
	                if (accountType == "checking") {
	                    checkingAccountBalance = Number(checkingAccountBalance) + moneyDeposited;
	                    document.getElementById('promptCustomer').innerHTML = "The balance of your " + accountType + " account is now $" + checkingAccountBalance + ". Thank you for using this terminal.";
	                } else {
	                    savingsAccountBalance = Number(savingsAccountBalance) + moneyDeposited;
	                    document.getElementById('promptCustomer').innerHTML = "The balance of your " + accountType + " account is now $" + savingsAccountBalance + ". Thank you for using this terminal.";
	                }
	                document.getElementById('buttonSix').innerHTML = "RESTART";
	                document.getElementById("buttonSix").addEventListener("click", function () {
	                    location.reload();
	                }, false);
	            }, false);
	        }
	    }, {
	        key: "performWithdrawal",
	        value: function performWithdrawal(accountType, checkingAccountBalance, savingsAccountBalance) {
	            document.getElementById('promptCustomer').innerHTML = "How much money would you like to withdraw from your " + accountType + " account?";
	            document.getElementById("displayArea").style.display = "block";
	            document.getElementById("one").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "1";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("two").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "2";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("three").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "3";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("four").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "4";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("five").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "5";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("six").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "6";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("seven").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "7";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("eight").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "8";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("nine").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "9";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("zero").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "0";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("buttonSix").addEventListener("click", function () {
	                var moneyWithdrawn = document.getElementById("displayArea").innerHTML;
	                moneyWithdrawn = Number(moneyWithdrawn.slice(4, moneyWithdrawn.length));
	                if (accountType == "checking") {
	                    if (moneyWithdrawn <= checkingAccountBalance) {
	                        checkingAccountBalance = Number(checkingAccountBalance) - moneyWithdrawn;
	                        document.getElementById('promptCustomer').innerHTML = "The balance of your " + accountType + " account is now $" + checkingAccountBalance + ". Thank you for using this terminal.";
	                    } else {
	                        document.getElementById('promptCustomer').innerHTML = "You do not have enough money to withdraw that amount. Please try again.";
	                        document.getElementById('buttonSix').innerHTML = "RESTART";
	                        document.getElementById("buttonSix").addEventListener("click", function () {
	                            location.reload();
	                        }, false);
	                    }
	                } else {
	                    if (moneyWithdrawn <= savingsAccountBalance) {
	                        savingsAccountBalance = Number(savingsAccountBalance) - moneyWithdrawn;
	                        document.getElementById('promptCustomer').innerHTML = "The balance of your " + accountType + " account is now $" + savingsAccountBalance + ". Thank you for using this terminal.";
	                    } else {
	                        document.getElementById('promptCustomer').innerHTML = "You do not have enough money to withdraw that amount. Please try again.";
	                        document.getElementById('buttonSix').innerHTML = "RESTART";
	                        document.getElementById("buttonSix").addEventListener("click", function () {
	                            location.reload();
	                        }, false);
	                    }
	                }
	                document.getElementById('buttonSix').innerHTML = "RESTART";
	                document.getElementById("buttonSix").addEventListener("click", function () {
	                    location.reload();
	                }, false);
	            }, false);
	        }
	    }, {
	        key: "performTransfer",
	        value: function performTransfer(accountType, checkingAccountBalance, savingsAccountBalance) {
	            if (accountType == "checking") {
	                document.getElementById('promptCustomer').innerHTML = "How much money would you like to transfer from your checking account to your savings account?";
	            } else {
	                document.getElementById('promptCustomer').innerHTML = "How much money would you like to transfer from your savings account to your checking account?";
	            }
	            document.getElementById("displayArea").style.display = "block";
	            document.getElementById("one").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "1";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("two").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "2";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("three").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "3";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("four").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "4";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("five").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "5";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("six").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "6";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("seven").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "7";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("eight").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "8";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("nine").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "9";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("zero").addEventListener("click", function () {
	                document.getElementById("displayArea").innerHTML = document.getElementById("displayArea").innerHTML + "0";
	                document.getElementById('buttonSix').innerHTML = "SUBMIT";
	            }, false);
	            document.getElementById("buttonSix").addEventListener("click", function () {
	                var moneyTransferred = document.getElementById("displayArea").innerHTML;
	                moneyTransferred = Number(moneyTransferred.slice(4, moneyTransferred.length));
	                if (accountType == "checking") {
	                    if (moneyTransferred <= checkingAccountBalance) {
	                        checkingAccountBalance = Number(checkingAccountBalance) - moneyTransferred;
	                        savingsAccountBalance = Number(savingsAccountBalance) + moneyTransferred;
	                        document.getElementById('promptCustomer').innerHTML = "The balance of your checking account is now $" + checkingAccountBalance + ". The balance of your savings account is now $" + savingsAccountBalance + ".";
	                    } else {
	                        document.getElementById('promptCustomer').innerHTML = "You do not have enough money to transfer that amount. Please try again.";
	                        document.getElementById('buttonSix').innerHTML = "RESTART";
	                        document.getElementById("buttonSix").addEventListener("click", function () {
	                            location.reload();
	                        }, false);
	                    }
	                } else {
	                    if (moneyTransferred <= savingsAccountBalance) {
	                        checkingAccountBalance = Number(checkingAccountBalance) + moneyTransferred;
	                        savingsAccountBalance = Number(savingsAccountBalance) - moneyTransferred;
	                        document.getElementById('promptCustomer').innerHTML = "The balance of your checking account is now $" + checkingAccountBalance + ". The balance of your savings account is now $" + savingsAccountBalance + ".";
	                    } else {
	                        document.getElementById('promptCustomer').innerHTML = "You do not have enough money to transfer that amount. Please try again.";
	                        document.getElementById('buttonSix').innerHTML = "RESTART";
	                        document.getElementById("buttonSix").addEventListener("click", function () {
	                            location.reload();
	                        }, false);
	                    }
	                }
	                document.getElementById('buttonSix').innerHTML = "RESTART";
	                document.getElementById("buttonSix").addEventListener("click", function () {
	                    location.reload();
	                }, false);
	            }, false);
	        }
	    }]);

	    return main;
	}();

	window.onload = function () {
	    var request = new XMLHttpRequest();
	    var filepath = "./data/cardnumbers_PINs.csv";
	    request.open("GET", filepath, true);
	    request.send();
	    request.onload = function () {
	        if (request.readyState === 4 && request.status === 200) {
	            new main(request.responseText.split(/,/));
	        }
	    };
	};

/***/ }
/******/ ]);