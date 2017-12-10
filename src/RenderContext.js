'use strict';


const type = require('ee-types');



module.exports = class RenderContext {

    constructor({
        indentation = 4,
        renderers,
        printer = console.log
    }) {
        this.indentation = indentation;
        this.renderers = renderers;
        this.printer = printer;

        // how many indentation levels are we in?
        this.level = 0;

        // buffer everything until a linebreak is reached
        this.lineBuffer = '';
    }




    /**
    * render multiple values
    */
    render({
        values,
        callsite,
        color,
    }) {
        values.forEach((value) => {
            const valueType = type(value);

            if (this.renderers.has(valueType)) {
                const renderer = this.renderers.get(valueType);

                renderer.render(this, value);
            } else {

                // just render an error
                this.renderers.get('error').render(this, new Error(`logd console renderer: no render for the type '${valueType}' found! Please file an issue on github https://github.com/distributed-systems/logd-console-output`));
            }
        });
    }




    /**
    * renders a single value
    */
    renderValue(value) {

    }






    /**
    * set a custom printer function
    */
    setPrinter(printer = console.log) {
        this.printer = printer;
        return this;
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
        this.printer(this.lineBuffer);
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