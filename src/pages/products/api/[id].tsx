import React from "react";
import Producto from "@models/producto";
import { GetStaticProps } from "next";
import styles from "@/styles/id.module.css";
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
    <div>
      <div className={styles.container}>
        <div className={styles.card}>
          <img
            style={{ width: 200, height: 200, borderRadius: 25 }}
            src={product.image}
            alt="Imagen"
          />
          <h3 style={{marginLeft:50}}>{product.name}</h3>
          <h2>{product.price}</h2>
        </div>
      </div>
    </div>
  );
};

export default Product;
