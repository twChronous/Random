function joguinho() {
	console.log("Iniciando revoluçâo comunista...");

	let verdadeirooufalse = [true, false];
	let conquistas = ["0", "1", "2", "3"];

	let ConverterComunas = Math.floor(Math.random() * conquistas.length);
	let COMUNISMO = Math.floor(Math.random() * verdadeirooufalse.length);
	let CAPITALISMO = Math.floor(Math.random() * verdadeirooufalse.length);
	let ConverterCapitalistas = Math.floor(Math.random() * conquistas.length);

	if (!ConverterCapitalistas || !ConverterComunas) return;
	
	if (ConverterCapitalistas.length > ConverterComunas.length)
	  return ConverterCapitalistas == true;
	if (ConverterComunas.length > ConverterCapitalistas.length)
	  return ConverterComunas == true;

	if (CAPITALISMO && ConverterCapitalistas) 
		document.getElementById("titulo").innerHTML = "Vitoria Comunista";
	else if (COMUNISMO && ConverterComunas) 
		document.getElementById("titulo").innerHTML = "Vitoria Captalista";
	else
		document.getElementById("titulo").innerHTML = "Guerras interminaveis";
}
joguinho();