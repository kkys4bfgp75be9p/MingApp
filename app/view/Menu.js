Ext.define("MingApp.view.Menu", {
  extend: 'MingApp.ux.Container',
  xtype: 'menu',
  requires: ['MingApp.view.MenuList'],

  config:{
    layout: 'fit',
    items:[
      {
        xtype: 'menulist',
        id: 'menulist',
        fullscreen: false,
        tpl: '<div class="dish"> <div class="dich-name">{nameId}</div>  <div class="dich-price">{price} €</div> <div class="dich-icon dich-{iconId}"></div> </div>'
      }
    ]
  }
})