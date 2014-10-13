Ext.define("MingApp.view.MenuList", {
  extend:"Ext.List",
  xtype:"menulist",
  requires:['MingApp.i18n.Language', 'MingApp.util.XTemplate', 'MingApp.ux.IndexBar'],
  mixins:["MingApp.mixin.DataViewMixin"],

  constructor:function (config) {
    config.itemTpl = new MingApp.util.XTemplate({
      html:config.tpl,
      language:MingApp.i18n.Language[config.language]
    });
    this.callParent(arguments);

  },

  config:{
    grouped:true,
    indexBar:false,
    disableSelection:true,
    store:{
      sorters:"nameId",
      fields:[
        'nameId',
        'price',
        'categoryId',
        'iconId'
      ],
      data:[
        {nameId:'R1_CAT1_DISH1', price:"7.20", categoryId:'R1_CAT1', iconId: "r1-cat1-dish1"},
        {nameId:'R1_CAT1_DISH2', price:"7.90", categoryId:"R1_CAT1", iconId: "r1-cat1-dish2"},

        {nameId:"R1_CAT2_DISH1", price:"3.20", categoryId:"R1_CAT2", iconId: "r1-cat2-dish1"},
        {nameId:"R1_CAT2_DISH2", price:"3.20", categoryId:"R1_CAT2", iconId: "r1-cat2-dish2"},

        {nameId:"R1_CAT3_DISH1", price:"3.20", categoryId:"R1_CAT3", iconId: "r1-cat3-dish1"},
        {nameId:"R1_CAT3_DISH2", price:"3.20", categoryId:"R1_CAT3", iconId: "r1-cat3-dish2"},
        {nameId:"R1_CAT3_DISH3", price:"3.20", categoryId:"R1_CAT3", iconId: "r1-cat3-dish3"},
        {nameId:"R1_CAT3_DISH4", price:"3.20", categoryId:"R1_CAT3", iconId: "r1-cat3-dish4"},

        {nameId:"R1_CAT4_DISH1", price:"3.50", categoryId:"R1_CAT4", iconId: "r1-cat4-dish1"},
        {nameId:"R1_CAT4_DISH2", price:"6.30", categoryId:"R1_CAT4", iconId: "r1-cat4-dish2"},
        {nameId:"R1_CAT4_DISH3", price:"3.50", categoryId:"R1_CAT4", iconId: "r1-cat4-dish3"},

        {nameId:"R1_CAT5_DISH1", price:"6.20", categoryId:"R1_CAT5", iconId: "r1-cat5-dish1"},
        {nameId:"R1_CAT5_DISH2", price:"6.20", categoryId:"R1_CAT5", iconId: "r1-cat5-dish2"},
        {nameId:"R1_CAT5_DISH3", price:"6.50", categoryId:"R1_CAT5", iconId: "r1-cat5-dish3"},
        {nameId:"R1_CAT5_DISH4", price:"6.50", categoryId:"R1_CAT5", iconId: "r1-cat5-dish4"},

        {nameId:"R1_CAT6_DISH1", price:"7.50", categoryId:"R1_CAT6", iconId: "r1-cat6-dish1"},
        {nameId:"R1_CAT6_DISH2", price:"7.90", categoryId:"R1_CAT6", iconId: "r1-cat6-dish2"},
        {nameId:"R1_CAT6_DISH3", price:"7.90", categoryId:"R1_CAT6", iconId: "r1-cat6-dish3"}
      ],

      grouper:{
        groupFn:function (record) {
          var cat = record.get("categoryId");
          return record.get("categoryId");
        }
      }
    }
  },


  applyIndexBar:function () {

    return Ext.factory({
      //TODO find better way to do it.
      groups:['R1_CAT1', 'R1_CAT2', 'R1_CAT3', 'R1_CAT4', 'R1_CAT5', 'R1_CAT6']
    }, MingApp.ux.IndexBar, this.getIndexBar());
  },

  //fix bug if touch background of index bar.
  onIndex: function(indexBar, index) {
    if(!index){
      return
    }
    this.callParent(arguments);
  },


  handlePinnedHeader: function(y) {
    var me = this,
      pinnedHeader = me.pinnedHeader,
      itemMap = me.getItemMap(),
      groups = me.groups,
      headerMap = me.headerMap,
      headerHeight = me.headerHeight,
      store = me.getStore(),
      totalScrollDockTopHeight = me.totalScrollDockTopHeight,
      record, closestHeader, pushedHeader, transY, headerString;

    closestHeader = itemMap.binarySearch(headerMap, -y);
    record = groups[closestHeader].children[0];

    if (record) {
      pushedHeader = y + headerMap[closestHeader + 1] - headerHeight;
      // Top of the list or above (hide the floating header offscreen)
      if (y >= 0 || (closestHeader === 0 && totalScrollDockTopHeight + y >= 0) || (closestHeader === 0 && -y <= headerMap[closestHeader])) {
        transY = -10000;
      }
      // Scroll the floating header a bit
      else if (pushedHeader < 0) {
        transY = pushedHeader;
      }
      // Stick to the top of the screen
      else {
        transY = Math.max(0, y);
      }
      var headerStringId = store.getGroupString(record);
      var headerString = this.getLanguageText(store, record);

      if (pinnedHeader.$currentHeader != headerString) {
        pinnedHeader.setHtml(headerString);

        var clss = pinnedHeader.getCls();
        for(var i= 0, j = clss.length; i<j; i++){
          if(clss[i].match(/menu-header-/)){
            pinnedHeader.removeCls(clss[i]);
          }
        }
        pinnedHeader.addCls("menu-header-"+headerStringId.toLowerCase());
        pinnedHeader.addCls("menu-header");

        pinnedHeader.$currentHeader = headerString;

        //highlight index bar
        var indexbar = this.getIndexBar();
        indexbar.highlight(headerStringId);
      }

      if (pinnedHeader.$position != transY) {
        pinnedHeader.translate(0, transY);
        pinnedHeader.$position = transY;
      }
    }
  },


  updateListItem: function(item, index, info) {
    var me = this,
      record = info.store.getAt(index),
      headerIndices = me.headerIndices,
      footerIndices = me.footerIndices,
      useHeaders = me.getUseHeaders(),
      header = useHeaders && item.getHeader(),
      scrollDockItems = me.scrollDockItems,
      updatedItems = me.updatedItems,
      currentItemCls = item.renderElement.classList.slice(),
      currentHeaderCls = useHeaders && header.renderElement.classList.slice(),
      infinite = me.getInfinite(),
      storeCount = info.store.getCount(),
      itemCls = [],
      headerCls = [],
      itemRemoveCls = [info.headerCls, info.footerCls, info.firstCls, info.lastCls, info.selectedCls, info.stripeCls],
      headerRemoveCls = [info.headerCls, info.footerCls, info.firstCls, info.lastCls],
      ln, i, scrollDockItem, classCache;

    // When we update a list item, the header and scrolldocks can make it have to be retransformed.
    // For that reason we want to always set the position to -10000 so that the next time we translate
    // all the pieces are transformed to the correct location
    if (infinite) {
      item.$position = -10000;
    }

    // We begin by hiding/showing the item and its header depending on a record existing at this index
    if (!record) {
      item.setRecord(null);
      if (infinite) {
        item.translate(0, -10000);
      } else {
        item.hide();
      }

      if (useHeaders) {
        if (infinite) {
          header.translate(0, -10000);
        } else {
          header.hide();
        }
      }
      item.$hidden = true;
      return;
    } else if (item.$hidden) {
      if (!infinite) {
        item.show();
      }
      item.$hidden = false;
    }

    if (infinite) {
      updatedItems.push(item);
    }

    // If this item was previously used for the first record in the store, and now it will not be, then we hide
    // any scrollDockTop items and change the isFirst flag
    if (item.isFirst && index !== 0 && scrollDockItems.top.length) {
      for (i = 0, ln = scrollDockItems.top.length; i < ln; i++) {
        scrollDockItem = scrollDockItems.top[i];
        if (infinite) {
          scrollDockItem.translate(0, -10000);
        }
      }
      item.isFirst = false;
    }

    // If this item was previously used for the last record in the store, and now it will not be, then we hide
    // any scrollDockBottom items and change the istLast flag
    if (item.isLast && index !== storeCount - 1 && scrollDockItems.bottom.length) {
      for (i = 0, ln = scrollDockItems.bottom.length; i < ln; i++) {
        scrollDockItem = scrollDockItems.bottom[i];
        if (infinite) {
          scrollDockItem.translate(0, -10000);
        }
      }
      item.isLast = false;
    }

    // If the item is already bound to this record then we shouldn't have to do anything
    if (item.$dataIndex !== index) {
      item.$dataIndex = index;
      me.fireEvent('itemindexchange', me, record, index, item);
    }

    // This is where we actually update the item with the record
    if (item.getRecord() === record) {
      item.updateRecord(record);
    } else {
      item.setRecord(record);
    }

    if (me.isSelected(record)) {
      itemCls.push(info.selectedCls);
    }

    if (info.grouped && useHeaders) {
      if (headerIndices[index]) {
        itemCls.push(info.headerCls);
        headerCls.push(info.headerCls);

        var headerStringId = info.store.getGroupString(record);
        headerCls.push("menu-header-"+headerStringId.toLowerCase());
        headerCls.push("menu-header");

        var headerString = this.getLanguageText(info.store, record);
        header.setHtml(headerString);

        if (!infinite) {
          header.renderElement.insertBefore(item.renderElement);
        }
        header.show();
      } else {
        if (infinite) {
          header.translate(0, -10000);
        } else {
          header.hide();
        }
      }
      if (footerIndices[index]) {
        itemCls.push(info.footerCls);
        headerCls.push(info.footerCls);
      }
    }

    if (!info.grouped && useHeaders) {
      header.hide();
    }

    if (index === 0) {
      item.isFirst = true;
      itemCls.push(info.firstCls);
      headerCls.push(info.firstCls);

      if (!info.grouped) {
        itemCls.push(info.headerCls);
        headerCls.push(info.headerCls);
      }

      if (!infinite) {
        for (i = 0, ln = scrollDockItems.top.length; i < ln; i++) {
          scrollDockItem = scrollDockItems.top[i];
          if (info.grouped) {
            scrollDockItem.renderElement.insertBefore(header.renderElement);
          } else {
            scrollDockItem.renderElement.insertBefore(item.renderElement);
          }
        }
      }
    }

    if (index === storeCount - 1) {
      item.isLast = true;
      itemCls.push(info.lastCls);
      headerCls.push(info.lastCls);

      if (!info.grouped) {
        itemCls.push(info.footerCls);
        headerCls.push(info.footerCls);
      }

      if (!infinite) {
        for (i = 0, ln = scrollDockItems.bottom.length; i < ln; i++) {
          scrollDockItem = scrollDockItems.bottom[i];
          scrollDockItem.renderElement.insertAfter(item.renderElement);
        }
      }
    }

    if (info.striped && index % 2 == 1) {
      itemCls.push(info.stripeCls);
    }

    if (currentItemCls) {
      for (i = 0; i < itemRemoveCls.length; i++) {
        Ext.Array.remove(currentItemCls, itemRemoveCls[i]);
      }
      itemCls = Ext.Array.merge(itemCls, currentItemCls);
    }

    if (useHeaders && currentHeaderCls) {
      for (i = 0; i < headerRemoveCls.length; i++) {
        Ext.Array.remove(currentHeaderCls, headerRemoveCls[i]);
      }
      headerCls = Ext.Array.merge(headerCls, currentHeaderCls);
    }

    classCache = itemCls.join(' ');

    if (item.classCache !== classCache) {
      item.renderElement.setCls(itemCls);
      item.classCache = classCache;
    }

    if (useHeaders) {
      header.renderElement.setCls(headerCls);
    }
  },

  getLanguageText: function(store, record){
    var headerStringId = store.getGroupString(record);
    var currentLanguage = this.language ? this.language : this.config.language;
    return MingApp.i18n.Language[currentLanguage][headerStringId];
  }

});
