Ext.define('Earthquakes.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'main',
    requires: [
        'Earthquakes.view.Grid',
        'Ext.plugin.Viewport',
        'Earthquakes.view.Map',
        'Ext.data.Store',
        'Ext.data.proxy.Ajax',
        'Ext.window.Toast',
        'Earthquakes.view.main.MainController',
        'Earthquakes.view.main.MainModel',
    ],
    controller: 'main',
    viewModel:{
xclass:'Earthquakes.view.main.MainModel'
    },

    layout: 'border',
    title: 'Earthquakes in Iceland',
    items: [{
        xtype: 'earthquakesmap',
        region: 'north',
        flex:1,
        location:{
            latitude:64.9312762,
            longitude:-19.021169
        },
        split:true,
        
        listeners: {
            select: 'onSelect'
        },
        bind:{
            store:'{earthquakes}',
            selection: '{earthquake}'
        }
    },{
        xclass: 'Earthquakes.view.Grid',
        region: 'center',
        flex:1,
        bind:{
            store:'{earthquakes}',
            selection: '{earthquake}'
        }
    }]
});