Ext.define("MingApp.controller.Main", {
  extend:"Ext.app.Controller",
  config:{
    control:{
      backbutton:{
        tap:'goBack'
      },

      homebutton:{
        tap:'goHome'
      },
      mapbutton: {
        tap: 'changeView'
      }
    },
    refs:{
      backbutton:'#backbutton',
      homebutton:'#homebutton',
      mapbutton: '#360button'
    }
  },

  setMenuIndex:function () {
    var carousel = Ext.getCmp('groupcarousel');
    var currentIndex = carousel.getIndexBar().getCurrentIndex();
    var menuList = Ext.getCmp("menulist");
    var indexbar = menuList.getIndexBar();
    if(indexbar != null){
      indexbar.fireEvent('index', indexbar, currentIndex, indexbar);
    }

  },

  goHome:function () {
    var main = Ext.getCmp('main'),
      category = Ext.getCmp('category');
    if (category) {
      this.hideAllButtons();
      this.setMenuIndex();
      main.animateActiveItem(category, {type:'fade'});
    }
  },


  goBack:function () {
    var main = Ext.getCmp('main'),
      activeItem = main.getActiveItem(),
      id;

    if (activeItem) {
      id = activeItem.getId();
    };

    switch (id) {
      case "carouselcontainer":
        this.setMenuIndex();
        this.goBack2MenuList();
        break;
      case "performance":
      case "menu":
      case "restaurant":
      case "newsletter":
        this.goBack2Category();
        break;
    }
  },


  goBack2Category:function () {
    var main = Ext.getCmp('main'),
      category = Ext.getCmp('category');

    if (category) {
      this.hideAllButtons();
      main.animateActiveItem(category, {type:'fade'});
    }
  },

  goBack2MenuList:function () {
    var main = Ext.getCmp('main'),
      menu = Ext.getCmp('menu');

    if (menu) {
      this.hideHomeButton()
      this.setMenuIndex();
      main.animateActiveItem(menu, {type:'fade'});
    }
  },

  changeView: function(){
    var mapContainer = Ext.getCmp("mapcontainer");
    var currentId = mapContainer.getActiveItem().getId();
    if(currentId ==="map"){
      var panorama = Ext.getCmp("panorama");
      if (panorama) {
        if(panorama.element.dom.children.length == 0){
          embedpano({swf:"mobile.swf", xml:"mobile.xml", target:"panorama", html5:"always", passQueryParameters:false});
        }
        mapContainer.setActiveItem(panorama);
      }
    } else if (currentId ==="panorama"){
      var map = Ext.getCmp("map");
      if(map){
        mapContainer.animateActiveItem(map, {type:"slide",direction:"right"});
      }
    }
  },

  hideBackButton: function(){
    var backButton = Ext.getCmp("backbutton");
    backButton.hide();
  },

  hideHomeButton : function(){
    var homeButton = Ext.getCmp("homebutton");
    homeButton.hide();
  },

  hideAllButtons: function(){
    this.hideBackButton();
    this.hideHomeButton();
  }

});