const form = document.querySelector('.h__form');
const openMenu = document.querySelector('.js-open-menu');
const menu = document.querySelector('.js-categorias');
const closeMenu = document.querySelector('.js-close-menu');
const cart = document.querySelector('.cart');

// isso aqui para que eu possa inicializar a loja
// e trazer os itens que tem dentro da loja
import { productsInOffer } from './initializesShop.js';
import { initializesShop } from './initializesShop.js';

initializesShop();
// se eu chamar essas constantes antes de initializesShop
// não vai adicionar os itens no cart e nem remover
const addInCart = document.querySelectorAll('.shop__cart');

openMenu.addEventListener('click', () => menu.style.display = 'block');

closeMenu.addEventListener('click', () => menu.style.display = 'none');

form.addEventListener('submit', event => {
    event.preventDefault();
});


const updateTheCart = () => {
    cart.innerHTML = '';
    productsInOffer.filter((product) => {
        if (product.quantityInCart > 0) {
            cart.innerHTML += `
                <p>`+ product.nome + `, quantidade `
                + product.quantityInCart + `</p>
                
                `
        }
    })
    saveProduct()
}



for (var i = 0; i < addInCart.length; i++) {
    // se eu usar arrow function não vai funcionar
    addInCart[i].addEventListener('click', function () {
        let addItem = this.getAttribute('key');
        productsInOffer[addItem].quantityInCart++
        updateTheCart()
    })
}

const saveProduct = () => {
    const productSaveWithSucesse = []
    productsInOffer.filter((product) => {
        // com map não vai dar certo
        if (product.quantityInCart > 0) {
            productSaveWithSucesse.push(
                product.nome,
                product.quantityInCart
            )
        }    
            
    });

    // aqui eu começo a coloca-lo no "cookie"
    // eu posso converter isso em array
    const productJSON = JSON.stringify(productSaveWithSucesse)

    // esse localStorage salva string
    // por isso eu converte lá em cima o meu array
    // em uma string
    localStorage.setItem('productInCart', productJSON)
    console.log(productJSON);
}



const getLocalStore = (quantity) => {
    const addedInCart = localStorage.getItem('productInCart');
    // isso converte de volta para o que era antes
    const convertArray = JSON.parse(addedInCart)
    
    
    quantity = convertArray[1]
    console.log(quantity);

    cart.innerHTML += `
        ${convertArray[0]}, quantidade ${convertArray[1]}
    `
}
getLocalStore()





// Para poder recarregar sem precisar dar reload

// const shopCar = document.querySelector('')

// shopCar.addEventListener('click', fetch('pagina1.html')
//     .then(resposta => {
//         // se por acaso a página não existir vai direto para o catch
//         // lá eu posso tratar o erro 
//             // jagando no console
//             // ou direto na página 
//             // como 404 por exemplo
//         if(resposta.status !== 200) throw new Error ('ERRO 404 NOSSO')
//         return resposta.text()
//     })
//     .then(html => console.log(html))
//     .catch(err => console.error(err)))
