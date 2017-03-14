var add = (() => {
  var count = 0;
  return ()=>{
    count ++;
    console.log(count);
  }
})();

add();
add();
add();
