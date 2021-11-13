// AULA 1

//var nome = "João Guilherme Pontes";
//var idade = 21;
//var idade2 = 10;

//var frase = "Caruaru melhor lugar do mundo";

//alert(nome +" tem "+ idade+ " anos");

//console.log(nome);
//console.log(idade);
//console.log(frase.replace("Caruaru", "Recife"));
//console.log(frase.toUpperCase());

//AULA 2

//var lista = ["maça", "pera", "uva"];]

//lista.push("laranja");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "))

//var fruta = {nome: "maça", cor:"vermelha"}
//console.log(fruta);
//var frutas = [{nome: "maça", cor:"vermelha"}, {nome: "uva", cor:"roxa"}]
//console.log(frutas[1]);

//AULA 3

/*var idade = prompt("Qual sua idade?")
if (idade>= 18){
   alert("maior de idade");
}else{
    alert("menor de idade")
};*/

/*var count = 0;
while(count < 5){
    console.log(count);
    count++;
}*/

/*var count;

for(count=2; count<=5; count++){
    alert(count);
}*/

/*var d = new Date();
alert(d.getHours() +":"+d.getMinutes());
*/

//AULA 4

/*function soma(n1,n2){
    return n1+n2;
}
alert(soma(5,10));
*/

/*var validar;
function validaIdade(idade){
    if (idade >=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
validaIdade(idade);
console.log(validar);
*/

function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"))
    //    alert("Obrigado por clicar");
}

function redirecionar(){
    //window.open("https://google.com/");
    window.location.href = "https://google.com/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}