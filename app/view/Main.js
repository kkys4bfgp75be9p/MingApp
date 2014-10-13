Ext.define('MingApp.view.Main', {
  extend:'MingApp.ux.Container',
  xtype:'main',

  requires:[
    "MingApp.view.Category",
    "MingApp.view.MenuList",
    "MingApp.view.CarouselContainer",
    "MingApp.view.MapContainer"
  ],


  config:{
    layout:{
      type:"card",
      animation:"fade"
    },

    items:[
      {
        xtype:"button",
        iconCls:'arrow_left',
        id:'backbutton',
        hidden: true,
        iconMask:true,
        left:5,
        top: 5
      },
      {
        xtype:"button",
        iconCls:'home',
        id:'homebutton',
        hidden: true,
        iconMask:true,
        left:50,
        top:5
      },
      {
        xtype:"button",
        iconCls:'favorites',
        id:'360button',
        hidden: true,
        iconMask:true,
        right:5,
        top:5
      },
      {
        xtype:"category",
        id:"category"
      },
      {
        xtype:"menu",
        id:"menu"
      },
      {
        xtype:"carouselcontainer",
        id:"carouselcontainer"
      },
      {
        xtype:"mapcontainer",
        id:"mapcontainer"
      },
      {
        xtype: "reserveform",
        id: "reserveform"
      },
      {
        xtype : "component",
        id: "performance"
      }
    ]
  }
});
