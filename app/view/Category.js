Ext.define("MingApp.view.Category", {
  extend: 'MingApp.ux.Container',
  xtype:"category",
  requires:[
    "MingApp.view.CatToolbar",
    "MingApp.view.CatDataview",
    "MingApp.util.Performance"
  ],


  config:{
    layout:"fit",
    baseCls: "category-container-body",
    items:[
      {
        xtype:"cattoolbar",
        left:0,
        bottom:0,
        height:40,
        width:150
      },
      {
        xtype:"catdataview",
        id: "catdataview",
        padding: "100 10 50 10",
        tpl : '<div class="main-category {iconid}"><div class="category-value">{value}</div><div class="category-goto-icon"></div></div>',
        store:{
          fields:['category', 'value', 'iconid'],
          data:[
            {
              value:"menu",
              iconid: "category-menu-icon"
            },
            {
              value:'map',
              iconid: "category-map-icon"
            },
            {
              value:'reserve',
              iconid: "category-reserve-icon"
            },
            {
              value:"newsletter",
              iconid: "category-newsletter-icon"
            }
            ,{
              value: "performance",
              iconid: "category-performance-icon"
            }
          ]
        }
      }
    ]
  }

});
