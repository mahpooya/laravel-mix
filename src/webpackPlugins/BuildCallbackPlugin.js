class BuildCallbackPlugin {
    /**
     * Create a new plugin instance.
     *
     * @param {(stats: import("webpack").Stats) => any|Promise<any>} callback
     */
    constructor(callback) {
        this.callback = callback;
    }

    /**
     * Apply the plugin.
     *
     * @param {import("webpack").Compiler} compiler
     */
    apply(compiler) {
        //TODO: remove this:
        console.log("BuildCallbackPlugin.js > apply mahpooya logs");
        console.log(
            JSON.stringify({
                a: 'try to compiler.hooks.done.tapPromise(\'BuildCallbackPlugin\'...',
            }),
        );
        compiler.hooks.done.tapPromise('BuildCallbackPlugin', async stats => {
            return await this.callback(stats);
        });
    }
}

module.exports = BuildCallbackPlugin;
