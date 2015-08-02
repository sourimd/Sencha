Ext.define('Packt.model.Actor', {
    extend: 'Ext.data.Model',
    alias: 'actor',

    idProperty: 'actor_id',

    fields: [
        {name: 'actor_id',  type: 'int'},
        {name: 'first_name',  type: 'string'},
        {name: 'last_name',  type: 'string'}
        //{name: 'last_updated',  type: 'date'}
        // {name: 'age',   type: 'int', convert: null},
        // {name: 'phone', type: 'string'},
        // {name: 'alive', type: 'boolean', defaultValue: true, convert: null}
    ],

    getName: function() {
        //console.log("In actor model");
        var fullName = this.get('first_name')+" "+this.get('last_name') ;

        //this.set('name', newName);
        return fullName;
    }
});