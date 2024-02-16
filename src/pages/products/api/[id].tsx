import React from "react";
import Producto from "../../../models/user";
import { GetStaticProps } from "next";
import styles from "@/styles/id.module.css";
import { Card, Icon, Image } from "semantic-ui-react";

export const getStaticPaths = async () => {
  const response = await fetch("https://nestgraphql-restaurant-develop.up.railway.app/graphql");
  const { data } = await response.json();
  const paths = data.map(({ id }: any) => ({
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
    `https://nestgraphql-restaurant-develop.up.railway.app/graphql/${params?.id}`
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
    <div>
      <Card.Group
        itemsPerRow={2}
        stackable
        style={{
          margin: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card as="a" style={{ width: "400px" }}>
          <Image src={product.image} />
          <Card.Header className={styles.card}>{product.name}</Card.Header>
          <Card.Header className={styles.cardHeader}>
            {product.price}
          </Card.Header>
        </Card>
        <Card>
          <Card.Header className={styles.card}>
            {product.attributes.description}
          </Card.Header>
        </Card>
      </Card.Group>
    </div>
  );
};

export default Product;
