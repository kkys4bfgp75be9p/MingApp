Ext.define('MingApp.util.XTemplate', {
  extend: 'Ext.XTemplate',

  constructor: function(config) {

    var html = config.html;
    this.callParent([html]);

    this.language = config.language;

  },

  apply: function(values) {
    var cloneValues = Ext.clone(values);
    for(var key in cloneValues){
      var value = cloneValues[key];
      var translate = this.language[value];
      if(translate){
        cloneValues[key] = translate;
      }
    }
    return this.applyOut(cloneValues, []).join('');
  }

});