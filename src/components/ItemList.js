import Item from "./Item"

const ItemList = (products) => {
return (
    <ul>

    {products.map ((products) =>(

    <Item product={product} />  

    
    
    ))}    
      



    
    </ul>



);

};


export default ItemList;