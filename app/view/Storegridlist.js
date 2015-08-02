Ext.define('Packt.view.Storegridlist', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.storegridlist',
	frame: true,
	store: Ext.create('Packt.store.Salesbystore'), // #1
	columns: [
		{
			width: 150,
			dataIndex: 'store',
			flex: 1,
			text: 'Store'
		},
		{
			width: 200,
			dataIndex: 'manager',
			flex: 1,
			text: 'Manager'
		},
		{
			width: 250,
			dataIndex: 'total_sales',
			flex: 0.5,
			text: 'Total Sales'
		}
	]
});