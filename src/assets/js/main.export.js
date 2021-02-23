// é bom q eu só crie a função ou class e 
// só execute no arquivo que eu quiser
// q seja importado

export const getLocalStore = () => {
    const addedInCart = localStorage.getItem('productInCart');
    // isso converte de volta para o que era antes
    const convertArray = JSON.parse(addedInCart)
    
    
    
    if (convertArray[1] > 0) {
        console.log(convertArray)
    }
}
