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
//      {
//        xtype:"cattoolbar",
//        left:0,
//        bottom:0,
//        height:40,
//        width:150
//      },
      {
        xtype:"catdataview",
        id: "catdataview",
        baseCls:'card',
        tpl : '<img class="card-img" src="{imgUrl}"><div class="card-content {contentCls}">{html}</div>',
        store:{
          fields:['id', 'category', 'value', 'imgUrl','contentCls', 'html'],
          data:[
            {
              id: 'restaurant',
              value: 'restaurant',
              imgUrl: 'resources/cards/restaurant.jpg',
              html: 'restaurant',
              contentCls: 'res'
            },
            {
              id:'menu',
              value:'menu',
              imgUrl: 'resources/cards/menu.jpg',
              html: 'menu',
              contentCls: 'men'

            },
            {
              id:'newsletter',
              value:'newsletter',
              imgUrl: 'resources/cards/news.jpg',
              html: 'newsletter',
              contentCls: 'new'
            }
//            ,{
//              value:'reserve',
//              iconClass: 'category-reserve-icon',
//              iconTextClass:'category-reserve-icon-text',
//              iconText: 'Hello world'
//            }
//            ,{
//              value:'map',
//              iconClass: "category-map-icon",
//              iconTextClass:'category-map-icon-text',
//              iconText: 'Hello world'
//            }
          ]
        }
      }
    ]
  }

});
