var firstname = 'Simon';
var addSurname = () => {
	var surname = 'Holmes';
	var fullname = firstname + ' ' + surname;
	var firstname = 'David';
	console.log(fullname);
}
addSurname();


var myVar=1;
function a(){
  var myVar=10;
  b();
  console.log(myVar);
}
function b(){
  console.log(myVar);
}
a();
console.log(myVar);
