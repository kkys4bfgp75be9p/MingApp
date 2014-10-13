Ext.define("MingApp.view.CatDataview", {
  extend:"Ext.DataView",
  requires:['MingApp.i18n.Language', 'MingApp.util.XTemplate'],
  mixins:["MingApp.mixin.DataViewMixin"],
  xtype:"catdataview",

  constructor:function (config) {
    config.itemTpl = new MingApp.util.XTemplate({
      html:config.tpl,
      language:MingApp.i18n.Language[config.language]
    });

    this.callParent([config]);

  },

  config:{
    pressedCls: "category-pressed",
    padding:'100 40 100 40',
    disableSelection:true
  }

});
