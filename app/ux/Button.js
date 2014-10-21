
Ext.define('MingApp.ux.Button', {
  extend: 'Ext.Component',
  xtype:'mbutton',
  config: {
    baseCls:'paper-button paper-floating-action-button'
  },

  initialize: function() {
    this.callParent();
    this.element.on({
      scope      : this,
      tap        : 'onTap',
      touchstart : 'onPress',
      touchend   : 'onRelease'
    });
  },

  // @private
  onTap: function(e) {
    if (this.getDisabled()) {
      return false;
    }

    this.fireAction('tap', [this, e], 'doTap');
  }
});