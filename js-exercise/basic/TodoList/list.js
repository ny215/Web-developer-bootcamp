var todos = ["Buy New bread"];

window.setTimeout(function() {
  // put all of your JS code from the lecture here
	var input = prompt("What would you like to do?");
	while(input !== "quit"){

  	//handle input
		if(input ==="list"){
			listTodos();

		}	
		else if(input ==="new"){
			addTodos();
		}
		else if(input === "delete"){
			deleteTodos();
		}
		//ask again for new input
		input = prompt("What would you like to do?");
		

	}
	console.log("OK, YOU QUIT THE APP")


}, 500);

function listTodos(){
	console.log("**********");
	todos.forEach(function(todo, i){
		console.log(i+ ": " + todo);
	});			
	console.log("**********");		
}

function addTodos() {
	//ask for new todo
	var newTodo = prompt("Enter new todo");
	//add to array
	todos.push(newTodo);
	console.log("Added Todo");
}

function deleteTodos(){
	//ask for index of todo to be deleted
	var index = prompt("Enter index of todo to delete");
	//delete that todo
	//splice()
	todos.splice(index, 1);
	console.log("Deleted Todo");		
}