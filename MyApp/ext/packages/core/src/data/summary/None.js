/**
 * Produces no value for a summary. This would be used for fields like `id` or other
 * value that does not aggregate.
 * @since 7.0
 */
Ext.define('Ext.data.summary.None', {
    extend: 'Ext.data.summary.Base',

    alias: 'data.summary.none',

    config: {
        /**
         * @cfg {Mixed} value
         * The value to report for the summary.
         */
        value: null
    },

    /**
     * Name of the summary function that appears in the {@link Ext.grid.plugin.Summaries} plugin
     */
    text: 'None',

    calculate: function() {
        return this.getValue();
    }
});
