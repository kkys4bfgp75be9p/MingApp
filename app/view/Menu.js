Ext.define("MingApp.view.Menu", {
  extend: 'MingApp.ux.Container',
  xtype: 'menu',
  requires: ['MingApp.view.MenuList'],

  config:{
    layout: 'fit',
    style: 'background:white',
    items:[
      {
        xtype: 'menulist',
        id: 'menulist',
        fullscreen: false,
        tpl: '<div class="dish"><div class="dish-left"><h3 class="dish-name">{nameId}</h3>  <h4 class="dish-price">{price} €</h4> </div> <div class="dish-right"><img src="{iconId}"></div> </div>'
      }
    ]
  }
})