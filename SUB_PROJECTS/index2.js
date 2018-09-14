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


console.log(newTodos[0]["user"]);

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





checkCheck(newTodos);
 




