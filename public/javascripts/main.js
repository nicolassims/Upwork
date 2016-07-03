/**
 * Created by Administrator on 3/14/2016.
 */

'use strict';

class main {
    constructor() {
        document.getElementById('aboutTheSecondDirector').style.display = "none";
        document.getElementById('aboutTheThirdDirector').style.display = "none";
    }
}

window.onload = () => {
    new main();
};