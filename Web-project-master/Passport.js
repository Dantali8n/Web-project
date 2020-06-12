function ajouter()
//adds the info from the form to the table 
{
	var t = document.forms.info; 
	var text = document.forms.info.elements;
	
	console.log("user_name: "+text[0].value);

		document.getElementById("_greeting").innerHTML = text[2].value;
		document.getElementById("_islandname").innerHTML = text[1].value;
		document.getElementById('_fruit').innerHTML =  text[5].value;
	    document.getElementById('_title').innerHTML =  text[3].value;
	    document.getElementById('_name').innerHTML =  text[0].value;
	    document.getElementById('_bday').innerHTML =  text[4].value;

}

var t = document.forms.info; 
function handleForm(event) 
//prevents the page from reloading so we can actually see the table
{
	event.preventDefault(); 
	console.log("shtap");
} 
t.addEventListener('submit', handleForm);

let button1 = document.getElementById('submit'); //associates ajouter() with the submit button
button1.addEventListener('click', ajouter);

