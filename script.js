var tamanho = 5;

function mapeia(){	
	
	//Duas variáveis pegando o tamanho do body da página, na horizontal e vertical respectivamente.
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	
	//Dua variáveis armazenando a posição do curso do mouse na horizontal e vertical respectivamente.
	var x = event.clientX;
	var y = event.clientY;
	
	//Aqui definimos a posição da bolinha vermelha dentro do minimapa. Usamos o setAttribute para modificar algum atributo; no caso a posição horizontal e vertical respectivamente.
	document.getElementById("cursor").setAttribute("cx", x/tamanho);
	document.getElementById("cursor").setAttribute("cy", y/tamanho);
	
	//Aqui temos algo parecido com código da bolinha vermelha, só que estamos setando o tamanho do minimapa.
	document.getElementById("mapa").setAttribute("width", windowWidth/tamanho);
	document.getElementById("mapa").setAttribute("height", windowHeight/tamanho);
	
	//A lógica por trás do minimapa e dividir o tamanho em PX da janela normal pelo tanto que queremos diminuir. No caso utilizei 1/5.
	
	
	//Aqui finalizamos a função inserindo os dados nas respectivas Tags.
	document.getElementById("textoW").innerHTML = "W: " + windowWidth;
	document.getElementById("textoH").innerHTML = "H: " + windowHeight;
	document.getElementById("textoX").innerHTML = "X: " + x;
	document.getElementById("textoY").innerHTML = "Y: " + y;
	
	
	
	
}

function troca(){
	document.getElementById("cursor").setAttribute("fill", "yellow");
	//setTimeout(function(){document.getElementById("cursor").setAttribute("fill", "red");}, 90);
}

function retroca(){
	document.getElementById("cursor").setAttribute("fill", "red");
}