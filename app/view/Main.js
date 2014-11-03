Ext.define('MingApp.view.Main', {
  extend:'MingApp.ux.Container',
  xtype:'main',

  requires:[
    "MingApp.view.Category",
    "MingApp.view.Restaurant",
    "MingApp.view.Panorama",
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
        cls:'back',
        hidden: true,
        width: 48,
        height:48,
        left:10,
        top:5
      },
      {
        xtype:'mbutton',
        id:'homebutton',
        cls:'home',
        hidden: true,
        width: 48,
        height:48,
        left:65,
        top:5
      },
      {
        xtype:'mbutton',
        id:'360button',
        cls:'panorama',
        hidden: true,
        width: 48,
        height:48,
        right:10,
        top:5
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
        xtype:'restaurant',
        id:'restaurant',
        layout:"fit"
      },
      {
        xtype:'panorama',
        id:'panorama',
        layout:"fit"
      },
      {
        xtype:"menu",
        id:"menu"
      },
      {
        xtype:'dataview',
        id:'newsletter',
        layout:'fit',
        store: {
          fields: ['name', 'age'],
          data: [
            {name: 'Jamie',  age: 100},
            {name: 'Rob',   age: 21},
            {name: 'Tommy', age: 24},
            {name: 'Jacky', age: 24},
            {name: 'Ed',   age: 26}
          ]
        },

        itemTpl: '<div>{name} is {age} years old</div>'
      },
      {
        xtype:"carouselcontainer",
        id:"carouselcontainer"
      }
    ]
  }
});
