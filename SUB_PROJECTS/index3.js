var newTodos = [{
  title: "u1_task1",
  user: "user1"
},
{
  title: "u2_task1",
  user: "user2"
},
{
  title: "u1_task2",
  user: "user1"
}]







for (var key in newTodos) {
  if (!newTodos.hasOwnProperty(key))
    continue;
  var obj = newTodos[key];
  var userName = String;
  var finalArray = [];
  var title=[]
  for (var prop in obj) {
     console.log(obj.user);
     if (obj.user === "user1") {
     // console.log(obj)
      title.push(obj.title);
      console.log(title);
       //console.log(["user:"+obj.user,"title:"+obj.title]);
     }else{
      title.push(obj.title);

     }

/*     if (obj.user === "user1") {
      //console.log(obj[prop]);
      finalArray = {
        user: obj.user,
        title: obj.title

      }
    } */


    // console.log(obj[prop]);
   // console.log(finalArray);
  }     
  

}
return console.log(title);






/* console.log(newTodos[0]["user"]);

function checkCheck(array) {
  const finalArray = [];

  for (var j = 0; j < array.length; j++) {
    


    for (var i = 0; i < array.length; i++) {
      if (array[i]["user"] === "user1") {
        finalArray[i] = {
          title: newTodos[i]["title"]
        };

      } else {
        finalArray[i] = null;
      }
    }
  }
  //console.log(finalArray);
}
 */




//checkCheck(newTodos);





