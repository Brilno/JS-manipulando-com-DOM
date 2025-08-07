// ==================================================
// // ==> SELECIONAR ELEMENTOS <==
// 1. Selecione o elemento <body> e armazene em uma variável
let body = document.getElementsByTagName("body")

// 2. Selecione todos os elementos <p> e armazene em uma variável
let paragrafos = document.getElementsByTagName("p")

// 3. Selecione o elemento com id "meuId" (crie este elemento no HTML se necessário)
let elementoPorId = document.getElementById("meuid")

// ==================================================
// ==> CRIAR E ADICIONAR ELEMENTOS
// 4. Crie um novo elemento <h1>
let novoH1 = document.createElement("h1")

// 5. Defina o texto do h1 como "Minha Atividade DOM"
novoH1.textContent = "minha atividade DOM"

// 6. Adicione o h1 ao body
body.appendChild(novoh1)
// ==================================================
// ==> MODIFICAR ESTILOS <==
// 7. Mude a cor de fundo do body para "lightblue"
body.style.backgroundColor = "lighblue"

// 8. Mude a cor do texto de todos os parágrafos para "darkgray"
for (let p of paragrafos) {
  p.style.color = "darkgray"
}

// ==================================================
// ==> MANIPULAR ATRIBUTOS <==
// 9. Adicione uma classe "destaque" ao elemento com id "meuId"
elementoPorId.

// 10. Adicione um atributo "title" com valor "Elemento destacado" ao mesmo elemento
elementoPorId.