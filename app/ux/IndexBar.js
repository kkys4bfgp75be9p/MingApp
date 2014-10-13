Ext.define("MingApp.ux.IndexBar", {
  extend:"Ext.dataview.IndexBar",
  config:{
    currentIndex:null
  },

  constructor:function (config) {

    //this.config.letters = config.groups;
    config.letters= config.groups;
    this.callParent(arguments);
  },

  updateLetters:function (letters) {
    this.innerElement.setHtml('');

    if (letters) {
      var ln = letters.length,
        i;

      for (i = 0; i < ln; i++) {
        var keyLowerCase = letters[i].replace("_", "-").toLowerCase();
        var imgResource = './resources/category/' + keyLowerCase + '.png';
        var imgHtml = '<img value="' + letters[i] + '" height="32px" width="32px" src="' + imgResource + '" >';
        this.innerElement.createChild({
          html:imgHtml,
          value: letters[i],
          cls:"indexbar-" + keyLowerCase
        });
      }
    }
  },

  getCurrentIndex:function () {
    return this.currentIndex;
  },

  // @private
  onDrag: function(e) {
    var point = Ext.util.Point.fromEvent(e),
      target, isValidTarget,
      pageBox = this.pageBox;

    if (!pageBox) {
      pageBox = this.pageBox = this.el.getPageBox();
    }


    if (this.getDirection() === 'vertical') {
      if (point.y > pageBox.bottom || point.y < pageBox.top) {
        return;
      }
      target = Ext.Element.fromPoint(pageBox.left + (pageBox.width / 2), point.y);
      isValidTarget = target.getParent() == this.element || target.getParent().getParent() == this.element;

      // Blackberry Specific code for Index Bar Indicator
      if(this.indicator) {
        this.indicator.show();

        var halfIndicatorHeight = this.indicator.getHeight() / 2,
          y = point.y - this.element.getY();

        y = Math.min(Math.max(y, halfIndicatorHeight), this.element.getHeight() - halfIndicatorHeight);

        if (this.indicatorInner && isValidTarget) {
          this.indicatorInner.setHtml(target.getHtml().toUpperCase());
        }
        this.indicator.setTop(y - (halfIndicatorHeight));
      }
    }
    else {
      if (point.x > pageBox.right || point.x < pageBox.left) {
        return;
      }
      target = Ext.Element.fromPoint(point.x, pageBox.top + (pageBox.height / 2));
      isValidTarget = target.getParent() == this.element;
    }

    if (target && isValidTarget) {
      this.fireEvent('index', this, target.dom.getAttribute("value"), target);
    }
  },


  highlight:function (id) {
    var highlighted = this.innerElement.first('div.highlight');
    if (highlighted) {
      highlighted.removeCls('highlight');
    }

    var toHighlight = this.innerElement.first("div." + "indexbar-" + id.replace("_", "-").toLowerCase());
    if (toHighlight) {
      toHighlight.addCls("highlight");
      this.currentIndex = id;
    }
  },

  isHighlighted:function () {
    var highlighted = this.innerElement.first('div.highlight');
    if (highlighted) {
      return true;
    } else {
      return false;
    }
  }
});