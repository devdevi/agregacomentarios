'use stric';
const button = document.getElementById('btn');
button.addEventListener('click', function(){

	let comment = document.getElementById('comment').value;
	document.getElementById('comment').value = '';


//AQui depositamos todos los comentarios
	const count = document.getElementById('cont');
	const parrafo = document.createElement('p');
	const newComent = document.createTextNode(comment);

	const checkbox = document.createElement('input');
	checkbox.setAttribute('name','group1');
	checkbox.setAttribute('type','radio');
	checkbox.setAttribute('id','test1');

	const label = document.createElement('label');
	label.setAttribute('for','test1');
	label.setAttribute('class','col s10');

	cont.appendChild(checkbox);

	label.appendChild(newComent);
	count.appendChild(label);
	count.appendChild(parrafo);

	const favorit = document.createElement('i');
	favorit.setAttribute('class','material-icons col s1');
	favoriteText = document.createTextNode('favorite');
	
	cont.appendChild(favorit);
	favorit.appendChild(favoriteText);
	label.setAttribute('class','col s8');

	const trash = document.createElement('i');
	trash.setAttribute('class','material-icons col s1');

	trashText = document.createTextNode('delete');
	cont.appendChild(trash);
	trash.appendChild(trashText);



	trash.addEventListener('click', function(){

	cont.removeChild(checkbox);
	count.removeChild(label);
	count.removeChild(parrafo);
	cont.removeChild(favorit);
	cont.removeChild(trash);

	});

	favorit.addEventListener('click', function(){

			favorit.setAttribute('class','redHeart material-icons col s1');

	});

});

//addEventListener(=>{


//})