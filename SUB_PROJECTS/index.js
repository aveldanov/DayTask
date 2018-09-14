var newTodos = [{
  title: "u1_task1",
  user: "user1"},
{ 
  title: "u2_task1",
  user: "user2"},
{ 
  title: "u1_task2",
  user: "user1"}] 

/* console.log(newTodos[0]["user"]);


if(newTodos[0]["user"]==="user1"){
  return console.log(newTodos[0]["title"])
}else{
  console.log('failed');
} */
//console.log(newTodos[0]["title"])
function checkCheck(array){
  //console.log(array[1]["user"])
  const finalArray = [];
  for (var i=0; i<array.length; i++){
    if (array[i]["user"] === "user1"){
        finalArray[i] = {
          title: newTodos[i]["title"]
        };

    }else{
      finalArray[i] = null;
    }
  }
  console.log(finalArray);
}

checkCheck(newTodos);



//console.log(newTodos[0]["title"]);


/* function findByParam(array, param){
  for (var i=0; i<array.lenght; i++){
    if (array[i])[us]
  }
}



let printMe = findTodo(newTodos,"u1_task2"); */

//console.log(printMe);





/* function findObjByVal(array, key, value){
  for (var i=0; i<array.lenght; i++){
    if(array[i][key]=== value){
      return array[i];
    }
  }
  return null;

}

var obj = findObjByVal(newTodos, "user", "user1");

console.log(obj); */

/*   var val = newTodos.find(function(item){
    return item.user === "user1"
  });

  console.log(val) */