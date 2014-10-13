Ext.define("MingApp.view.CarouselContainer", {
    extend:'MingApp.ux.Container',
    requires:['MingApp.ux.GroupCarousel', 'MingApp.ux.CarouselItem'],
    xtype:'carouselcontainer',

    config:{
      layout:'fit',
      items:[
        {
          xtype:'groupcarousel',
          id: "groupcarousel",
          direction:"vertical",
          indicator:false,
          defaults:{
            styleHtmlContent:true
          },
          items:[
            {
              xtype:'carouselitem',
              id: "r1-cat1-dish1",
              cls: "r1-cat1-dish1",
              group:"R1_CAT1",
              dishinfo:{
                chiliCls: "",
                ingredientCls:"",
                facebook: 2,
                twitter: 2,
                dichInfo : ""
              }
            },
            {
              xtype:'carouselitem',
              cls: "r1-cat1-dish2",
              id: "r1-cat1-dish2",
              group:"R1_CAT1"
            },
            {
              xtype:'carouselitem',
              cls: "r1-cat2-dish1",
              group:"R1_CAT2"
            },
            {
              xtype:'carouselitem',
              cls: "r1-cat2-dish2",
              group:"R1_CAT2"
            },
            {
              html:'',
              cls: "r1-cat3-dish1",
              group:"R1_CAT3"
            },
            {
              html:'Item 211',
              style:'background-color: #759E60',
              group:"R1_CAT3"
            },
            {
              html:'Item 311',
              style:'background-color: #759E60',
              group:"R1_CAT3"
            },
            {
              html:'Item 411',
              style:'background-color: #759E60',
              group:"R1_CAT3"
            },


            {
              html:'Item 1111',
              style:'background-color: #759E60',
              group:"R1_CAT4"
            },
            {
              html:'Item 2111',
              style:'background-color: #759E60',
              group:"R1_CAT4"
            },
            {
              html:'Item 3111',
              style:'background-color: #759E60',
              group:"R1_CAT4"
            },


            {
              html:'Item 11111',
              style:'background-color: #759E60',
              group:"R1_CAT5"
            },
            {
              html:'Item 21111',
              style:'background-color: #759E60',
              group:"R1_CAT5"
            },
            {
              html:'Item 31111',
              style:'background-color: #759E60',
              group:"R1_CAT5"
            },
            {
              html:'Item 41111',
              style:'background-color: #759E60',
              group:"R1_CAT5"
            },


            {
              html:'Item 111111',
              style:'background-color: #759E60',
              group:"R1_CAT6"
            },
            {
              html:'Item 211111',
              style:'background-color: #759E60',
              group:"R1_CAT6"
            },
            {
              html:'Item 311111',
              style:'background-color: #759E60',
              group:"R1_CAT6"
            }
          ]
        }

      ]

    }
  }
);