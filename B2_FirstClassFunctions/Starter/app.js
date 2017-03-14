// Your Javascript Code Goes Here
function greet(){
  console.log("hi");
}

function loggreet(fn){
  fn();
}
loggreet(greet);

var greetMe = () => console.log("I'm NTUE");
loggreet(greetMe);
