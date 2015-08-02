Ext.define('Packt.view.Storegridlistwrapper', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.storegridlistwrapper',
	requires: [
		'Packt.view.Storegridlist' // #1
	],
	layout: {
		type: 'fit' // #2
	},
	items: [
		{
			xtype: 'storegridlist' // #3
		}
	],
	dockedItems: [
		{
			xtype: 'toolbar',
			flex: 1,
			dock: 'top',
			items: [
				{
					xtype: 'button',
					text: 'Add',
					itemId: 'add',
					iconCls: 'add'
				},
				{
					xtype: 'button',
					text: 'Edit',
					itemId: 'edit',
					iconCls: 'edit'
				},
				{
					xtype: 'button',
					text: 'Delete',
					itemId: 'delete',
					iconCls: 'delete'
				}
			]
		}
	]
});