import {useState} from "react"; 


const productos = [
    {
     id: "1",
     name: "bongos",
     description: "aqui va la descripcion",
     prize: 5,
     stock: 10,
     img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/425/734/products/07991-0c98456216ac263e1416170413169084-640-0.jpg",
    },
    {
        id: "2",
        name: "cultivo",
        description: "aqui va la descripcion",
        prize: 6,
        stock: 10,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/425/734/products/18771-beab017604ca43b5e716119470508767-480-0.jpg",
       
       }
    
    ]

const ItemListContainer = ({greeting}) => {

    const [ products, setProducts ] = useState ([]);

    const productList = new Promise ((resolve) =>   setTimeout(()=> {resolve (productos); }, 2000 )  );
    productList.then ((data) => setProducts( data) );

    console.log(products);

return (
<div>
{greeting}
    <ul>
    {products.map((product)=> (
    <div>
        <img src={product.img} />
        <li> {product.name} </li>
        
        
        </div> ))}

    
    </ul>
</div>
)


};

export default ItemListContainer;