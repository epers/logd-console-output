'use strict';


const chalk = require('chalk');
const promisify = require('util').promisify;
const glob = promisify(require('glob'));
const path = require('path');
const RenderContext = require('./RenderContext');



module.exports = class Console {



    constructor(config) {

    }




    /**
    * load all available renderers from the filesystem
    */
    getRenderers() {

        // load the renderes only one time
        if (!this.rendererPromise) {
            this.rendererPromise = glob(path.join(__dirname, './renderer/*.js')).then(async (files) => {
                const renderers = new Map();

                files.forEach((file) => {
                    const Constructor = require(file);
                    const renderer = new Constructor();
                    renderers.set(renderer.getName(), renderer);
                });

                return renderers;
            });
        }

        return this.rendererPromise;
    }







    /**
    * print any type of input to the console
    */
    async log(options) {
        const renderers = await this.getRenderers();

        const context = new RenderContext({
            renderers,
        });


        // return the context, then execute the rendering
        process.nextTick(() => {
            
            // render all values
            context.render(options);

            // end with a newline
            context.newLine();
        });
        
        // return the context to the user
        return context;
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