


function fibonacci(){
	var x = 0;
	var valor = document.getElementById('n').value;
	var arreglo = [];
	valor = parseInt(valor);
    
	for (x; x<valor; x++){
		if(x==0){
			arreglo.push(0);
		}
		else if(x==1){
			arreglo.push(1);
		}
		else{
			arreglo.push(arreglo[x-1]+arreglo[x-2]);
		}
	}
	
	document.getElementById("resultado").innerHTML ="<h3>"+arreglo+"</h3>";
	document.getElementById("r").innerHTML ="<h3>"+arreglo[arreglo.length-1]+"</h3>";

}


