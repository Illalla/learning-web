var button = document.getElementById('prycizg');
var input = document.getElementById('usrenter');
var ul = document.querySelector('ul');
var liall = document.querySelectorAll('li')

function appendlist(){
	var li = document.createElement('li');
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
