/**
 * Created by Administrator on 3/14/2016.
 */

'use strict';

class main {
    constructor() {
        main.getReady();
        main.watchDirectors();
    }

    static getReady() {
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

        let dtToday = new Date();
        let month = dtToday.getMonth() + 1;
        let day = dtToday.getDate();
        let year = dtToday.getFullYear();
        let birthYear = dtToday.getFullYear() - 18;
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

        let inputs = document.getElementsByClassName('form-control');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('blur', () => {
                let parent = inputs[i].parentNode;
                let input = inputs[i];
                let message = document.createElement('div');
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
        }
        let nexts = document.getElementsByClassName('next');
        for (let i = 0; i < nexts.length; i++) {
            let next = nexts[i];
            let parentForm = next.parentNode;
            next.addEventListener('click', () => {
                let formData = new FormData(parentForm);
                this.sendFormData(formData);
            });
        }
        document.getElementById('submit').addEventListener('click', () => {
            if (!document.getElementById('accept').checked) {
                document.getElementById('please-accept').innerHTML = 'Please accept the terms & conditions';
            } else {
                document.getElementById('thankYou').style.display = 'block';
                document.getElementById('accordion').style.display = 'none';
                window.history.pushState('page2', 'Thank You', '/thank-you');
            }
        });
    }

    static watchDirectors() {
        document.getElementById('numberOfDirectors').addEventListener('change', () => {
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
        document.getElementById('timeAtAddress').addEventListener('keyup', () => {
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
        document.getElementById('timeAtAddressOfSecondDirector').addEventListener('keyup', () => {
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
        document.getElementById('timeAtAddressOfThirdDirector').addEventListener('keyup', () => {
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

    static sendFormData(data) {
        let form = document.querySelector('form');
        let bustCache = '?' + new Date().getTime();
        const request = new XMLHttpRequest();
        request.open('POST', event.target.dataset.url + bustCache, true);
        request.setRequestHeader('X-Requested-With', 'formWriteRequest');
        request.send(data);
    }
}



window.onload = () => {
    new main();
};