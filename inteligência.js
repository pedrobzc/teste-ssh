const catalogo = [
    {
    id: 0,
    nome: 'Abacaxi legal',
    descricao: 'É um abacaxi legal',
    marca: 'Frutão',
    preco: 10,
    imagem: 'loja do pedro produtos.jpg',
}, 
{
    id: 1,
    nome: 'Abacate sorridente',
    descricao: 'É um abacate sorridente',
    marca: 'Frutão',
    preco: 5,
    imagem: 'loja do pedro produtos 2.jpg',
  },
  {
    id: 2,
    nome: 'Laranja feliz',
    descricao: 'É uma laranja feliz',
    marca: 'Frutão',
    preco: 14,
    imagem: 'loja do pedro produtos 3.jpg',
  },
  {
    id: 3,
    nome: 'kiwi saboroso',
    descricao: 'É um kiwi saboroso',
    marca: 'Frutão',
    preco: 16,
    imagem: 'loja do pedro produtos 4.jpg',
  },
  {
    id: 4,
    nome: 'Pêra gentil',
    descricao: 'É uma pêra gentil',
    marca: 'Frutão',
    preco: 8,
    imagem: 'loja do pedro produtos 5.jpg',
  },
  {
    id: 5,
    nome: 'Uva maluca',
    descricao: 'É uma uva maluca',
    marca: 'Frutão',
    preco: 3,
    imagem: 'loja do pedro produtos 7.jpg',
  }
];

  for (const produtoCatalogo of catalogo) {
    const podt1 = `<div id= "card-produto-${produtoCatalogo.id}">
    <img src="./produtoss/${produtoCatalogo.imagem}" alt="Não carregou">
    <p class='nome'>${produtoCatalogo.nome}</p>
    <p>${produtoCatalogo.descricao}</p>
    <p>${produtoCatalogo.marca}</p>
    <p>$${produtoCatalogo.preco}</p>
    <button>Adicionar</button>
    </div>`;
    
    document.getElementById("container-produto").innerHTML += podt1 
  }
