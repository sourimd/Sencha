Ext.define('Packt.model.Salesbystore', {
	extend: 'Ext.data.Model',
	idProperty: 'store',
	fields: [
		{ name: 'store' },
		{ name: 'manager' },
		{ name: 'total_sales' }
	]
});