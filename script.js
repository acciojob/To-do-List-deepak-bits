//your code here


const inp = document.getElementById("newTodoInput");
const ol = document.getElementById("todoList");
const btn = document.getElementById("addTodoBtn");

btn.addEventListener('click', function() {
	const val = inp.value;
	if(val == "") return;
	const l1 = document.createElement('li');
	l1.innerText = inp.value;
	ol.append(li);
})