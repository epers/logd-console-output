'use strict';

const Renderer = require('./Renderer');






module.exports = class StringRenderer extends Renderer {

    getName() {
        return 'string';
    }


    

    render({
        context,
        value,
        label,
        decoration,
        color,
    }) {
        context.renderDecoration({label, decoration: (decoration ? decoration+' ' : '')+`(${value.length})`, close: true});
        context.print(this.decorate(context, this.truncate(value.slice(0, 80), 80), 'text', color));
    }
}