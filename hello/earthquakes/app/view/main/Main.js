Ext.define('Earthquakes.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'main',
    requires: [
        'Earthquakes.view.Grid',
        'Ext.plugin.Viewport'
    ],
    layout: 'border',
    title: 'Earthquakes in Iceland',
    items: [{
        xtype: 'earthquakesgrid',
        region: 'center',
        store: {
            type: 'store',
            model: 'Ext.data.Model',
            fields: [{
                type: 'date',
                name: 'timestamp',
                dateFormat: 'c'
            }],
            sorters: ['timestamp'],
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '//apis.is/earthquake/is',
                reader: {
                    rootProperty: 'results'
                }
            }
        }
    }]
});
