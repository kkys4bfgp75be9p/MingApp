/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/
Ext.Loader.setPath({
  'Ext': 'touch/src',
  'MingApp': 'app'
});


Ext.application({
    name: 'MingApp',

    requires: [
        'Ext.MessageBox'
    ],

    views: ['Main', 'Category', 'Restaurant','Menu', 'CarouselContainer', 'MapContainer', 'Panorama'],
    controllers: ['Main','Category', 'Menu'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    defaultLanguage: 'german',

    launch: function() {
      var isOnline = navigator.onLine;

      if(isOnline){
        //this.loadGoogleJs();
        //this.loadFacebookJs();
      }

      //TODO find and test it with better way.
      if(window.navigator.standalone === false && Ext.os.is('iPhone')){ //

        //Ext.Viewport.setAutoMaximize(true);
      }

      // Destroy the #appLoadingIndicator element
      Ext.fly('appLoadingIndicator').destroy();

      // Initialize the main view
      Ext.Viewport.add(Ext.create('MingApp.view.Main', {
        id:'main',
        language: this.defaultLanguage
      }));
    },

    loadGoogleJs: function(){

    },

    loadFacebookJs: function(){
      window.fbAsyncInit = function () {
        FB.init({appId:'409233702490840', status:true, cookie:true, xfbml:true});
      };
      (function () {
        var e = document.createElement('script');
        e.async = true;
        e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
        document.getElementById('fb-root').appendChild(e);
      }());
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
