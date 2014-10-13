Ext.define("MingApp.view.Reserve", {
  extend:"Ext.form.Panel",
  requires:["Ext.form.FieldSet", "Ext.field.DatePicker", "Ext.field.Number"],
  xtype:"reserveform",

  config:{
    items:{
      xtype:'fieldset',
      title:'Kontakt Daten',
      instructions:'Tell us all about yourself',
      items:[
        {
          xtype:'textfield',
          name:'sex',
          label:'Anrede',
          labelWidth:140
        },
        {
          xtype:'textfield',
          name:'firstname',
          label:'Vorname',
          labelWidth:140
        },
        {
          xtype:'textfield',
          name:'lastname',
          label:'Nachname',
          required:true,
          labelWidth:140
        },
        {
          xtype:'datepickerfield',
          name:"date",
          destroyPickerOnHide:true,
          label:"Datum",
          value:new Date(),
          required:true,
          picker:{
            yearForm:1990
          },
          labelWidth:140
        },
        {
          xtype:'numberfield',
          label:'Uhrzeit',
          required:true,
          minValue:11,
          maxValue:22,
          name:'hour',
          labelWidth:140
        },
        {
          xtype:'numberfield',
          label:'Telefon',
          name:'telephone',
          required:true,
          labelWidth:140
        },
        {
          xtype:"numberfield",
          label:"Anzahl",
          labelWidth:140,
          name: ""
        },
        {
          xtype:"textareafield",
          label:"SonderWunsch",
          labelWidth:140,
          maxRows:4,
          name:"wish"
        }

      ]
    }


  }
});