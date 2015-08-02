Ext.define('Packt.view.Accordion', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.mainmenu',
	width: 350,
	layout: {
		type: 'accordion'
	},
	collapsible: false,
	hideCollapseTool: false,
	iconCls: 'sitemap',
	title: 'Menu',
	bodyBorder: true,
	resizeable: true,

	maxWidth: 450,
	minWidth: 200,
	scrollable: true
});