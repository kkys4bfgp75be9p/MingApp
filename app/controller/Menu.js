Ext.define("MingApp.controller.Menu", {
  extend:"Ext.app.Controller",
  config:{
    control:{
      menulist:{
        itemtap:'onItemTap'
      }
    },

    refs:{
      menulist:"menulist"
      //,backbutton:'button'
    }
  },

  onItemTap:function (view, index, target, record) {

    var homeButton = Ext.getCmp("homebutton");
    var main = Ext.getCmp('main'),
        carouselContainer = Ext.getCmp('carouselcontainer');

    if (carouselContainer) {
      homeButton.show({type: "fade"});
      var groupIndex = record.get("categoryId");

      //todo get current item und set current item.
      var carousel = Ext.getCmp("groupcarousel");
      carousel.setCurrentItemByIndex(index, groupIndex);
      main.setActiveItem(carouselContainer);
    }
  }


});