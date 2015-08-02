/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'Packt',

    requires:[
    	//'Packt.view.Login'
        //'Packt.model.Actor'
        //'Packt.store.Actor'
    ],

    models:[
        'Actor',
        'Salesbystore'
    ],

    views:[
    	//'Login'
        //'Storegridlistwrapper'
    ],
    controllers:[
        'Login',
        'Actor',
        'Storegridlistwrappercontroller'
    ],

    stores:[
        // 'Packt.store.Actor',
        // 'Packt.store.Salesbystore'
    ],

    extend: 'Packt.Application',
    
    //autoCreateViewport: 'Packt.view.main.Main',
    // autoCreateViewport: false
	
	splashscreen: {},
    //-------------------------------------------------------------------------
    // Most customizations should be made to Packt.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------

    init: function() {
		splashscreen = Ext.getBody().mask('Loading Sourim\'s application', 'splashscreen');
		splashscreen.addCls('splashscreen');
		Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
			cls: 'x-splash-icon'
		});
	},

	launch: function () {
        // TODO - Launch the application
        Ext.tip.QuickTipManager.init();
        var task = new Ext.util.DelayedTask(function() { // #1
			splashscreen.fadeOut({
				duration: 1000,
				remove:true,
                listeners:{
                    afteranimate:function(e1, startTime, eOpts){
                        //Ext.widget('login');
                        Ext.create('widget.login');
                    }
                }
			});
			// Ext.getBody().unmask(); // #2

            // splashscreen.next().fadeOut({
            //     duration: 1000,
            //     remove:true
            // });

			console.log("second");
		});
		
		task.delay(2000);

        console.log("first");

        // var actor = Ext.create('actor', {
        //     actor_id   : 1001,
        //     first_name : 'Shahrukh',
        //     last_name : 'Khan'
        //     //last_updated : new Date()
        // });

        //user.changeName();
        //console.log(actor.get('first_name') );
        //console.log(actor.get('last_updated') );
        //console.log(actor.get('first_name') );


        //var actorStore = Ext.create('Packt.store.Actor');
        //console.log( actorStore);

        // actorStore.load({
        //     callback: function(records, operation, success) {
        //         // do something after the load finishes
        //         if( success){
        //             //console.log( records[4]);
        //             // for(var propt in records[4]){
        //             //     console.log(propt + ': ' + records[4][propt]);
        //             // }
        //             // console.log( records[4]['data']['first_name']);
        //             // console.log( records[4].getName() );
        //             // console.log( records[4].get('first_name')); // records[i] is of type model
        //         }
        //     }
        // });
    }
});
