Ext.define("MingApp.ux.CarouselItem", {
  extend:"Ext.Container",
  xtype:"carouselitem",

  config:{

    listeners:{
      showwidget:function () {
        this.showWidget();
      }

    }
  },

  constructor:function (config) {
    Ext.Viewport.on('orientationchange', 'handleOrientationChange', this, {buffer: 50 });

    this.callParent(arguments);
    this.innerElement.on({
      tap:function () {
        var item = this.getAt(0);
        if (!item) {
          Ext.Function.defer(function () {
            this.showWidget();
          }, 100, this);

        } else if (item.isHidden()) {
          Ext.Function.defer(function () {
            item.show();
          }, 100);

        } else if (!item.isHidden()) {
          Ext.Function.defer(function () {
            item.hide();
          }, 100);

        }
      },
      trag:function () {
        var item = this.getAt(0);
        if (item) {
          Ext.Function.defer(function () {
            item.hide();
          }, 100);
        }
      },

      scope:this
    });
  },


  showWidget:function () {
    var infoElement = this.getAt(0);
    if (!infoElement) {
      var items = [
        {
          xtype:"component",
          html:'hallo, world!',
          cls:"carousel-item-info",
          left:10,
          top:50,
          right:50,
          bottom:50
        }
      ];

//      if (navigator.onLine) {
//        items.push({
//          xtype:"component",
//          html:'<fb:like href="http://www.alaafu.com/livemenu/" send="false" layout="button_count" show_faces="false"></fb:like>',
//          cls:"",
//          left:10,
//          bottom:5
//        });
//      }
      var lastItem = this.add(items);

//      if (navigator.onLine) {
//        var facebookDom = Ext.getDom(lastItem.element);
//        FB.XFBML.parse(facebookDom);
//      }

      infoElement = this.getAt(0);
      if (infoElement) {
        infoElement.innerElement.on({
          tap:function () {
            infoElement.hide();
          }
        });
      }

    } else if (item.isHidden()) {
      Ext.Function.defer(function () {
        item.show();
      }, 100);
    }
  },

  handleOrientationChange: function(com, newOrientation){
    console.log(this);
    console.log(newOrientation);


  }
});