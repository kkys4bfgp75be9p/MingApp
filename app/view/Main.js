Ext.define('MingApp.view.Main', {
  extend:'MingApp.ux.Container',
  xtype:'main',

  requires:[
    "MingApp.view.Category",
    "MingApp.view.MenuList",
    "MingApp.view.CarouselContainer",
    "MingApp.view.MapContainer",
    'MingApp.ux.Button'
  ],


  config:{
    layout:{
      type:"card",
      animation:"fade"
    },

    items:[
      {
        xtype:'mbutton',
        id:'backbutton',
        hidden: true,
        width: 64,
        height:64,
        left:20,
        top:5,
        text:"a"
      },
      {
        xtype:'mbutton',
        id:'homebutton',
        hidden: true,
        width: 64,
        height:64,
        left:100,
        top:5,
        text:'b'
      },
//      {
//        xtype:"button",
//        iconCls:'favorites',
//        id:'360button',
//        hidden: true,
//        iconMask:true,
//        right:5,
//        top:5
//      },
      {
        xtype:"category",
        id:"category"
      },
      {
        xtype:'component',
        id:'restaurant',
        layout:"fit",
        html:'<div>restaurant</div>'
      },
      {
        xtype:"menu",
        id:"menu"
      },
      {
        xtype:'component',
        id:'newsletter',
        layout:'fit',
        html:'<div>news letter</div>'
      },
      {
        xtype:"carouselcontainer",
        id:"carouselcontainer"
      }
//      ,{
//        xtype:"mapcontainer",
//        id:"mapcontainer"
//      },
//      {
//        xtype: "reserveform",
//        id: "reserveform"
//      }
//      ,{
//        xtype : "component",
//        id: "performance"
//      }
    ]
  }
});
