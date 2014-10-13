Ext.define("MingApp.ux.GroupCarousel", {
  extend:"Ext.Carousel",
  requires:["MingApp.ux.IndexBar"],
  xtype:"groupcarousel",

  config:{
    indexBar:true,
    listeners: {
      activate: function(carousel, newactive, oldactive){

      },
      activeitemchange: function(carousel, newvalue, oldvalue){
//        Ext.Function.defer(function(){
//          newvalue.fireEvent("showwidget");
//        }, 100, this);
      }
    }
  },

  constructor:function (config) {
    this.callParent(arguments);
    var groups = this.groups;
    var groupMap = this.groupMaps;
    var groupIndex = this.groupIndex = {};
    for (var i = 0, j = groups.length; i < j; i++) {
      var group = groups[i];
      if (i == 0) {
        groupIndex[group] = 0;
      } else {
        var lastGroup = groups[i - 1];
        groupIndex[group] = groupMap[lastGroup] + groupIndex[lastGroup];
      }
    }

  },

  applyIndexBar:function () {
    var groups = this.groups = ['R1_CAT1', 'R1_CAT2', 'R1_CAT3', 'R1_CAT4', 'R1_CAT5', 'R1_CAT6'];

    return Ext.factory({
      //TODO find better way to do it.
      groups:groups
    }, MingApp.ux.IndexBar, this.getIndexBar());
  },

  onItemAdd:function (item, index) {
    var indexBar = this.getIndexBar();
    if (!this.groupMaps) {
      this.groupMaps = {};
    }
    var group = item.group? item.group:item.config.group;
    var groupMap = this.groupMaps;
    var count = Ext.isNumber(groupMap[group]) ? groupMap[group] : 0;
    groupMap[group] = ++count;

    if (indexBar && !this.indexBarElement) {
      this.indexBarElement = this.element.appendChild(indexBar.renderElement);

      indexBar.on({
        index:'onIndex',
        scope:this
      });
    }

    this.callParent(arguments);

  },

  onIndex:function (indexBar, index) {
    var groupIndex = this.groupIndex?this.groupIndex:this.config.groupIndex;
    var itemIndex = groupIndex[index];
    this.setActiveItem(itemIndex);
    this.refreshActiveItem();
    indexBar.highlight(index);
  },

  //TODO  fix highlight
  setCurrentItemByIndex: function(index, groupIndex){
    //debugger
    //this.onIndex(this.getIndexBar(), index);

    this.setActiveItem(index);
    this.refreshActiveItem();
    this.getIndexBar().highlight(groupIndex);
  },


  onAnimationEnd:function (translatable) {
    var lastActiveItem = this.getActiveItem();

    this.callParent(arguments);

    var activeItem = this.getActiveItem();

    if (lastActiveItem && activeItem) {
      var lastGroup = lastActiveItem.group? lastActiveItem.group: lastActiveItem.config.group;
      var currentGroup = activeItem.group? activeItem.group:activeItem.config.group;
      if(lastGroup!=currentGroup){
        this.getIndexBar().highlight(currentGroup);
      }
    }
  },

  doSetActiveItem:function (activeItem) {
    this.callParent(arguments);
    var indexBar = this.getIndexBar();
    if (indexBar && !indexBar.isHighlighted()) {
      var group = activeItem.group ? activeItem.group: activeItem.config.group;
      if(group){
        indexBar.highlight(group);
      }
    }
  },

  onActivateItem: function(carousel, newactive, oldactive){
    console.log("activate");
  },

  onActiveItemChange: function(carousel, value, oldvalue){
    console.log("active item change");
  }

});