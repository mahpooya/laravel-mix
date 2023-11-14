const { Component } = require('./Component');

module.exports = class Then extends Component {
    /**
     * The API name for the component.
     */
    name() {
        return ['then', 'after'];
    }

    /**
     * @param {() => void | Promise<void>} callback
     */
    register(callback) {
        //TODO: remove this:
        console.log("Then.js > register mahpooya logs");
        console.log(
            JSON.stringify({
                a: 'try to listen on build',
            }),
        );
        this.context.listen('build', callback);
    }
};
