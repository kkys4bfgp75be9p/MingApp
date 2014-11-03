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
      case "panorama":
        this.goBack2Restaurant();
        break;
      case "performance":
      case "menu":
      case "restaurant":
      case "newsletter":
        this.goBack2Category();
        break;
    }
  },

  goBack2Restaurant: function(){
    var main = Ext.getCmp('main'),
      restaurant = Ext.getCmp('restaurant');
    if (restaurant) {
      this.hideHomeButton();
      var mapButton = Ext.getCmp("360button");
      mapButton.show({type: "fade"});
      main.animateActiveItem(restaurant, {type:'fade'});
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
    var main = Ext.getCmp('main'),
      panorama = Ext.getCmp('panorama');
    if (panorama) {
      this.hide360Button();
      var homeButton = Ext.getCmp("homebutton");
      homeButton.show({type: "fade"});

      if(!panorama.element.dom.hasChildNodes()){
        initPanorama();
      }
      main.animateActiveItem(panorama, {type:'fade'});
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

  hide360Button : function(){
    var mapButton = Ext.getCmp("360button");
    mapButton.hide();
  },

  hideAllButtons: function(){
    this.hideBackButton();
    this.hideHomeButton();
    this.hide360Button();
  }

});