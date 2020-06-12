function ajouter()
//adds the info from the form to the table 
{
	var t = document.forms.info; 
	var text = document.forms.info.elements;
	
	console.log("user_name: "+text[0].value);

		document.getElementById("_greeting").innerHTML = text[2].value + "‎‎‎‏‏‎ ‎";
		document.getElementById("_islandname").innerHTML = text[1].value + "‎‎‎‏‏‎ ‎";
		document.getElementById('_fruit').innerHTML =  text[5].value + "‎‎‎‏‏‎ ‎";
	    document.getElementById('_title').innerHTML =  text[3].value + "‎‎‎‏‏‎ ‎";
	    document.getElementById('_name').innerHTML =  text[0].value + "‎‎‎‏‏‎ ‎";
	    document.getElementById('_bday').innerHTML =  text[4].value + "‎‎‎‏‏‎ ‎";
	    document.getElementById('_today').innerHTML =  new Date().toLocaleDateString();


}

var t = document.forms.info; 
function handleForm(event) 
//prevents the page from reloading so we can actually see the table
{
	event.preventDefault(); 
	console.log("shtap");
} 

window.addEventListener('load', function() {
  document.getElementById("profile").addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img =  document.getElementById("_profile");  
          img.src = URL.createObjectURL(this.files[0]); // set src to blob url
          img.onload = imageIsLoaded;
      }
  });
});

function imageIsLoaded() { 
  console.log(this.src);  // blob url
  // update width and height ...
}


t.addEventListener('submit', handleForm);

let button1 = document.getElementById('submit'); //associates ajouter() with the submit button
button1.addEventListener('click', ajouter);

