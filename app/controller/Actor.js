Ext.define('Packt.controller.Actor', {
	extend: 'Ext.app.Controller',
	requires:[
    	//'Ext.panel.Panel'
        //'Packt.model.Actor'
        //'Packt.store.Actor'
    ],
	models: [
		'Actor'
	],
	stores: [
		'Actor'
	],
	views: [
		'Accordion',
		'Item'
	],
	refs: [
		{
			ref: 'mainPanel',
			selector: 'mainpanel'
		}
	],

	createTab: function(actorName){
		console.log("Tab created for "+actorName);
		var mainPanel = this.getMainPanel(); // #1
		var newTab = mainPanel.items.findBy( // #2
			function (tab){
				return tab.title === actorName; // #3
			}
		);
		if (!newTab){ // #4
			newTab = mainPanel.add({ // #5
				//xtype: record.raw.className, // #6
				xtype: 'panel',
				closable: true, // #7
				//iconCls: record.get('iconCls'), // #8
				title: actorName // #9
			});
		}
		mainPanel.setActiveTab(newTab); // #10
	},

	onPanelRender: function(abstractcomponent, options){
		console.log("From panel render");
  		var actorStore = Ext.create('Packt.store.Actor');
  		var that = this;
        actorStore.load({
            callback: function(records, operation, success) {
                // do something after the load finishes
                if( success){
                    var mainMenuPanel = Ext.ComponentQuery.query('mainmenu')[0];
                    var indiitems;
                    Ext.each( records, function(actor){
                    	indiitems = Ext.create('Packt.view.Item',{ // #4
							title: actor.getName(),
							listeners: {
						        click: {
						            element: 'el', //bind to the underlying el property on the panel
						            fn: function(){ 
						            	//console.log( actor.getName() ); 
						            	that.createTab( actor.getName());
						            }
						        }
						    }
						});
                    	mainMenuPanel.add( indiitems);
                    });
					
                }
            }
        });
	},

	init: function(application) {
		this.control({
			"mainmenu": {
				render: this.onPanelRender
			}
			// "mainmenu individualmenuitem": {
			// 	//expand: this.onTreepanelItemClick
			// 	render: this.test
			// }
		});
	}
});