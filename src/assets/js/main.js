const form = document.querySelector('.h__form');
const openMenu = document.querySelector('.js-open-menu');
const menu = document.querySelector('.js-categorias');
const closeMenu = document.querySelector('.js-close-menu');

openMenu.addEventListener('click', () => menu.style.display = 'block');

closeMenu.addEventListener('click', () => menu.style.display = 'none');

form.addEventListener('submit', event =>{
    event.preventDefault();
})

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
