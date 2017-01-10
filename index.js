var seuil= prompt("Combien voulez vous avoir de cases?");
if (seuil<1000){
for (var i = 1; i <= seuil; i++) {
	document.getElementById('liste').innerHTML+='<li>'+i+'</li>';

 }}else{
	alert ('nombre trop élevé');	

}

