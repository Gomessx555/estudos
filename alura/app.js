function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

 let campoPesquisa = document.getElementByid

    let resultados = ""
    
    for (let dado of dados) {
        resultados += `
        <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}">Instagram</a>
        </div>
    `
    }
    
    section.innerHTML = resultados
}

