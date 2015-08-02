Ext.define('Packt.view.MainPanel', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.mainpanel',
	requires:[
		'Packt.view.Storegridlistwrapper'
	],
	activeTab: 0,
	items: [
		{
			xtype: 'storegridlistwrapper',
			closable: false,
			iconCls: 'home',
			title: 'Home'
		}
	]
});