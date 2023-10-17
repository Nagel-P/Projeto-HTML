const produtos = [
    { nome: 'Xbox 720', descricao: 'Descrição do Produto 1', preco: 5000 },
    { nome: 'Notebook Gamer Ultima Geração', descricao: 'Descrição do Produto 2', preco: 6000 },
    { nome: 'Fiat Uno quebrado', descricao: 'Descrição do Produto 3', preco: 4500 }
];

function pesquisar() {
    const termoPesquisa = document.getElementById('searchInput').value.toLowerCase();
    const resultados = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(termoPesquisa) || produto.descricao.toLowerCase().includes(termoPesquisa)
    );

    atualizarExibicao(resultados);
}

function atualizarExibicao(resultados) {
    const container = document.getElementById('productContainer');
    container.innerHTML = '';

    if (resultados.length === 0) {
        container.innerHTML = '<p>Nenhum produto encontrado.</p>';
        return;
    }

    resultados.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.className = 'product';
        produtoDiv.innerHTML = `
            <img src="imagem_produto.jpg" alt="${produto.nome}">
            <div class="info">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <p>Preço: $${produto.preco}</p>
            </div>
        `;
        container.appendChild(produtoDiv);
    });
}