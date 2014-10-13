Ext.define("MingApp.ux.Container", {
  extend:"Ext.Container",

  constructor:function (config) {

    this.beforeCallParent(config);

    this.callParent(arguments);
  },

  beforeCallParent:function (config) {
    var prototype = this.self.prototype;
    var items = prototype.config.items;
    if(items){
      for (var i = 0, j = items.length; i < j; i++) {
        var item = items[i];
        item.language = config.language;
      }
    }
  },

  resetLanguage:function (value) {
    this.language = value;

    var items = this.getInnerItems();

    for (var i = 0, j = items.length; i < j; i++) {
      var item = items[i];
      item.language = value;
      if (typeof item.resetLanguage === "function") {
        item.resetLanguage(value);
      }
    }
  }

});