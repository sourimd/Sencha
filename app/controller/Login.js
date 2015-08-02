Ext.define('Packt.controller.Login', { // #1
	
	extend: 'Ext.app.Controller', // #2

	requires: [
		'Packt.util.Util',
		'Packt.util.SessionMonitor'
	],
	
	views: [
		'Login', // #3
		'Header',
		'authentication.CapsLockTooltip'
	],

	refs: [
		{
			ref: 'capslockTooltip',
			selector: 'capslocktooltip'
		}
	],

	onButtonClickSubmit : function(button, e, options){
		//Ext.Msg.alert('Submit Clicked');
		var formPanel = button.up('form');
		var login = button.up('login');
		var user = formPanel.down('textfield[name=user]').getValue();
		var pass = formPanel.down('textfield[name=password]').getValue();

		Ext.get(login.getEl()).mask("Authenticating...Please Wait...", 'loading');

		if (formPanel.getForm().isValid()) {
			Ext.Ajax.request({
				url: 'php/login.php',
				params: {
					user: user,
					password: pass
				},
				failure: function(conn, response, options, eOpts) {
					Ext.get(login.getEl()).unmask();
					Ext.Msg.show({
						title:'Error!',
						msg: conn.responseText,
						icon: Ext.Msg.ERROR,
						buttons: Ext.Msg.OK,
						height: 200,
						width: 200
					});
				},
				success: function(conn, response, options, eOpts) {
					Ext.get(login.getEl()).unmask();
					var result = Ext.JSON.decode(conn.responseText, true); // #1
					if (!result){ // #2
						result = {};
						result.success = false;
						result.msg = conn.responseText;
					}
					if (result.success) { // #3
						login.close(); // #4
						Ext.create('Packt.view.MyViewport'); // #5
						Packt.util.SessionMonitor.start();
					}else {
						Ext.Msg.show({
							title:'Fail!',
							msg: result.msg, // #6
							icon: Ext.Msg.ERROR,
							buttons: Ext.Msg.OK,
							height: 200,
							width: 200
						});
					}
				}
			});
		}

		console.log(user+" "+pass);
	},

	onButtonClickCancel : function(button, e, options){
		//Ext.Msg.alert('Cancel Clicked');
		button.up('form').getForm().reset();
	},

	onTextFieldSpecialKey : function(field, e, options){
		if( e.getKey() == e.ENTER){
			var submitButton = field.up('form').down('button#submit');
			submitButton.fireEvent('click', submitButton, e, options);
		}
	},

	onTextfieldKeyPress : function(field, e, options){
		var charCode = e.getCharCode();
		
		if((e.shiftKey && charCode >= 97 && charCode <= 122) || 
		(!e.shiftKey && charCode >= 65 && charCode <= 90)){
			
			if(this.getCapslockTooltip() === undefined){ // #3
				Ext.widget('capslocktooltip'); // #4
			}
			this.getCapslockTooltip().show(); // #5
		} 
		else{
			if(this.getCapslockTooltip() !== undefined){ // #6
				this.getCapslockTooltip().hide(); // #7
			}
		}
	},

	onButtonClickLogout: function(button, e, options){
		Ext.Ajax.request({
			url: 'php/logout.php',
			success: function(conn, response, options, eOpts){
				var result = Packt.util.Util.decodeJSON(conn.responseText);
				if (result.success) {
					button.up('mainviewport').destroy();
					window.location.reload();
				}
				else{
					Packt.util.Util.showErrorMsg(conn.responseText);
				}
			},
			failure: function(conn, response, options, eOpts) {
				Packt.util.Util.showErrorMsg(conn.responseText);
			}
		});
	},
	
	init: function(application) { // #4
		
		this.control({ // #5
			"login form toolbar button#submit" : {
				click : this.onButtonClickSubmit
			},
			"login form toolbar button#cancel" : {
				click : this.onButtonClickCancel
			},
			"login form textfield" : {
				specialkey: this.onTextFieldSpecialKey
			},
			"login form textfield[name = password]" : {
				keypress: this.onTextfieldKeyPress
			},
			"appheader button#logout":{
				click: this.onButtonClickLogout
			}
		});
	}
});