// ==================================================
// // ==> SELECIONAR ELEMENTOS <==

// 1. Selecione o elemento <body> e armazene em uma variável
// getElementsByTagName retorna uma lista (array-like).
// Para pegar o único elemento <body>, você precisa acessar o primeiro item [0].
// Uma forma mais direta é usar document.body.
let body = document.getElementsByTagName("body")[0];

// 2. Selecione todos os elementos <p> e armazene em uma variável
let paragrafos = document.getElementsByTagName("p");

// 3. Selecione o elemento com id "meuId"
// A letra 'I' em "meuId" precisa ser maiúscula para corresponder ao padrão CamelCase.
let elementoPorId = document.getElementById("meuId");

// ==================================================
// ==> CRIAR E ADICIONAR ELEMENTOS

// 4. Crie um novo elemento <h1>
let novoH1 = document.createElement("h1");

// 5. Defina o texto do h1 como "Minha Atividade DOM"
// O texto precisa estar entre aspas duplas ou simples.
novoH1.textContent = "Minha Atividade DOM";

// 6. Adicione o h1 ao body
// O nome da variável do elemento h1 é 'novoH1', não 'novoh1'.
body.appendChild(novoH1);

// ==================================================
// ==> MODIFICAR ESTILOS <==

// 7. Mude a cor de fundo do body para "lightblue"
// O nome da cor "lightblue" estava escrito incorretamente.
body.style.backgroundColor = "lightblue";

// 8. Mude a cor do texto de todos os parágrafos para "darkgray"
// Este trecho estava correto.
for (let p of paragrafos) {
  p.style.color = "darkgray";
}

// ==================================================
// ==> MANIPULAR ATRIBUTOS <==

// 9. Adicione uma classe "destaque" ao elemento com id "meuId"
// getElementById precisa ser escrito com 'I' maiúsculo e o ID entre aspas.
// classList.add() é o método correto, e o nome da classe deve estar entre aspas.
elementoPorId.classList.add("destaque");

// 10. Adicione um atributo "title" com valor "Elemento destacado" ao mesmo elemento
// setAttribute() é o método correto, e os argumentos precisam estar entre aspas.
elementoPorId.setAttribute("title", "Elemento destacado");