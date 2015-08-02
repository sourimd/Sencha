Ext.define('Packt.view.StoreProfileForm', {
	extend: 'Ext.window.Window',
	alias: 'widget.storeprofileform',
	height: 190,
	width: 400,
	requires: ['Packt.util.Util'],
	layout: {
		type: 'fit'
	},
	title: 'Store Profile',
	items: [
		{
			xtype: 'form',
			bodyPadding: 5,
			layout: {
				type: 'vbox', // #1
				align: 'stretch'
			},
				// xtype: 'fieldset',
				// flex: 2,
				// title: 'User Information',
			defaults: {
				afterLabelTextTpl: Packt.util.Util.required, // #1
				anchor: '100%',
				xtype: 'textfield',
				allowBlank: false,
				//labelWidth: 60
			},
			items:[
				{
					fieldLabel: 'Store',
					name: 'store'
				},
				{
					fieldLabel: 'Manager',
					name: 'manager'
				},
				{
					fieldLabel: 'Total Sales',
					name: 'total_sales'
				}
			],
			dockedItems: [
				{
					xtype: 'toolbar',
					flex: 1,
					dock: 'bottom',
					ui: 'footer',
					layout: {
						pack: 'end', // #1
						type: 'hbox'
					},
					items: [
						{
							xtype: 'button',
							text: 'Cancel',
							itemId: 'cancel',
							iconCls: 'cancel'
						},
						{
							xtype: 'button',
							text: 'Save',
							itemId: 'save',
							iconCls: 'save'
						}
					]
				}
				]
			
		}
	]
});