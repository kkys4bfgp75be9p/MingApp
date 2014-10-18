Ext.define("MingApp.view.Category", {
  extend: 'MingApp.ux.Container',
  xtype:"category",
  requires:[
    "MingApp.view.CatToolbar",
    "MingApp.view.CatDataview"
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
        padding: "10",
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
          ]
        }
      }
    ]
  }

});
