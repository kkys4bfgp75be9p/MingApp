Ext.define("MingApp.controller.Category", {
  extend:"Ext.app.Controller",
  config:{
    control:{
      'catdataview':{
        itemtap:'onItemTap'
      },

      '#languageselectbox':{
        change: 'changeLanguage'
      }
    },

    refs:{
      catdataview:"catdataview"
    }
  },

  createMapItem4Container: function(){
    var  mapcontainer = Ext.getCmp("mapcontainer");
    var item = navigator.onLine ? {
      xtype:'map',
      id:"map",
      fullscreen:false,
      margin: '10 10 50 10',
      mapOptions:{
        zoomControl: false,
        zoom: 18,
        streetViewControl: false,
        panControl: false,
        mapTypeControl: false,
        draggable: false,
        center : new google.maps.LatLng(50.108139,8.667397)
      }
    }: {
      //todo offline map, offline map must be load to app cache
      xtype: "component",
      id: "map",
      fullscreen:false,
      margin: '10 10 50 10',
      html: "hello world!"
    };
    var items = [
      item,
      {
        xtype: "component",
        id: "panorama",
        fullscreen:false,
        margin: '10 10 50 10'
      }
    ];
    mapcontainer.setItems(items);
  },

  onItemTap:function (view, index, target, record, e) {
    var target = e.target;
    if(Ext.get(target).hasCls('card-content-right')){
      var recordValue = record.get("id");
      var main = Ext.getCmp('main');

      if (recordValue == "menu") {

        var  menu = Ext.getCmp('menu');
        if (menu) {
          this.showBackButton();
          main.setActiveItem(menu);
        }

      } else if(recordValue == 'restaurant'){
        var restaurantContainer = Ext.getCmp('restaurant');
        if(restaurantContainer){
          this.showBackButton();
          this.show360Button();
          main.setActiveItem(restaurantContainer);
        }
      } else if (recordValue == "newsletter"){
        var newsContainer = Ext.getCmp('newsletter');
        if(newsContainer){
          this.showBackButton();
          main.setActiveItem(newsContainer);
        }

      }else if (recordValue == "performance"){
        var  performance = Ext.getCmp("performance");
        if(performance){
          var performanceTest = new MingApp.util.Performance();
          performance.setHtml(performanceTest.logPerformance());
          this.showBackButton();
          main.setActiveItem(performance);
        }
      }
    }
  },

  changeLanguage: function(select, value){
    var main = Ext.getCmp('main');
    if(main.language != value){
      main.language = value;
      main.resetLanguage(value);
    }
  },

  showBackButton : function(){
    var backButton = Ext.getCmp("backbutton");
    if(backButton.isHidden()){
      backButton.show({type:"fade"});
    }
  },

  show360Button : function(){
    var button360 = Ext.getCmp("360button");
    if(button360.isHidden()){
      button360.show({type:"fade"});
    }
  }

});
