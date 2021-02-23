const form = document.querySelector('.h__form');
const openMenu = document.querySelector('.js-open-menu');
const menu = document.querySelector('.js-categorias');
const closeMenu = document.querySelector('.js-close-menu');
const cart = document.querySelector('.cart');



const productsInOffer = [
    {
        key: 0,
        link: 'link0',
        nome: 'Controle Nitendo',
        img: './assets/img/controle-nitendo.jpg',
        description: 'adipiscing elit. Donec eget ipsum consectetur',
        quantityInCart: 0
    },{
        key: 1,
        link: 'link1',
        nome: 'Controle de Xbox',
        img: './assets/img/controle-xbox.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        quantityInCart: 0
    },{
        key: 2,
        link: 'link2',
        nome: 'Mesa Gamer',
        img: './assets/img/mesa-gamer.jpg',
        description: 'adipiscing elit. Donec eget ipsum consectetur',
        quantityInCart: 0
    },{
        key: 3,
        link: 'link3',
        nome: 'Teclado Gamer',
        img: './assets/img/teclado-gamer.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        quantityInCart: 0
    }
];


openMenu.addEventListener('click', () => menu.style.display = 'block');

closeMenu.addEventListener('click', () => menu.style.display = 'none');

form.addEventListener('submit', event =>{
    event.preventDefault();
});

const initializesShop = () => {
    const gettingProducts = document.querySelector('.shop__products')

    productsInOffer.map((product) => {
        gettingProducts.innerHTML += `

            <div class="shop__one-product shop--margin">
                <div class="shop__if-have-finished"></div>
                <!-- End shop__if-have-finished -->

                <div class="shop__img-of-product" 
                    style="background-image: url(` + product.img + `);">
                    <div class="shop__if-have-offer"></div>
                </div>
                <!-- End shop__img-of-product -->

                <div class="shop__description">
                    <h3>`+ product.nome +`</h3>
                    <p>
                        `+ product.description +`
                    </p>
                </div>
                <!-- End shop__description -->

                <div class="shop__prace">
                    <div class="shop__before">De R$ <span class="js-before">449,00</span> Por:</div>
                    <div class="shop__interest-free">R$ <span class="js-interest-free">256,00</span> à vista ou no boleto</div>
                    <div class="shop__in-the-card">x12 de R$ <span class="js-in-the-card">22</span> sem juros</div>
                </div>
                <!-- End shop__prace -->
                <div class="flex">
                    <a href="`+ product.link +`" 
                        class="shop__purchase">COMPRAR</a>
                    
                        <button key="`+ product.key +`"
                        class="shop__cart">Car</button>
                </div>
            </div>
        `
    })
};

initializesShop();
// se eu chamar essas constantes antes de initializesShop
// não vai adicionar os itens no cart e nem remover
const addInCart = document.querySelectorAll('.shop__cart');






const updateTheCart = () => {
    cart.innerHTML = '';
    productsInOffer.map((product) => {
        if (product.quantityInCart > 0) {
            cart.innerHTML += `
            <p>`+ product.nome +`, quantidade `
            + product.quantityInCart +`</p>
            
            `
        }
    })
}


for (var i = 0; i < addInCart.length; i++) {
    // se eu usar arrow function não vai funcionar
    addInCart[i].addEventListener('click', function() {
        let addItem = this.getAttribute('key');
        productsInOffer[addItem].quantityInCart++
        updateTheCart()
    })
}

// import ClassName/*, { func }*/ from './main.export.js';




    












// Para poder recarregar sem precisar dar load

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



// esse arquivo está linkado no index.html



