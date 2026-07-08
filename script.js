const produtos = [
  {
    nome: "X Burguer",
    preco: 18.00,
    categoria: "Hambúrgueres",
    imagem: "https://via.placeholder.com/300x200?text=X+Burger"
  },
  {
    nome: "X Bacon",
    preco: 22.00,
    categoria: "Hambúrgueres",
    imagem: "https://via.placeholder.com/300x200?text=X+Bacon"
  },
  {
    nome: "Batata Frita G",
    preco: 20.00,
    categoria: "Porções",
    imagem: "https://via.placeholder.com/300x200?text=Batata"
  }
];

let carrinho = [];

const produtosDiv = document.getElementById("produtos");

produtos.forEach((produto) => {
  produtosDiv.innerHTML += `
    <div class="card">
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>
      <button onclick="adicionar('${produto.nome}', ${produto.preco})">
        Adicionar
      </button>
    </div>
  `;
});

function adicionar(nome, preco) {
  carrinho.push({ nome, preco });
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const itens = document.getElementById("itens");
  const total = document.getElementById("total");

  itens.innerHTML = "";

  let soma = 0;

  carrinho.forEach(item => {
    itens.innerHTML += `<p>${item.nome} - R$ ${item.preco.toFixed(2).replace(".", ",")}</p>`;
    soma += item.preco;
  });

  total.innerHTML = `R$ ${soma.toFixed(2).replace(".", ",")}`;
}

document.getElementById("finalizar").addEventListener("click", () => {

  if(carrinho.length === 0){
    alert("Seu carrinho está vazio.");
    return;
  }

  let mensagem = "🍔 *NOVO PEDIDO*%0A%0A";

  carrinho.forEach(item=>{
    mensagem += `• ${item.nome} - R$ ${item.preco.toFixed(2).replace(".", ",")}%0A`;
  });

  const total = carrinho.reduce((a,b)=>a+b.preco,0);

  mensagem += `%0A*Total:* R$ ${total.toFixed(2).replace(".", ",")}`;

  window.open(`https://wa.me/5541984137090?text=${mensagem}`);
});
