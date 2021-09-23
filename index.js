//chama função definirLargura
definirLargura();

//Atribui à variável largura o valor "100"
var largura = 100;

//Declara a função definirLargura
function definirLargura() {//início da cerca
  //HOISTING
  var largura = 100;
  console.log(largura);
}

definirLargura();

console.log(largura);


function soma(num1, num2) {
  return num1 + num2;
}

soma(2, 3);



var altura = 100;

if (altura > 90) {
  var altura = 40;
  console.log(altura);
}

console.log(altura);




var idade = 31;

if (idade > 12) {
  let idadeEmAnosDeCachorro = idade * 7;
  console.log("Você tem " + idadeEmAnosDeCachorro + " anos em idade de cachorro!");
}

console.log(idadeEmAnosDeCachorro);

var largura = 100;
console.log(largura);

var largura = 200;
console.log(largura);


let pontos = 50;
let vencedor = false;

if (pontos > 40) {
  let vencedor = true;
}

console.log("vencedor", vencedor);






let pontos = 50;
let vencedor = false;

function teste() {
  let vencedor = "Shuh";
  console.log(vencedor);
  if (pontos > 40) {
    console.log("Passei aqui");
    let vencedor = true;
  }
}
teste();
console.log("vencedor", vencedor);


//Não lança exceção:
console.log(pizza);
var pizza = 'Hmmm... 🍕🍕🍕';

//Lança exceção:
console.log(picanha);
const picanha = 'So tasty... 🐂';


/*
- Gislane
- Carlos Gravi
- Camilla
- Daiana
- Yuri
- Luís Henz - Só CSS
- Gesiel
- Kalyana




A apoptose de adipócitos não é verificada em seres
humanos em condições normais de funcionamento metabólico.

apoptose - morte celular
adipócitos - células que armazenam gorduras
metabólico - relativo  a transformações de substâncias químicas



A morte celular de células que armazenam gorduras
 não é verificada em seres
humanos em condições normais de funcionamento metabólico.
*/

class ListaFilmes extends Array {
  constructor(nome, ...items) {
    super(...items);
    this.nome = nome;
  }

  adicionar(filme) {
    this.push(filme);
  }

  listarBemVotados(limit = 5) {
    return console.log(
      this
        .sort(function
          (a, b) {
          if (a.estrelas > b.estrelas) {
            return -1;
          }
          else {

            return 1;
          }

        }
        )
        .slice(0, limit)
    );

  }
}

let filmes = new ListaFilmes("Filmes Favoritos",
  { nome: 'Inception', estrelas: 10 },
  { nome: 'Fragmentado', estrelas: 9 },
  { nome: 'Lights Out', estrelas: 9 },
  { nome: 'O Labirinto do Fauno', estrelas: 10 },
  { nome: 'Matrix', estrelas: 10 },
  { nome: 'El Cuerpo', estrelas: 8 },
  { nome: 'Into the Wild', estrelas: 200 },
  { nome: 'Coherence', estrelas: 7 },
  { nome: 'Predestination', estrelas: 8 }
)


class A {
  exibir() {
    console.log('A foi invocada');
  }
}

class B extends A {
  exibir() {
    console.log('B foi invocada');
  }
}

let a = new A();
let b = new B();