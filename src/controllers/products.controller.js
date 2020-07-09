import products from '../views/products.html'

export default ()=>{

    const divElement = document.createElement('div')
    divElement.classList='container'
    divElement.innerHTML=products;

    return divElement;
}