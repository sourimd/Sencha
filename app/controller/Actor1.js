Ext.define('Packt.controller.Actor', {
	extend: 'Ext.app.Controller',
	models: [
		'Actor'
	],
	stores: [
		'Actor'
	],
	views: [
		'Accordion'
	],
	refs: [
		{
			ref: 'mainPanel',
			selector: 'mainpanel'
		}
	],

	onPanelRender: function(abstractcomponent, options){
		console.log("From panel render");
  		var actorStore = Ext.create('Packt.store.Actor');

        actorStore.load({
            callback: function(records, operation, success) {
                // do something after the load finishes
                if( success){
                    var menuPanel = Ext.ComponentQuery.query('mainmenu')[0];

                    var storeForMenu = Ext.create('Ext.data.TreeStore', {
						    root: {
						        expanded: true,
						        text: 'All Actors'
						    }
					});

                    Ext.each( records, function(actor){
                    	//console.log(actor.getName());
                    	//------------------
                    	storeForMenu.add( {text: actor.getName(), leaf: true });
                    	
                    	//------------------
                    });
                    var item = Ext.create('Ext.tree.Panel', {
					    title: 'Simple Menu',
					    width: 300,
					    height: 150,
					    store: storeForMenu,
					    rootVisible: false,
					    //renderTo: mainmenu
					    resizeable: true,
						maxWidth: 450,
						minWidth: 200
					});
					menuPanel.add( item);
                }
            }
        });
	},

	init: function(application) {
		this.control({
			"mainmenu": {
				render: this.onPanelRender
			}
			// "mainmenuitem": {
			// 	select: this.onTreepanelSelect,
			// 	itemclick: this.onTreepanelItemClick
			// }
		});
	}
});