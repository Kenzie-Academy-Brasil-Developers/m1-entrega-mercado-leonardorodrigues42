const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

// Selecionando as sessões por ID
const secaoFruta   = document.querySelector('.fruits')
const secaoBebida  = document.querySelector('.drinks')
const secaoHigiene = document.querySelector('.hygiene')


// Criando HTML
const ulFruta   = document.createElement('ul')
const ulBebida  = document.createElement('ul')
const ulHigiene = document.createElement('ul')


// Adicionando classe & Adicionando ul na sessão

secaoFruta.appendChild(ulFruta) 
secaoBebida.appendChild(ulBebida) 
secaoHigiene.appendChild(ulHigiene) 

// Separando array por sessão
const frutas = []
const bebidas = []
const higiene = []

const sessoes = products.forEach(
  elemento => elemento.category == "Frutas"? frutas.push(elemento):
  elemento.category == "Bebidas"? 
  bebidas.push(elemento) : higiene.push(elemento)
)

for (let i = 0; i < products.length; i++) {
  if (products[i].image == undefined) {
    products[i].image = "./img/products/no-img.svg"
  }
}
  
function criaProduto(item) {
  
  const productCard     = document.createElement('li')
  const productImg      = document.createElement('img')
  const productMain     = document.createElement('main')
  const productTitle    = document.createElement('h1')
  const productCategory = document.createElement('h5')
  const productPrice    = document.createElement('strong')

  productCard.className     = 'product'
  productImg.className      = 'product-img'
  productMain.className     = 'product-main'
  productTitle.className    = 'product-title'
  productCategory.className = 'product-category'
  productPrice.className    = 'product-price'

  productCard.appendChild(productImg)
  productCard.appendChild(productMain)
  productMain.appendChild(productTitle)
  productMain.appendChild(productCategory)
  productMain.appendChild(productPrice)
  
  productImg.src = item.image
  productTitle.innerHTML = item.title
  productCategory.innerHTML = item.category
  productPrice.innerHTML =  `R$${item.price}`
  
  const li = productCard
  return li
  
}

function insereCard() {
  console.log(frutas)
  for (let i = 0; i < frutas.length; i++) {
    ulFruta.appendChild(criaProduto(frutas[i]))
  }

  for (let i = 0; i < bebidas.length; i++) {
    ulBebida.appendChild(criaProduto(bebidas[i]))
  }

  for (let i = 0; i < higiene.length; i++) {
    ulHigiene.appendChild(criaProduto(higiene[i]))
  }
}

insereCard()