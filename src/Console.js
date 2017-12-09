'use strict';


const chalk = require('chalk');



module.exports = class Console {



    constructor(config) {

    }





    /**
    * print any type of input to the console
    */
    log(...input) {
        input.forEach((item) => {
            if (type.error())
        });
    }




    /**
    * object renderer
    */
    object(...objects) {

    }



    /**
    * render simple text messages
    */
    message(color, ...messages) {

    }




    /**
    * render an error message
    */
    trace(...errors) {

    }
}