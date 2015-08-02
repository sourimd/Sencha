Ext.define('Packt.view.Login', { // #1
	extend: 'Ext.window.Window', // #2
	alias: 'widget.login', // #3
	autoShow: true, // #4
	height: 170, // #5
	width: 360, // #6
	layout: {
		type: 'fit' // #7
	},
	//iconCls: 'key', // #8
	title: "Login", // #9
	closeAction: 'hide', // #10
	closable: false, // #11

	items: [
		{
			xtype: 'form', // #12
			frame: false, // #13
			bodyPadding: 15, // #14
			defaults: { // #15
				xtype: 'textfield', // #16
				anchor: '100%', // #17
				labelWidth: 60, // #18
				allowBlank: false,
				vtype: 'alphanum',
				minLength: 3,
				msgTarget: 'under'
			},
			items: [
					{
						name: 'user',
						fieldLabel: "User",
						maxLength: 25
					},
					{
						inputType: 'password', // #19
						name: 'password',
						fieldLabel: "Password",
						maxLength: 15,
						enableKeyEvents: true,
						id: 'password'
					}
			],
			dockedItems: [
				{
					xtype: 'toolbar',
					dock: 'bottom',
					items: [
						{
							xtype: 'tbfill' //#24
						},
						{
							xtype: 'button', // #25
							itemId: 'cancel',
							//iconCls: 'cancel',
							text: 'Cancel'
						},
						{
							xtype: 'button', // #26
							itemId: 'submit',
							formBind: true, // #27
							//iconCls: 'key-go',
							text: "Submit"
						}
					]
				}
			]
		}
	]
});