Ext.define("MingApp.view.MapContainer", {
  extend:'MingApp.ux.Container',
  requires:"Ext.Map",
  xtype:"mapcontainer",

  config:{
    layout:{
      type:"card",
      animation:"slide"
    }

  }
});