// Your program must output a to-do list that looks like this:

// My Todo-list

// Overdue
// [ ] Submit assignment 2022-07-21


// Due Today
// [x] Pay rent
// [ ] Service vehicle


// Due Later
// [ ] File taxes 2022-07-23
// [ ] Pay electric bill 2022-07-23
// Here is the template you should use to write the program. You are expected to complete four functions namely overdue, dueToday, dueLater and toDisplayableList.

const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    dueyes=[]
    for(x in todos.all){
        if(todos.all[x].dueDate==yesterday){
                dueyes.push({d:yesterday,t:todos.all[x].title,c:todos.all[x].completed});
        }
    }
        // console.log(dueyes);
        // console.log(todos);
        // console.log(todos.all);
        return dueyes;
    }

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    // console.log("J=hellooooooo");
    duetoday=[]
    for(x in todos.all){
        if(todos.all[x].dueDate==today){
            duetoday.push({d:today,t:todos.all[x].title,c:todos.all[x].completed});
    }
    }
    // console.log(duetoday);
    // console.log(duetom);
    return duetoday;
  }

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    duetom=[]
    for(x in todos.all){
        if(todos.all[x].dueDate==tomorrow){
            duetom.push({d:tomorrow,t:todos.all[x].title,c:todos.all[x].completed});
        }
    }
    // console.log(duetom);
    return duetom;
  }

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    // return OUTPUT_STRING
    // console.log(list);
    // console.log("Helloooo");
    s=""
    n=list.length;
    // console.log(n);
    for(i in list){
        if(list[i].d==today ){
            if(list[i].c==true){
                if(i!=n-1){
                s+="[x] "+list[i].t+"\n";
                }
                else{
                    s+="[x] "+list[i].t;
                }
            }
            else{
                if(i!=n-1){
                s+="[ ] "+list[i].t+"\n";
                }
                else{
                    s+="[ ] "+list[i].t;
                }
            }
        }
        else{
            if(list[i].s==true){
                if(i!=n-1){
                    s+="[x] "+list[i].t+" "+list[i].d+"\n";
                }
                else{
                    s+="[x] "+list[i].t+" "+list[i].d;
                }
            }
            else{
                if(i!=n-1){
                    s+="[ ] "+list[i].t+" "+list[i].d+"\n";
                }
                else{
                    s+="[ ] "+list[i].t+" "+list[i].d;
                }
            }
            
        }
    }
    // console.log(s);
    return s;
  }

  return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
}

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
// console.log("\r")
