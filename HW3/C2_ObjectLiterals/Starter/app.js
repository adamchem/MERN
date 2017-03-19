// Your Javascript Code Goes Here
var flight = {
  number : 1123,
  plain : "B737",
  departure : {
    name : "taipei",
    time : "10:10am"
  },
  flightData : function(){
    console.log(`This flight number is ${this.number}, and you'll take the ${this.plain} there`);
  }
};
flight.flightData();

console.log(`Info: airport name is ${flight.departure['name']}. ${flight.departure['time']} take off`);
