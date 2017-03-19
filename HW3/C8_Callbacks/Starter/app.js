function greet(callback){
  console.log("Hello");
  var data={
    number: 1231,
    plain: "A320"
  };
  callback(data);
}

greet((data)=>{
  console.log("callback invvoked");
  console.log(data);
});

greet((data)=>{
  console.log("callback invvoked");
  console.log(data.plain);
});
