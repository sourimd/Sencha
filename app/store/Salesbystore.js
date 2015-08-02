Ext.define('Packt.store.Salesbystore', {
	extend: 'Ext.data.Store',
	requires: [
		'Packt.model.Salesbystore' // #1
	],
	model: 'Packt.model.Salesbystore', // #2
	proxy: {
		type: 'ajax',
		url: 'php/salesbystore.php',
		reader: {
			type: 'json',
			rootProperty: 'stores'
		}
	}
});