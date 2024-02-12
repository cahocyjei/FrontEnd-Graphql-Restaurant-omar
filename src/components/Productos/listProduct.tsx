import React from "react";
import Producto from "@models/producto";
import Link from "next/link";
import { Card, CardGroup, Image } from "semantic-ui-react";

export type ProductListProp = {
  productList: Producto[];
};

const mapProductsToCards = ((products: Producto[]):any=>{  
  products.map(product=>{
    <Card key={ product.id} style={{ width: "400px",borderRadius:'10px' }}>
      <Link as = "a" href={`products/api/${product.id}`} >
        <Image src={product.image}/>
      </Link>
      <Card.Header style={{marginLeft:'20px',marginBottom:'20px',fontSize:'large'}}>
        {product.name}
      </Card.Header>
    </Card> 
});
});
 
const ListProducts = ({ productList } : { productList: Producto[]} ) => (
  <div>
    <h1 style={{textAlign:'center',color: 'darkolivegreen'}}>LISTA DE AVOCADOS</h1>
    <CardGroup itemsPerRow={2} stackable style={{ justifyContent: "center",margin:'10px'}}>
      { mapProductsToCards(productList)}
    </CardGroup>
  </div> 
);

export default ListProducts;
