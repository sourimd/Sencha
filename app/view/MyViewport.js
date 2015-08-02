Ext.define('Packt.view.MyViewport', {
	extend: 'Ext.container.Viewport', // #1
	alias: 'widget.mainviewport', // #2
	requires: [
		'Packt.view.Header', // #3 // this is from where appheader comes in
		'Packt.view.MainPanel',
		'Packt.view.Accordion'
	],
	layout: {
		type: 'border' // #4
	},
	items: [
		{
			//xtype: 'container', // #5
			xtype: 'mainmenu',
			width: 350,
			collapsible: true,
			region: 'west',
			//style: 'background-color: #8FB488;'
		},
		{
			xtype: 'appheader', // #6
			region: 'north'
		},
		{
			//xtype: 'container', // #7
			xtype: 'mainpanel',
			region: 'center',
			//style: 'background-color: #DEB887;'
		},
		{
			xtype: 'container', // #8
			region: 'south',
			height: 30,
			style: 'border-top: 1px solid #4c72a4;',
			html: '<div id="titleHeader"><center><span style="fontsize: 10px;">Mastering ExtJS book</span></center></div>',
			style: 'background-color: #fff;'
		}
	]
});