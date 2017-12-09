'use strict';





module.exports = class RenderContext {

    constructor({
        indentation = 4
    }) {
        this.indentation = indentation;

        // how many indentation levels are we in?
        this.level = 0;

        // buffer everything until a linebreak is reached
        this.lineBuffer = '';
    }




    /**
    * print to console
    */
    print(string) {
        this.lineBuffer += string;
    }



    /**
    * print everything and start a new line
    */
    newLine() {
        console.log(this.lineBuffer);
    }



    /**
    * increases the level
    */
    in() {
        this.level++;
    }


    /**
    * decreses the level
    */
    out() {
        this.level--;
    }




    /**
    * returns the wihitespace that needs to be inf ront of items
    */
    getSpacing() {
        return ' '.repeat(this.indentation*this.level);
    }
}