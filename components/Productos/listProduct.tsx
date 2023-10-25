import React from "react";
import Producto from "@models/producto";
import Link from "next/link";
import { Card, Header, Image } from "semantic-ui-react";

type ProductListProp = {
  productList: Producto[];
};

const mapProductsToCards = (products: Producto[]) =>
  products.map(({ name, id, price, image }) => (
    <Card as="a" style={{ width: "400px",borderRadius:'10px' }}>
      <Link  href={`/products/api${id}`} >
        <Image src={image} />
      </Link>
      <Card.Header style={{marginLeft:'20px',marginBottom:'20px',fontSize:'large'}}>{name}</Card.Header>
    </Card>
  ));

const ListProducts = ({ productList }: ProductListProp) => (
  <div>
    <h1 style={{textAlign:'center',color: 'darkolivegreen'}}>LISTA DE AVOCADOS</h1>
    <Card.Group itemsPerRow={2} stackable style={{ justifyContent: "center",margin:'10px'}}>
      {mapProductsToCards(productList)}
    </Card.Group>
  </div>
);

export default ListProducts;
