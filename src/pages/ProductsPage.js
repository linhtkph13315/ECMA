import axios from "axios";


const ProductsPage = async () =>{
    const res = await fetch("http://localhost:3000/products", {
        method: "GET",
    });
    const products = await res.json();
    return `
            <div class= "text-center grid-cols-2">
                ${products.map(product => 
                `<div>
                    <h2> <a href="/products/${product.id}">${product.name}</a></h2>
                    <p>${product.price}</p>
                    <p>${product.desc}</p>
                </div>`)}
            </div>x 
            `;
};

export default ProductsPage;