Ext.define("MingApp.view.Restaurant", {
  extend: 'MingApp.ux.Container',
  xtype:"restaurant",
  requires:[
    "MingApp.view.CatDataview"
  ],
  config:{
    layout:"fit",
    baseCls: "category-container-body",
    items:[
      {
        xtype:"catdataview",
        baseCls:'card',
        tpl : '<img class="card-img" src="{imgUrl}"><div class="card-content {contentCls}">{html}</div>',
        store:{
          fields:['id', 'category', 'value', 'imgUrl','contentCls', 'html'],
          data:[
            {
              id: 'restaurant',
              value: 'restaurant',
              imgUrl: 'resources/images/map.png',
              html: 'map',
              contentCls: 'res'
            }
          ]
        }
      }
    ]
  }

});
