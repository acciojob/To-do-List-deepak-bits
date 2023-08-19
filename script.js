//your code here


const inp = document.getElementById("newTodoInput");
const ol = document.getElementById("todoList");
const btn = document.getElementById("addTodoBtn");


btn.addEventListener('click', function() {
	ol.style.backgroundColor = "blue";
	const val = inp.value;
	if(val == "") return;
	const li = document.createElement('li');
	li.innerText = inp.value;
	ol.appendChild(li);
});