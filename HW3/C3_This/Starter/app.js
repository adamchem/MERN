'use strict';// Your Javascript Code Goes Here\
var flight = {
  number : 1123,
  plain : "B737",
  greet0 : function(){
    console.log("obj-method-this=");
    console.log(this);
  },
  greet1: (()=>{
    console.log("obj-arrow-this=");
    console.log(this)
  }),
  greet2: function() {
    (()=>{
      console.log("obj-method-arrow-this=");
      console.log(this)
    })();
  },
  greet3: function() {
    (function() {
      console.log("obj-method-fn-this=");
      console.log(this);
    })();
  },
  greet4: function() {
    (function() {
      (()=>{
        console.log("obj-method-fn-arrow-this=");
        console.log(this)
      })();
    })();
  }

  };
  flight.greet0();
  flight.greet1();
  flight.greet2();
  flight.greet3();
  flight.greet4();
