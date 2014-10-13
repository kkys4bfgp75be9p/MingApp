Ext.define("MingApp.mixin.DataViewMixin", {
  resetLanguage:function (value) {
    this.language = value;
    var tpl = this.getItemTpl();
    tpl.language = MingApp.i18n.Language[value];
    this.refresh();
  }
});