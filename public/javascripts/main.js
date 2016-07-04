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
        document.getElementById('aboutTheSecondDirector').style.display = 'none';
        document.getElementById('aboutTheThirdDirector').style.display = 'none';
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
                this.getThankYouPage();
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
    }

    static sendFormData(data) {
        let form = document.querySelector('form');
        let bustCache = '?' + new Date().getTime();
        const request = new XMLHttpRequest();
        request.open('POST', event.target.dataset.url + bustCache, true);
        request.setRequestHeader('X-Requested-With', 'formWriteRequest');
        request.send(data);
    }

    static getThankYouPage() {
        let bustCache = '?' + new Date().getTime();
        const request = new XMLHttpRequest();
        request.onload = function() {
            if (request.readyState == 4 && request.status == 200) {
                document.getElementsByClassName('container')[0].innerHTML = request.responseText;
                window.history.pushState('', 'Thank You', '/thank-you');
            }
        };
        request.open('POST', event.target.dataset.url + bustCache, true);
        request.setRequestHeader('X-Requested-With', 'getThankYouPageRequest');
        request.send();
    }
}



window.onload = () => {
    new main();
};