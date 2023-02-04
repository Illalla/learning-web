let button = document.getElementById('prycizg');
let input = document.getElementById('usrenter');
let ul = document.querySelector('ul');
let liall = document.querySelectorAll('li')

function appendlist(){
	let li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.addEventListener('dblclick', function(){
		ul.removeChild(li)})
	input.value = '';
}

button.addEventListener('click', function(){
	if (input.value.length > 0){
	appendlist()
	}
})

input.addEventListener('keypress', function(event){
	if (event.which === 13 && input.value.length > 0){
	appendlist()
	}
})


liall.forEach(function(a){
	a.addEventListener('dblclick', function(){
		ul.removeChild(a)})
})
