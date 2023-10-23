import React from "react";
import Producto from "@models/producto";
import { GetStaticProps } from "next";
import styles from "@/styles/id.module.css";
import { Card, Icon, Image } from "semantic-ui-react";

export const getStaticPaths = async () => {
  const response = await fetch("https://platzi-avo.vercel.app/api/avo");
  const { data: productList } = await response.json();
  const paths = productList.map(({ id }: any) => ({
    params: {
      id,
    },
  }));
  return {
    paths,
    //incremental static generation
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://platzi-avo.vercel.app/api/avo/${params?.id}`
  );
  const product: Producto = await response.json();
  return {
    props: {
      product,
    },
  };
};

const Product = ({ product }: { product: Producto }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card>
        <Image src={product.image} wrapped ui={false} />
        <Card.Header className={styles.card}>{product.name}</Card.Header>
        <Card.Header className={styles.cardHeader} >{product.price}</Card.Header>
        <Card.Description className={styles.card}>{product.attributes.description}</Card.Description>
      </Card>
    </div>
  );
};

export default Product;
