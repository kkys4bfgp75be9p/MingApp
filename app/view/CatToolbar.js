Ext.define("MingApp.view.CatToolbar", {
  extend:"Ext.Toolbar",
  requires: ["Ext.field.Select"],
  xtype:"cattoolbar",

  config:{
    items:[
      {
        xtype:"selectfield",
        id:"languageselectbox",
        name:"language",
        value:"german",
        width:120,
        options:[
          {
            text:"English",
            value:"english"
          },
          {
            text:"Deutsch",
            value:"german"
          },
          {
            text:"中文",
            value:"chinese"

          }
        ]
      }
//          ,
//          {
//            xtype: "spacer"
//          },
//          {
//            text: "facebook",
//            ui: "action"
//          },
//          {
//            text: "twitter",
//            ui: "action"
//          }
    ]
  }
});
