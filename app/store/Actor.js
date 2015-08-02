Ext.define('Packt.store.Actor', {
	extend: 'Ext.data.Store',
	requires: [
		'Packt.model.Actor'
	],
	//alias: 'actorstore',
	model: 'Packt.model.Actor',
	//model : 'actor',
	//autoload: true,
	proxy: {
		type: 'ajax',
		url: 'php/actor.php',
		reader: {
			type: 'json',
			rootProperty: 'actors'
		}
	}
});