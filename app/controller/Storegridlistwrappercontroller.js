Ext.define('Packt.controller.Storegridlistwrappercontroller', {
	extend: 'Ext.app.Controller',
	views: [
		'Storegridlistwrapper', // #1
		//'Storegridlist'
		'StoreProfileForm'
	],
	init: function(application) {
		console.log("From store grid controller");
		this.control({
			"storegridlist": { // #2
				render: this.onRender
			},
			"button#add":{
				click: this.onAddClick
			},
			"button#cancel":{
				click: this.onFormCancelClick
			},
			"storeprofileform":{
				beforeclose: this.onFormBeforeClose
			}
		});
	},
	parentViewPort:{},
	onRender: function(component, options) { // #3
		component.getStore().load(); // #4
		console.log("helooooooooooo");
	},
	onAddClick: function(button, e, options) {
		//console.log( button.up('storegridlistwrapper'));
		this.parentViewPort = button.up('mainviewport'); 
		this.parentViewPort.mask();
		console.log("On add click");
		var win = Ext.create('Packt.view.StoreProfileForm');
		win.setTitle('Add new store');
		win.show();
	},
	onFormCancelClick: function(button, e, options){
		console.log("Form Cancel clicked");
		button.up('storeprofileform').close();
		this.parentViewPort.unmask();
	},
	onFormBeforeClose: function(panel, opts){
		console.log("Form close clicked");
		if( this.parentViewPort.isMasked()){
			this.parentViewPort.unmask();
		}
		
	}
});