'use strict';

const Renderer = require('./Renderer');






module.exports = class UndefinedRenderer extends Renderer {

    getName() {
        return 'undefined';
    }


    

    render({
        context,
        value,
        label,
        decoration,
    }) {
        context.renderDecoration({label, decoration, close: true});
        context.print(this.decorate(context, '<undefined>', 'text'));
    }
}