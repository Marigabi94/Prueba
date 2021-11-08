
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
 
   
    
    document.getElementById("r2").innerHTML ="<div>"+arreglo[arreglo.length-1]+"</div>";

	document.getElementById('linea').style.display = 'flex';
	document.getElementById('t2').style.display = 'flex';
	document.getElementById('r').style.display = 'flex';
	document.getElementById('r2').style.display = 'flex';






}

