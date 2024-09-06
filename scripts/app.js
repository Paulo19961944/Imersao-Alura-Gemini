// Função que faz a pesquisa
function pesquisar(){
    const section = document.getElementById('game-content'); // Captura a Section
    let searchField = document.getElementById('search').value; // Captura o Valor do Campo de Busca
    
    let resultados = ""; // Define a Variável Resultados
    searchField = searchField.toLowerCase().trim() // Define a Variável searchField como minuscula e remove os espaços em branco

    // Se o não digitar nada
    if(searchField == ""){
        section.innerHTML = "<p>Você precisa digitar o nome do jogo ou genêro</p>";
        section.style.overflow = 'auto'
        return;
    }

    // Percorre todos os Dados
    for(let dado of dados){
        let titulo = dado.nome.toLowerCase().trim(); // Declara uma Variável Titulo
        let tags = dado.tags.toLowerCase().trim(); // Define as Tags
        
        // Se o Titulo ou as tags incluir o que está no campo
        if(titulo.includes(searchField) || tags.includes(searchField)){
            // Adiciona os Dados no HTML
            resultados += `
                <article class="game-info">
                    <h2>${dado.nome}</h2>
                    <p>${dado.descricao}</p>
                    <p><strong>Ano de Lançamento: </strong>${dado.anoLancamento}</p>
                </article>
            `
        }
    }
    // Se não encontrar os resultados
    if(!resultados) {
        section.innerHTML = "<p>Nenhum Jogo Encontrado!</p>"; // Insere que nenhum jogo foi encontrado
    } else{
        section.innerHTML = resultados; // Senão, mostrar os resultados
    }
}